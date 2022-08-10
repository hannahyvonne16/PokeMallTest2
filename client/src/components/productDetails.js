import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () =>  {
  const location = useLocation();

  return (
          <div className="container">
              <div className="row">
                  <div className="col">
                    <h2>{location.state.name}</h2>
                    <h3>P${location.state.price}</h3>
                    <button>BUY</button>
                  </div>
                  <div className="col">
                      <div className="container">
                          <div className="row">
                              <div className="col">
                                <img width="250" src={location.state.image1} alt={location.state.name}/>
                              </div>
                            </div>
                                <div className="col">
                                    <img width="125" src={location.state.image2} alt={location.state.name}/>
                                    <img width="125" src={location.state.image3} alt={location.state.name}/>
                                </div>
                        
                      </div>
                  </div>

              </div>
              
          </div>
  );
};

export default ProductDetails;