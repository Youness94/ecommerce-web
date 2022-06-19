import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import swal from "sweetalert";



const EditProduct = (props) => {

      const history = useHistory();
      const {id} = useParams;
      

      const [categorylist, setCategorylist] = useState([]);
      const [brandlist, setBrandlist] = useState([]);
      const [sizeList, setSizeList] = useState([]);
      const [loading, setLoading] = useState(true);

      // const [poroductList, setProduct] = useState([]);

      const [sizeItems, setSizeItems] = useState({
        type:'', 
        quantity:'',
      });

      const [size, setSize] = useState([]);

     


      
      const [productInput, setProduct] = useState({
        category_id:'',
        brand_id:'',
        brand:'',
        title:'',
        description:'',
        selling_price:'',
        original_price:'', 
        // item:[{
        //   size_id:'',
        //   quantity:'',
        // }],
    });

      const [imageInput, setImage] =useState([]);
      const [errorlist, setError] =useState([]);

      useEffect( ()=> {
        const product_id = props.match.params.id; 
        const getProducts = async () => {
          setLoading(true);
          const res = axios.get(`/api/edit-prodtuct/${product_id}`);
          // .then(res => {
            // if(res.data.status === 200)
            // {
            //       setProduct(res.data.products);
            //       console.log(res.data.products)
            // }
            // else if (res.data.status === 404){
            //       swal("Error",res.data.message,"error");
            //       history.push('/admin/view-product');
            // }
            setProduct(res.data.products);
            setLoading(false);
            
      // });
        }
        getProducts();
      }, [props.match.params.id]);

      

useEffect(()=> {
  axios.get(`/api/all-category`).then(res => {
        if(res.data.status === 200)
        {
         setCategorylist(res.data.category);
        }
        
  });
}, []);
useEffect(()=> {
  axios.get(`/api/all-brand`).then(res => {
        if(res.data.status === 200)
        {
         setBrandlist(res.data.brand);
        }
        
  });
}, []);
useEffect(()=> {
  axios.get(`/api/all-size`).then(res => {
        if(res.data.status === 200)
        {
         setSizeList(res.data.size);
        }
       
  });
}, []);


const handleSizeChange = (e)=>{
  e.persist();
  
  setSizeItems({...sizeItems, [e.target.name]: e.target.value});
};


const handleAddItem = () => {
  setSize([...size, sizeItems])
  // console.log('hhdhdhdhd', sizeItems)
}


const handleChange =(e)=> {
   e.persist();
   setProduct({...productInput, [e.target.name]: e.target.value});
}


const handleImage =(e)=> {
 
  setImage({image:  e.target.files[0]});
}


const updateProduct = async (e) => {
      e.preventDefault();
      const product_id = props.match.params.id; 
      
      const formData = new FormData();
      
      formData.append('image', imageInput.image);
      formData.append('category_id', productInput.category_id);
      formData.append('brand_id', productInput.brand_id);
      formData.append('title', productInput.title);
      formData.append('description', productInput.description);
      formData.append('selling_price', productInput.selling_price);
      formData.append('original_price', productInput.original_price);
      

     await axios.put(`/api/update-product/${product_id}`, formData).then( res => {
        console.log(res)
        if(res.data.status === 200){

          swal("Success",res.data.message,"success");
          setProduct({...productInput,
            category_id:'',
            brand_id:'',
            title:'',
            description:'',
            image:'',
            selling_price:'',
            original_price:'',

            // item:[{
            //   size_id:'',
            //   quantity:'',
            // }],

          });
          
          
        }
        
      })
      .catch(e => {
        //  if(e.data.status === 422){
        //   console.log(e)
        //   swal("All Fields are mandatory",e.data.message,"error");
          alert('fhfhfhfhfhfhfhfh')
          
        // }
      });
       


   
    };
  return (
      <>
      <div className="content-wrapper">
            <section className="content-header">
                  <div className="container-fluid">
                  <div className="row mb-2">
                  <div className="col-sm-6">
                        <h1>Edit Product</h1>
                  </div>
                  <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="/admin/view-product">View Product</a></li>
                        <li className="breadcrumb-item active">Edit product</li>
                        </ol>
                  </div>
                  </div>
                  </div>
            </section>
        <form className="content" onSubmit={updateProduct} encType="multipart/form-data" >
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Create Product</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">

                <div className="form-group">
                    <label>Select Category</label>
                    <select className="form-control select2bs4" style={{width: '100%'}}  onChange={handleChange} name="category_id" >
                      
                      <option>Select Category</option>
                      {
                                categorylist.map((item) => {
                                  return(
                                    <option name={item.name} value={item.id} key={item.id}>{item.name}</option>
                                  )
                                })
                              }
                    </select>
                  </div>
                   <div className="form-group">
                    <label>Brand</label>
                    <select className="form-control select2bs4" style={{width: '100%'}}  onChange={handleChange} name="brand_id" >
                      
                      <option>Select Brand</option>
                      {
                                brandlist.map((item) => {
                                  return(
                                    <option name={item.name} value={item.id} key={item.id}>{item.name}</option>
                                  )
                                })
                              }
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputName">Product Name</label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      name="title"
                      value={productInput.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                            <label>Image</label>
                            <input type="file" name="image"  onChange={handleImage} className="form-control"/>
                          </div>

                  <div className="form-group">
                 
                        <div className="form-group">
                        <label htmlFor="inputEstimatedDuration">Selling price</label>
                        <input type="number" id="selling_price" className="form-control"  value={productInput.selling_price} name="selling_price" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputEstimatedDuration">Original price</label>
                        <input type="number" id="original_price" className="form-control"  value={productInput.original_price} name="original_price" onChange={handleChange}/>
                        </div>
                    <label htmlFor="inputDescription">
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      className="form-control"
                      rows={4}
                      
                      name="description"
                      value={productInput.description}
                      onChange={handleChange}
                    />
                  </div>
                  
                 
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>

            <div className="col-md-6">
                  <div className="card card-secondary">
                  <div className="card-header">
                        <h3 className="card-title">Product Size</h3>
                        <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus" />
                        </button>
                        </div>
                  </div>
                  <div className="card-body">
                 <div className="row">
                  <div className="form-group col-sm-4">
                    <select className="form-control select2bs4" style={{width: '100%'}}  onChange={handleSizeChange} name="type" value={sizeItems.type} >
                      
                      <option>Select Size</option>

                      {
                                sizeList.map((item) => {
                                  return(
                                    <>
                                    <option name={item.type} value={item.type} key={item.id}>{item.type}</option>
                                   
                                    </>
                                  )
                                })
                              }
                    </select>
                  </div> 
        

                    <div className="form-group col-sm-3">
                      <input type="number" className="form-control" placeholder="quantity" value={sizeItems.quantity} onChange={handleSizeChange} name="quantity"/>
                    </div>

                    <div className="form-group col-sm-2">
                      <button type="button" className="btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                    </div>

                  </div>
                   <button type="button"  onClick={handleAddItem} className="btn btn-primary btn-sm mt-3"><i className="fa fa-plus"></i> Add item</button>

                 
                        
                  </div>
                  {/* /.card-body */}
                 
                  
                  </div>
                  {/* /.card */}

                 

                 <div className="card-body">
                 <div className="culom">
                   <ul>
                     {size.map((items) =>( 
                       <>
                       <input type="checkbox" key={items.id}/><span key={items.size_id}>{items.type}</span> <span>{items.quantity}</span><br /> 
                        {/* <li key={items.id}>{items.size_id} <span>{items.quantity}</span></li> delete  */}
                        </>
                      ))}
                   </ul>
                  </div>
                  </div>
            </div>
          </div>
          
            <div className="row">
                  <div className="col-12">
                  <button type="submit"  className="btn btn-success float-right">Add Product</button>
                  </div>
            </div>



        </form>
      </div>
    </>
  )
}

export default EditProduct