import React,{useState, useEffect} from 'react'
import Product from '../../components/clientSide/Product'
import "./index.css";
import axios from 'axios'

import acier_2 from '../../img/acier_2.jpg'
import acier_3 from '../../img/acier_3.jpg'
import acier_4 from '../../img/acier_4.jpg'
import acier_5 from '../../img/acier_5.jpg'
import acier_6 from '../../img/acier_6.jpg'
import acier_7 from '../../img/acier_7.jpg'

// const product = [
//       { id: 1, title: "Shoes", description: "", price: 45, image: acier_2},
//       { id: 2, title: "Shoes", description: "", price: 70, image: acier_6},
//       { id: 3, title: "Shoes", description: "", price: 95, image: acier_4},
//       { id: 4, title: "Shoes", description: "", price: 105, image: acier_3},
//       { id: 5, title: "Shoes", description: "", price: 25, image: acier_5},
//       { id: 6, title: "Shoes", description: "", price: 39, image: acier_7},
//       { id: 7, title: "Shoes", description: "", price: 25, image: acier_2},
//       { id: 8, title: "Shoes", description: " ", price: 25, image: acier_3},
//       { id: 9, title: "Shoes", description: "", price: 25, image: acier_4},
//     ];

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
        
        axios.get(`/api/view-product`)
        .then(res=>{
              if(res.status===200){

                    setProductList(res.data.products)
                    
              }
              setLoading(false);
        })
  }, []);
  return (
   
    <div>
    <div className="container py-5">
          <div className="row">
                <div className="col-12 text-center">
                      <h1>Product</h1>
                      <hr />
                </div>
          </div>
    </div>
    <div className="container">
                      <div className="row justify-content-around">
                        {
                          productList.map((item) => (
                                    <Product
                                    title={item.title}
                                    price={item.selling_price}
                                    image={`http://localhost:8000/${item.image}`}
                                    item={item}
                                    key = {item.id}
                                    />
                                    ))
                        }
                      </div>
    </div>
</div>
    
    
  )
}

export default Products


// <div className='container'>
      
//       <div className="wrapper">
//         {product.map((item) => (
//         <Product
//         title={item.title}
//         price={item.price}
//         description={item.description}
//         image={item.image}
//         item={item}
//         key = {item.id}
//         />
//         ))}
//         {/* <Product/> */}
//   </div>
// </div>