import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList";
import Homepage from './pages/Homepage'
import ProductDetails from "./components/productDetails"
 
function App() {
 return (
   <div className="App">
     <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route exact path='/home' element={<Homepage/>} />
       <Route exact path='/product' element={<ProductList/>} />
       <Route exact path="/product/:id" element={<ProductDetails/>}/>
     </Routes>
     </BrowserRouter>
   </div>
 );
};
 
export default App;