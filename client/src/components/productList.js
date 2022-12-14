import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch from database
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`http://localhost:3001/product/`);
      const products = await response.json();
      setProducts(products);
    }
    getProducts();
    return;
  }, [products.length]);


  // Display All Products
  return (
    <div className="container">
      <h1>Available Pokemon</h1>
      <div className="row poke-list">
       {[...products]
        .sort((a, b) => a.pokedex - b.pokedex)
        .map((product) => {
         return(
           <div className="col-sm-2 product-card" key = {product._id}>
             <Link
             to={{pathname: `/product/${product._id}` }}
             state={{
               id: product._id,
               name: product.name,
               price: product.price,
               image1: product.image[0],
               image2: product.image[1],
               image3: product.image[2],
             }}
             >
               <img src={product.image[0]} alt={product.name}/>
               <div class="list-name">{product.name}</div>
               <div class="list-price">P$ {product.price}</div>
 
 
             </Link>
           </div>
         )
     })}
      </div>
    </div>
  );
 }