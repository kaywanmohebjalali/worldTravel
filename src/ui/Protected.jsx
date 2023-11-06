import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckUser } from '../features/authentication/useCheckUser'

import Logo from './Logo'
const Protected = (prop) => {
 
    const {children}= prop
const navigate = useNavigate()
const {user,loading}=useCheckUser()
const isAuthenticated= user?.role=='authenticated'

useEffect(()=>{
      if(!loading && !isAuthenticated)navigate('/login')
},[navigate,loading,isAuthenticated])


if(loading)return<div className="bg-gray-800 w-full h-[100vh] flex justify-center items-center"><Logo/></div>

if (isAuthenticated) return<>
     {children}
    </>

}

export default Protected