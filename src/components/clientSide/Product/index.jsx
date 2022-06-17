import React,{useState, useEffect} from 'react'
import './product.css'
import { useCart } from "react-use-cart";
import axios from 'axios'


function Product(props) {
     
      const { addItem } = useCart();
  return (
      <div className="card my-5 py-4" style={{width:'20rem'}}>
            <img src={props.image} alt="vide" className="card__img"/>
            <div className="card__body">
                  <h3 className="card-title card__title">{props.title}</h3>
                  <h4 className="lead card__price">{props.price} DH</h4>
                  <a href={`/products/${props.id}`} className='btn btn-outline-primary' onClick={() => addItem(props.item)}>Buy Now</a>
            </div>
    </div>
  )
}

export default Product

{/* <button className="card__btn" onClick={() => addItem(props.item)}>
                  Add to Cart
                  </button> */}