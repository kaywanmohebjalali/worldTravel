/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import PageNav from "../../ui/PageNav";
import { signup } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import MiniSpinner from "../../ui/MiniSpinner";
import UploadImage from "../../ui/UploadImage";
import toast from "react-hot-toast";


const SignupForm = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState("password");
  const fullNameEle = useRef("");
  const emailEle = useRef("");
  const avatarEl = useRef("");
  const passwordEle = useRef("");
  const repeatPasswordEle = useRef("");

  const navigate = useNavigate();




  async function handlerSubmit(e) {
    e.preventDefault();
    let fullName = fullNameEle.current.value;
    let email = emailEle.current.value;
    let password = passwordEle.current.value;
    let repeatPassword = repeatPasswordEle.current.value;
    let avatar = avatarEl.current.files[0];
    
    if (fullName && email && password && repeatPassword) {
      if (password == repeatPassword) {
        setIsLoading(true);
        await signup({ fullName, email, password, avatar },setIsLoading);
        setIsLoading(false);
        toast.success('A confirmation email has been sent to you, please confirm it')
        navigate("/login");
      } else {
        toast.error("password and repeatPassword not match")
      }
    } else {
      toast.error("password enter items")
    }
  }

  function changeShow() {
    if (show == "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  }


 
  useEffect(() => {

    function handleResize(){
      const html = document.querySelector('html')
      const signupEle = document.querySelector('.singup')
      signupEle.style.height=html.getBoundingClientRect().height+'px'
    
    }
    handleResize()

    window.addEventListener('resize',handleResize)
   
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }

  }, [])
  




  return (
    <main className=" singup  h-[100vh] bg-gray-800 bg-center bg-no-repeat bg-cover w-full ">
               <div className=" w-full h-[100vh] bg-no-repeat bg-cover  bg-gradient-to-b from-slate-600 opacity-[0.9] absolute">
      <PageNav />


      <form
        onSubmit={handlerSubmit}
        action=""
        className="mt-10  h-[60vh] w-[90%]  max-w-[900px]     mx-auto rounded-md   flex flex-col  sm:gap-4 justify-start"
      >
        <div className="w-full flex flex-col gap-3 sm:flex-row">

  
        <div className="w-full sm:w-[50%]">
          <label htmlFor="fullName" className="text-slate-100">
            fullName:
          </label>
          <input
            disabled={isLoading}
            ref={fullNameEle}
            id="fullName"
            className="font-bold outline-none border-2 bg-gray-600 text-white border-sky-400   ring-sky-400 focus:ring-2 w-full ps-4 p-[0.5rem] rounded-md "
            type="text"
          />
        </div>

        <div className="w-full sm:w-[50%]">
          <label htmlFor="email"  className="text-slate-100">
            Email address :
          </label>
          <input
            disabled={isLoading}
            ref={emailEle}
            id="email"
            className="font-bold outline-none  border-2 bg-gray-600 text-white border-sky-400   ring-sky-400 focus:ring-2 w-full ps-4 p-[0.5rem] rounded-md "
            type="email"
          />
        </div>
        </div>


        <div className="w-full flex flex-col gap-3 sm:flex-row">

        <div className="w-full sm:w-[50%]">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-slate-100">Password</label>
            {show == "text" ? (
              <svg
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
              </svg>
            ) : (
              <svg
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
              </svg>
            )}
          </div>
          <input
            disabled={isLoading}
            ref={passwordEle}
            id="password"
            min={8}
            className="font-bold outline-none  border-2 bg-gray-600 text-white border-sky-400   ring-sky-400 focus:ring-2 ps-4 w-full p-[0.5rem] rounded-md "
            type={show}
          />
        </div>

        <div className="w-full sm:w-[50%]">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-slate-100">Confirm Password</label>
            {show == "text" ? (
              <svg
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
              </svg>
            ) : (
              <svg
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
              </svg>
            )}
          </div>
          <input
            disabled={isLoading}
            ref={repeatPasswordEle}
            id="repeatPassword"
            min={8}
            className="font-bold outline-none  border-2 bg-gray-600 text-white border-sky-400   ring-sky-400 focus:ring-2 ps-4 w-full p-[0.5rem] rounded-md "
            type={show}
          />
        </div>

        </div>

        <div className="w-full">
        <UploadImage inputRef={avatarEl} width='300px' size='small' >
        <UploadImage.Image  icon={<img src='./icon-user-1.png'/>} />

        <UploadImage.DescriptionImage ></UploadImage.DescriptionImage>
        <UploadImage.Drop
          iconClick={<img src="/icon-click-1.png" alt="" />}
          iconDrop={<img className="drop" src="/icon-upload-drop.png" alt="" />}
        >
          <input disabled={isLoading} accept="image/*" type="file" ref={avatarEl} multiple/>
        </UploadImage.Drop>
      </UploadImage>
        </div>

        <div className="mx-auto relative  flex justify-center gap-4 w-[150px]  bg-gradient-to-r from-pink-500 to-yellow-500 text-white   rounded-full font-bold">
          <button
           className="justify-center h-[35px] gap-4 w-full bg-gradient-to-r px-1 from-sky-400 to-indigo-500 text-white   rounded-full font-bold"
            disabled={isLoading}
            type="submit"
          >
            
            {isLoading ?<MiniSpinner  colorSpinner='indigo-600'/>:'singup'}


          </button>
        </div>
        
      </form>
      </div>
    </main>
  );
};

export default SignupForm;
