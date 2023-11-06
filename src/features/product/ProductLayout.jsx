import PageNav from "../../ui/PageNav"


const ProductLayout = () => {
  return (
    <main className="product w-full h-[100vh]  bg-no-repeat bg-cover">
  <div className="w-full h-[100vh] bg-no-repeat bg-cover  bg-gradient-to-b from-slate-700 opacity-[0.9] absolute">

    <PageNav/>
    <section className="  text-center h-[60vh] w-full flex justify-center   bg-cover  absolute top-0">
         
     <div className=" p-4 sm:p-8 w-[80%] transition-all duration-700 bg-opacity-70  rounded-md hover:bg-opacity-100 mt-44 landscape:mt-24">

          <h2 className="text-2xl mb-10 font-bold text-white">About WorldTravel.</h2>
          <p className="text-white font-[600] full ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
        
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>

    </section>
    </div>
    </main>
  )
}

export default ProductLayout