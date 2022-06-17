import React,{useState, useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

import { useHistory } from "react-router-dom";

const EditBrand = (props) => {

      const history = useHistory();
     
      const [brandInput, setBrand] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState([]);

      useEffect(()=> {

            const brand_id = props.match.params.id; 

            axios.get(`/api/edit-brand/${brand_id}`).then(res => {
                  if(res.data.status === 200)
                  {
                        setBrand(res.data.brand)
                  }
                  else if (res.data.status === 404){
                        swal("Error",res.data.message,"error");
                        history.push('/admin/view-brand');
                  }
                  setLoading(false);
            });
      }, [props.match.params.id, ]);

      const handleInput = (e)=> {
            e.persist();
            setBrand({...brandInput, [e.target.name]: e.target.value})
      }

      const updateBrand = (e) => {
            e.preventDefault()

            const brand_id = props.match.params.id;
            const data = brandInput;
            axios.put(`/api/update-brand/${brand_id}`, data).then(res =>{
                  // console.log(data);
                  if(res.data.status === 200)
                  {
                        swal("Success", res.data.message, "success");
                        
                        
                  }
                  else if(res.data.status === 422)
                  {
                        swal("All fields are mandtory","", "success");
                        setError(res.data.errors);
                  }
                  else if(res.data.status === 404)
                  {
                        swal("Error", res.data.message, "error");
                        history.push('/admin/view-brand');
                  }

            });
      }

      if(loading){
            return <h4>Loading Edit Brand...</h4>
      }
  return (
      <>
      <div className="content-wrapper">
            <section className="content-header">
                  <div className="container-fluid">
                  <div className="row mb-2">
                  <div className="col-sm-6">
                        <h1>Brand Update</h1>
                  </div>
                  <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Brand Update</li>
                        </ol>
                  </div>
                  </div>
                  </div>
            </section>
        <form className="content" onSubmit={updateBrand}>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">General</h3>
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
                    <label htmlFor="inputName">Brand Name</label>
                    <input
                      type="text"
                      
                      className="form-control"
                      name="name"
                      value={brandInput.name}
                      onChange={handleInput}
                    />
                    <small className="text-danger">{error.name}</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="inputDescription">
                      Brand Description
                    </label>
                    <textarea
                      
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      name="description"
                      value={brandInput.description}
                      onChange={handleInput}
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
                        <h3 className="card-title">Meta</h3>
                        <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus" />
                        </button>
                        </div>
                  </div>
                  <div className="card-body">
                        <div className="form-group">
                        <label htmlFor="inputEstimatedBudget">Meta title</label>
                        <input type="text" className="form-control" name="meta_title" value={brandInput.meta_title} onChange={handleInput}/>
                        <small className="text-danger">{error.meta_title}</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputSpentBudget">Meta keyword</label>
                        <input type="text" className="form-control" name="meta_keyword" value={brandInput.meta_keyword} onChange={handleInput}/>
                        <small className="text-danger">{error.meta_title}</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputEstimatedDuration">Meta description</label>
                        <input type="text"  className="form-control" name="meta_description" value={brandInput.meta_description} onChange={handleInput}/>
                        <small className="text-danger">{error.meta_title}</small>
                        </div>
                  </div>
                  {/* /.card-body */}
                  </div>
                  {/* /.card */}
            </div>
          </div>
          
            <div className="row">
                  <div className="col-12">
                  <button   className="btn btn-success float-right">Update Brand</button>
                  </div>
            </div>



        </form>
      </div>
    </>
  )
}

export default EditBrand;