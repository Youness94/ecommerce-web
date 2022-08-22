import React, { useState, useEffect, } from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";
import swal from "sweetalert";
import acier_5 from "../../../img/acier_5.jpg";
import "./index.css";
import { useCart } from "react-use-cart";

const ProductDetail = (props) => {
  const { addItem } = useCart();
  // const productId = useParams();
  const [loading, setLoading] = useState(true);

  const [productInput, setProductId] = useState([]);
  
  useEffect(()=> {
    const ProductById =  async ()=>{
      
    const id = props.match.params.id; 

   const response =  await axios.get(`api/productById/${id}`)
    .then(res=>{
          if(res.status===200){

              setProductId(res.data.products)
                console.log(res.data.products)
          }
          setLoading(false);
    })
  }
  ProductById();
  }, [props.match.params.id,]);

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center max-auto product">
            <img src={acier_5} alt=""  id="image" className="product-image"/>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{productInput.title}</h1>
            <hr />
            {/* <h2 className="my-4">300 DH</h2> */}
            
            <p className="lead">
              {productInput.description}
            </p>

            <div class="bg-gray py-2 px-3 mt-2 my-4">
                <h2 class="mb-0">
                  {productInput.selling_price}
                </h2>
                <h4 class="mt-0">
                  <small>{productInput.selling_rice}</small>
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
                  <i class="fas fa-cart-plus fa-lg mr-2" onClick={() => addItem(props.item)}></i>
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
