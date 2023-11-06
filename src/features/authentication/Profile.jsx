import { useState } from "react"
import { useRef } from "react"
import toast from "react-hot-toast"
import { useGetUser } from "./useGetUser";
import UploadImage from "../../ui/UploadImage";
import MiniSpinner from '../../ui/MiniSpinner'
import { updateUser } from "../../services/apiAuthentication";
import Spinner from "../../ui/Spinner";
const Profile = () => {
const [isLoading, setIsLoading]=useState()
const fullNameEle =useRef(null)
const avatarEle =useRef(null)
const passwordEle =useRef(null)
const passwordConfirmEle =useRef(null)


const {user:{user_metadata,email},loading} = useGetUser();
async function handlerSubmit(e){
    e.preventDefault();
    let fullName = fullNameEle.current.value;
    let password = passwordEle.current.value;
    let passwordConfirm = passwordConfirmEle.current.value;
    let avatar = avatarEle?.current?.files[0];
    
    
    if (fullName!=user_metadata.fullName || password!='' ||avatar) {
        if (!password || (password && password == passwordConfirm)) {
          setIsLoading(true);
          await updateUser( password,fullName, avatar,user_metadata?.avatar);
          setIsLoading(false);
          toast.success('update success👍')
       
          window.location.href='./cities'
        
        } else {
          toast.error("password and passwordConfirm not match")
        }
      } else {
        toast.error("To update, change the name or photo or password")
      }
    }
  




  
    if (loading)return<Spinner/>
   

  return (
    <form
    onSubmit={handlerSubmit}
    action=""
    className="mt-10  h-[60vh] w-[90%]  max-w-[900px]     mx-auto rounded-md   flex flex-col  sm:gap-4 justify-start"
  >
    <div className="w-full flex flex-col gap-3 items-center justify-center">
    

    <div className="w-full flex flex-col lg:flex-row gap-3">


    <div className="w-full text-start">
      <label htmlFor="email" className="text-slate-100">
      email:
      </label>
      <input
        disabled={true}
        
        id="email"
        className="cursor-not-allowed font-bold outline-none border-2 bg-gray-600 text-slate-300 border-sky-400   ring-sky-400 focus:ring-2 w-full ps-4 p-[0.5rem] rounded-md "
        type="text"
        defaultValue={email}
        />
    </div>

    <div className="w-full  text-start">
      <label htmlFor="fullName" className="text-slate-100">
        fullName:
      </label>
      <input
        disabled={isLoading}
        ref={fullNameEle}
        id="fullName"
        className="cursor-pointer font-bold outline-none border-2 bg-gray-600 text-white border-sky-400   ring-sky-400 focus:ring-2 w-full ps-4 p-[0.5rem] rounded-md "
        type="text"
        defaultValue={user_metadata?.fullName}
        />
    </div>

        </div>


        <div className="w-full flex flex-col lg:flex-row gap-3 lg:my-2">
    <div className="w-full  text-start">
      <label htmlFor="password" className="text-slate-100">
      password:
      </label>
      <input
        disabled={isLoading}
        ref={passwordEle}
        id="password"
        className="cursor-pointer font-bold outline-none border-2 bg-gray-600 text-white border-sky-400   ring-sky-400 focus:ring-2 w-full ps-4 p-[0.5rem] rounded-md "
        type="password"
      />
    </div>

    <div className="w-full  text-start">
      <label htmlFor="passwordConfirm" className="text-slate-100">
      confirm password:
      </label>
      <input
        disabled={isLoading}
        ref={passwordConfirmEle}
        id="passwordConfirm"
        className="cursor-pointer font-bold outline-none border-2 bg-gray-600 text-white border-sky-400   ring-sky-400 focus:ring-2 w-full ps-4 p-[0.5rem] rounded-md "
        type="password"
      />
    </div>
   
   

   </div>



    <div className="w-full">
        <UploadImage inputRef={avatarEle} size='small' maxWidth='500px' >
        <UploadImage.Image
          icon={<img src='/icon-user-1.png'/>}
          src={user_metadata?.avatar}
          />

        <UploadImage.Drop 
       
          iconClick={<img src="/icon-click-1.png" alt="" />}
          iconDrop={<img className="drop" src="/icon-upload-drop.png" alt="" />}
        >
          <input accept="image/*" type="file" ref={avatarEle} multiple/>
        </UploadImage.Drop>
      </UploadImage>
        </div>

      
        <div className="mx-auto relative flex justify-center gap-4 w-[110px] sm:w-[150px]   bg-gradient-to-r from-pink-500 to-yellow-500 text-white   rounded-full font-bold">
          <button
           className="justify-center gap-4 w-full bg-gradient-to-r p-1 from-sky-400 to-indigo-500 text-white   rounded-full font-bold"
            disabled={isLoading}
            type="submit"
          >
            update

          </button>
          {isLoading ? <MiniSpinner colorSpinner="indigo-600" /> : ""}
        </div>
        
  


    </div>
    

    </form>

  )
}

export default Profile