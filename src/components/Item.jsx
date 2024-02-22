import React from "react";
import { Link } from "react-router-dom";
export default function Item  ({ product }) {
  return (
      <div className="card-container">
        <div class="card-container-product">
          <a href={product.url} target="_blank">
            <div class="card-product">
              <div class="front-content-product">
                <p>{product.title}</p>
              </div>
              <div class="content-product">
                <p class="heading-product">{product.title}</p>
                <p>{product.description}</p>
              </div>
            </div>
          </a>
          
        </div>
        <Link to={`/product/${product.id}`}>
        <button className="button-service button-pack">
            {product.button}
          </button>
        </Link>
      </div>
  );
}
