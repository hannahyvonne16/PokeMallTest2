import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{location.state.name}</h1>
          <h3>P${location.state.price}</h3>
          <button>BUY</button>

        </div>
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="details-image">
                  <img width="250" src={location.state.image1} alt={location.state.name} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="accessory-images d-flex">
                <div className="accessory-image">
                  <img width="125" src={location.state.image2} alt={location.state.name} />
                </div>
                <div className="accessory-image">
                  <img width="125" src={location.state.image3} alt={location.state.name} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductDetails;