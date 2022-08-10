import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetails"
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<ProductList />} />
       <Route exact path="/product/:id" element={<ProductDetails/>}/>
     </Routes>
   </div>
 );
};
 
export default App;