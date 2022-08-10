import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductsPage";
import Homepage from './pages/Homepage'
import ProductDetails from "./pages/DetailsPage"
import AboutUs from "./pages/AboutUsPage";
import ViewCart from "./pages/ViewCart";
import AccessoriesPage from "./pages/AccessoriesPage";
import AccessoryDetailsPage from "./pages/AccessoryDetailsPage";
import './App.css'
 
function App() {
 return (
   <div className="main-page">
     <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route exact path='/home' element={<Homepage/>} />
       <Route exact path='/aboutus' element={<AboutUs/>} />
       <Route exact path='/product' element={<ProductList/>} />
       <Route exact path="/product/:id" element={<ProductDetails/>}/>
       <Route exact path='/accessories' element={<AccessoriesPage/>} />
       <Route exact path='/accessories/:id' element={<AccessoryDetailsPage/>} />    
       <Route exact path='/cart' element={<ViewCart/>} />   
     </Routes>
     </BrowserRouter>
   </div>
 );
};
 
export default App;