import React,{useState, useEffect} from 'react'
import Product from '../../components/clientSide/Product'
import "./index.css";
import axios from 'axios'


const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
        const allProduct =  async ()=>{
       const response =  await axios.get(`api/view-product`)
        .then(res=>{
              if(res.status===200){

                    setProductList(res.data.products)
                    console.log(res.data.products)
              }
              setLoading(false);
        })
      }
      allProduct();
      }, []);
  return (
   
    <div>
    <div className="container product_list">
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
                                    selling_price={item.selling_price}
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