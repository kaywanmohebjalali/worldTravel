import { useRef, useState } from "react";
import PageNav from "../../ui/PageNav";
import {login} from '../../services/apiAuthentication'
import { useNavigate } from "react-router-dom";
import MiniSpinner from '../../ui/MiniSpinner'
import toast from "react-hot-toast";
const LoginForm = () => {
  const [show, setShow]=useState('password')
  const emailEle = useRef('')
  const passwordEle = useRef('')
  const navigate = useNavigate()
  const [isLoading, setIsLoading]=useState(false)

async  function handlerSubmit(e){
    e.preventDefault();
    if(emailEle.current.value && passwordEle.current.value){
      setIsLoading(true)
      const data=  await  login({email:emailEle.current.value, password:passwordEle.current.value})
      setIsLoading(false)
      if(data?.user?.role=='authenticated'){
        navigate('/app/cities',{replace:'/'})
      }
      
    
    }else{
      toast.error('please enter email and password')
    }
}

  function changeShow(){
    if(show=='password'){
      setShow('text')
    }else{

      setShow('password')
    }
  }

  
  return (
    <main className="login h-[100vh] bg-gray-800 bg-center bg-no-repeat bg-cover w-full">
          <div className="w-full h-[100vh] bg-no-repeat bg-cover  bg-gradient-to-b from-slate-600 opacity-[0.9] absolute">

      <PageNav />

      <form
      onSubmit={handlerSubmit}
        action=""
        className="w-[90%] sm:w-2/3 max-w-[600px] mx-auto rounded-md mt-20  landscape:mt-2 p-4 py-8 flex flex-col gap-6 justify-center"
      >
        <div className="">
          <label htmlFor="email" className="text-slate-100">
            Email address :
          </label>
          <input
          
          disabled={isLoading}
          ref={emailEle}
            id="email"
            className="bg-gray-800 border-2 border-sky-400 font-bold outline-none  ring-sky-400 focus:ring-2 focus:text-slate-200 w-full ps-4 p-[0.5rem] rounded-md mt-1"
            type="email"
          />
        </div>

        <div className="">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-slate-100" >
              Password 
            </label>
     { show=='text'?<svg
            onClick={changeShow}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>:<svg
              onClick={changeShow}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>}

          </div>
          <input
          disabled={isLoading}
          ref={passwordEle}
            id="password"
            className="bg-gray-800  border-2 border-sky-400 font-bold outline-none  ring-sky-400 focus:ring-2 text-slate-200 ps-4 w-full p-[0.5rem] rounded-md mt-1"
            type={show}
          />
        </div>

    <div className="flex justify-between w-full bg-green ">
         <div className="relative flex justify-center gap-4 min-w-[100px] max-w-[150px] w-[30%]  text-white   rounded-full font-bold">

        <button className="justify-center gap-4 h-auto w-full bg-gradient-to-r p-1 from-sky-400 to-indigo-500 text-white   rounded-full font-bold"
          disabled={isLoading} 
           type="submit">
          
          {isLoading ?<MiniSpinner  colorSpinner='indigo-600'/>:'login'}
          
        </button>
          
         </div>

        <a disabled={isLoading} onClick={()=>navigate('/signup')} className="w-[30%] h-auto min-w-[100px] max-w-[150px]  bg-gradient-to-r from-sky-400  to-indigo-500 hover:bg-gray-800  text-white p-1  rounded-full font-bold text-center cursor-pointer">
        sign up
          </a>
          </div>
      </form>
      </div>
    </main>
  );
};

export default LoginForm;
