

import PageNav from "../ui/PageNav"

import { Link } from "react-router-dom"

const Home = () => {


  return (
    <>
    <main className="home bg-center w-full h-[100vh]  bg-no-repeat bg-cover">
    <div className="w-full h-[100vh] bg-no-repeat bg-cover  bg-gradient-to-b from-slate-700 opacity-[0.9] absolute">
    
    <PageNav/>
    <section className="text-center h-[60vh] text-white w-2/3 m-auto landscape:mt-4 flex flex-col justify-center ">
        <h1  className="font-bold text-xl sm:text-3xl landscape:text-xl">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 className="mt-6">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

      
      

        <Link to={'/login'} className={`text-white  mx-auto relative top-[2rem] rounded-full py-2 w-[10rem] bg-green-700 hover:shadow-xl hover:top-[2.1rem] font-bold  transition-all ease-in-out duration-100  ring-indigo-400 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500`}>
        Start tracking now
    </Link>
      </section>
      </div>
    </main>
    
    </>
  )
}

export default Home