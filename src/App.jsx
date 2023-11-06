import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Protected from "./ui/Protected";
import Signup from "./pages/Signup";
import Logo from "./ui/Logo";
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import RouterAppLayout from './ui/RouterAppLayout'
import PageNotFound from './ui/PageNotFound'
import { Toaster } from "react-hot-toast";

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/Home')), 100);
  });
});






function App() {
 
  return (
    <>
          
      <BrowserRouter>
      <Suspense fallback={<div className="bg-gray-800 w-full h-[100vh] flex justify-center items-center"><Logo/></div> }>
        <Routes >
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="app/*"
            element={
              <Protected>
                <RouterAppLayout />
              </Protected>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
            </Suspense>

            <Toaster 
    position='top-center'
    gutter={12}
    containerStyle={{margin:"8px"}}
    toastOptions={{
      success:{
        duration:3000
      },
      error:{
        duration:4000
      },
      style:{
        fontSize:"16px",
        maxWidth:"500px",
        padding:"16px 24px",
        backgroundColor:"#f5f5f5",
        color:"var(--color-grey-700)"
      },
    }}
    
    />
      </BrowserRouter>
    </>
  );
}

export default App;
