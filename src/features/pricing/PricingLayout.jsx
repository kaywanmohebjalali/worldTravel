import PageNav from "../../ui/PageNav";

const PricingLayout = () => {
  return (
    <main className="pricing w-full h-[100vh]  bg-no-repeat bg-cover">
    <div className="w-full h-[100vh] bg-no-repeat bg-cover  bg-gradient-to-b from-slate-700 opacity-[0.9] absolute">
        <PageNav />
   
      <section className="text-center h-[100vh] w-full flex justify-center bg-cover  absolute top-0">

       <div className="p-4 sm:p-8 w-[90%]  transition-all duration-700  bg-opacity-70 rounded-md mt-32 landscape:mt-[4.5rem]">
          <h2 className=" text-3xl landscape:text-xl mb-10 font-bold text-white">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="text-white font-bold text-sm sm:text-xl landscape:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur adipisci beatae vero omnis saepe sunt minima dolorem
            vel sit culpa ratione, dolore excepturi architecto aliquam modi
            tempore voluptatum! Repellendus molestiae, illum veniam
            necessitatibus dolorem, cupiditate odit asperiores soluta assumenda
            et odio minima. Amet pariatur blanditiis provident id laudantium
            et odio minima. Amet pariatur blanditiis provident id laudantium
            et odio minima. Amet pariatur blanditiis provident id laudantium
            et odio minima. Amet pariatur blanditiis provident id laudantium
      
          </p>
      </div> 
        
      
      </section>
      </div>
    </main>
  );
};

export default PricingLayout;
