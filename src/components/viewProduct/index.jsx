import React,{useState, useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

const ViewProduct = () => {
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

      const deleteProduct = (e, id) => {
            e.preventDefault();
            const thisClicked = e.currentTarget;
  
            thisClicked.innerText ="Deleting";
            axios.delete(`api/delete-product/${id}`).then(res => {
                  if(res.data.status === 200)
                  {
                        swal("Success", res.data.message, "success");
                        thisClicked.closest("tr").remove();
                  }
                  else if(res.data.status === 404){
                        swal("Success", res.data.message, "success");
                        thisClicked.innerText = "Delete";
                  }
            });
        }

       var display_productData = "";
        if(loading){
            return <h4>View Products Loading...</h4>
      }
      else{
            display_productData= productList.map( (item)=> {
                  return(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                         <td><img src={`http://localhost:8000/${item.image}`} width="50px" alt="Image"/></td>
                        <td>{item.category.name}</td>
                         <td>{item.brand.name}</td>
                          <td>{item.title}</td>
                         <td>{item.selling_price}</td>
                         <td>{item.original_price}</td>
                         <td>{item.description}</td>
                         <td>
                         <a href={`edit-product/${item.id}`} className="btn btn-success btn-sm">Edit</a>
                         </td>
                         <td>
                               <button type="button" onClick={(e)=>deleteProduct(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>

                 </tr>
                  )
            });
            
      }
      
      

        return (
            <div className="content-wrapper">
               <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1>Products Tables</h1>
                      </div>
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active">Products Tables</li>
                        </ol>
                      </div>
                    </div>
                  </div>{/* /.container-fluid */}
                </section>
                <section className="content">
                  <div className="container-fluid">
                  {/* /.row */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Table of products</h3>
                          <div className="card-tools">
                            <div className="input-group input-group-sm" style={{width: 150}}>
                              <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                              <div className="input-group-append">
                                <button type="submit" className="btn btn-default">
                                  <i className="fas fa-search" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body table-responsive p-0" style={{height: 450}}>
                          <table className="table table-head-fixed text-nowrap">
                            <thead>
                              <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Category Name</th>
                                    <th>Brand Name</th>
                                    <th>Title</th>
                                    <th>Selling price</th>
                                    <th>Original price</th>
                                    <th>Description</th>
                                    <th>Edit</th>
                                    <th>Delete</th>                                       
                              </tr>
                            </thead>
                            <tbody>
                            {display_productData}
                            </tbody>
                          </table>
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                    </div>
                  </div>
                  {/* /.row */}
        
                  </div>
                </section>
        
            </div>
          )
}
export default ViewProduct;