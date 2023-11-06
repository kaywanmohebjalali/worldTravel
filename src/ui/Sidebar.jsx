import { NavLink, Outlet, useLocation  } from 'react-router-dom'
import Logo from '../ui/Logo'
import User from '../features/authentication/User'

const Sidebar = () => {
  const location = useLocation();
   let flag = location?.pathname?.split('/').at(-1);
  

  

  return (
    <main className='relative flex flex-col justify-between h-[100vh] p-2 md:p-3 bg-gray-800 text-center text-white'>
      
    
    <div className="  h-[100vh] overflow-auto">
        <Logo styles={'mx-auto justify-center mb-6'} link={'/'} src={'/logo.png'}>
           <h1 className='text-[1rem] sm:text-2xl md:text-3xl'>World Travel</h1>
        </Logo>
    
      {flag!='profile' ?<User/>:''}

        <div className="mt-4 md:mt-8 mb-2">

          <ul className=' map flex justify-center  mb-6  text-[0.7rem] sm:text-[1rem]'>
            <li  >
              <NavLink className='px-2 bg-gray-500 p-1 rounded-md rounded-e-none'  to='./cities'>CITIES</NavLink>
            </li>

            <li >
              <NavLink  className='px-2 rounded-md rounded-s-none bg-slate-500 p-1' to='./countries'>COUNTRIES</NavLink>
            </li>
          </ul>
   
        </div>



        {/* <div className=""> */}


        <Outlet />
        {/* </div> */}
    

    </div>
        <footer>
            <p className='text-[0.5rem] sm:text-sm py-2'>
              &copy; Copyright {new Date().getFullYear()} by WorldWise lnc.
            </p>
        </footer>
    </main>
  )
}

export default Sidebar