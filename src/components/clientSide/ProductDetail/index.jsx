import React from "react";
// import { useParams } from "react-router-dom";
import acier_5 from "../../../img/acier_5.jpg";
import "./index.css";

const ProductDetail = () => {
  // const productId = useParams();

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center max-auto product">
            <img src={acier_5} alt=""  id="image" className="product-image"/>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">title</h1>
            <hr />
            {/* <h2 className="my-4">300 DH</h2> */}
            
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quo
              sed quod eveniet porro ea recusandae quasi doloribus assumenda
              rem. Tenetur iusto odit a corrupti in perferendis voluptatum
              voluptates, maxime ea animi fugit enim esse magnam iure quos quas
              ipsa soluta officiis dolorem omnis error reprehenderit aut unde?
              Quae deserunt fugiat, eius adipisci voluptate tempora alias est
              tenetur voluptas totam!
            </p>

            <div class="bg-gray py-2 px-3 mt-2 my-4">
                <h2 class="mb-0">
                  $80.00
                </h2>
                <h4 class="mt-0">
                  <small>$105.00 </small>
                </h4>
            </div>

            {/* sizes  */}

            <div>
              <h4 className="mt-2">Size <small>Please select one</small></h4>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default text-center">
                  <input type="radio" name="color_option" id="color_option_b1" autoComplete="off" />
                  <span className="text-l">S</span>
                  <br />
                  Small
                </label>
                <label className="btn btn-default text-center">
                  <input type="radio" name="color_option" id="color_option_b2" autoComplete="off" />
                  <span className="text-l">M</span>
                  <br />
                  Medium
                </label>
                <label className="btn btn-default text-center">
                  <input type="radio" name="color_option" id="color_option_b3" autoComplete="off" />
                  <span className="text-l">L</span>
                  <br />
                  Large
                </label>
                <label className="btn btn-default text-center">
                  <input type="radio" name="color_option" id="color_option_b4" autoComplete="off" />
                  <span className="text-l">XL</span>
                  <br />
                  Xtra-Large
                </label>
              </div>
            </div>

            {/* <button className="btn btn-outline-primary my-5">Add to cart</button> */}
            <div class="mt-3">
                <button class="btn btn-outline-primary btn-lg btn-flat my-3 mr-2">
                  <i class="fas fa-cart-plus fa-lg mr-2"></i>
                  Add to Cart
                </button>

                <button class="btn btn-default btn-lg btn-flat">
                  <i class="fas fa-heart fa-lg mr-2"></i>
                  Add to Wishlist
                </button>
              </div>

              <div class="mt-2 product-share">
                <a href="#" class="text-gray">
                  <i class="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="#" class="text-gray">
                  <i class="fab fa-twitter-square fa-2x"></i>
                </a>
                <a href="#" class="text-gray">
                  <i class="fas fa-envelope-square fa-2x"></i>
                </a>
                <a href="#" class="text-gray">
                  <i class="fas fa-rss-square fa-2x"></i>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
