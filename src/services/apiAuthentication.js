import toast from 'react-hot-toast'
import { supabase,supabaseUrl } from './supabase'

 async function signup({email, password,fullName,avatar},setLoading){
    try {
      
   
    let fileName = ''
    if(avatar){
        fileName = `avatar-${email}-${Math.random()}`
        const {error:storageError} =await supabase.storage.from('avatars')
        .upload(fileName, avatar)
        if(storageError) throw new Error(storageError?.message)
    }
    const { data, error } = await supabase
    .auth
    .signUp({email, password,options:{
      data:{
  
        fullName,
        avatar:avatar?
        `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
        :`${supabaseUrl}/storage/v1/object/public/avatars/default-username.png`
      }
    }})
   
      
      if(error) throw new Error(error?.message)
      
      return data
    } catch (error) {
      setLoading(false)
      error?.message=='User already registered'&&toast.error(error?.message)
      console.log('error ',error?.message); 
    }
  
  }
  

async function logout() {

        try {
            let { error } = await supabase.auth.signOut()
            if (error) throw new Error('error logout')

            return 'logout'
        } catch (error) {
            console.log(error.message);
        } 

}

async function login({email,password}) {
 

    try {
        let { data, error } = await supabase.auth.signInWithPassword({
           email,
           password
        })
        if (error && error=='AuthApiError: Email not confirmed'){
            toast.error('Email not confirmed')
            throw new Error('login error')
         } else if(error && error=='AuthApiError: Invalid login credentials'){
          toast.error('Email or password not valid')
          throw new Error('login error')
        }
     
        
     
        return data
    } catch (error) {
        console.log(error.message);
        return error
        
    }


}

 async function getCurrentUser(){

    const { data:{session} } = await supabase.auth.getSession()
    if(!session)return null
  
    const {data,error}=await supabase.auth.getUser()
  
  
    if(error)throw new Error(error?.message)
   
    return data?.user
  
  
  }


  async function getUser(){

    const { data: { user } } = await supabase.auth.getUser()
      
    
      return user
  
  }
  


  async function updateUser(password, fullName, avatar,previousAvatar ) {
 
    let updateData={};
    if (password) updateData = {...updateData, password }
    if (fullName) updateData = {...updateData, data: { fullName } }
    const { data: dataUpdateUser, error: updateUserError } = await supabase.
    auth.updateUser(updateData)
    if (updateUserError){
      toast.error('error update fullname or password')
      throw new Error(updateUserError?.message)
    } 
    if (!avatar) return dataUpdateUser
  
  
    let fileName = `avatar-${dataUpdateUser?.user?.id}-${Math.random()}-${avatar?.name}`
    const { error: storageUploadError } = await supabase.storage.from('avatars')
      .upload(fileName, avatar)
    if (storageUploadError) {
      toast.error('error update image')
      throw new Error(storageUploadError?.message)
    }
  
    // delete previous avatar
      let imageName=previousAvatar?previousAvatar?.split('/').at(-1):''
      if(imageName && imageName!='default-username.png'){
  
        const {error:errorRemoveStorage } =await supabase
        .storage
        .from('avatars')
        .remove(imageName)
        
        if(errorRemoveStorage)throw new Error('error delete avatar previous image in database')
      }
    
  
    const { data: dataUpdateAvatar, error } = await supabase.auth
      .updateUser({
        data: {
          avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
        }
      })
    if (error) throw new Error(error?.message)
  
    return dataUpdateAvatar
  
  }

export {signup, login, logout ,getCurrentUser, getUser, updateUser}



