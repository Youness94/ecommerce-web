import React,{useState, useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

import { useHistory } from "react-router-dom";

const EditCategory = (props) => {

      const history = useHistory();
     
      const [categoryInput, setCategory] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState([]);

      useEffect(()=> {

            const category_id = props.match.params.id; 

            axios.get(`/api/edit-category/${category_id}`).then(res => {
                  if(res.data.status === 200)
                  {
                        setCategory(res.data.category)
                  }
                  else if (res.data.status === 404){
                        swal("Error",res.data.message,"error");
                        history.push('/admin/view-category');
                  }
                  setLoading(false);
            });
      }, [props.match.params.id, ]);

      const handleInput = (e)=> {
            e.persist();
            setCategory({...categoryInput, [e.target.name]: e.target.value})
      }

      const updateCategory = (e) => {
            e.preventDefault()

            const category_id = props.match.params.id;
            const data = categoryInput;
            axios.put(`/api/update-category/${category_id}`, data).then(res =>{
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
                        history.push('/admin/view-category');
                  }

            });
      }

      if(loading){
            return <h4>Loading Edit Category...</h4>
      }
  return (
      <>
      <div className="content-wrapper">
            <section className="content-header">
                  <div className="container-fluid">
                  <div className="row mb-2">
                  <div className="col-sm-6">
                        <h1>Category Update</h1>
                  </div>
                  <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Category Update</li>
                        </ol>
                  </div>
                  </div>
                  </div>
            </section>
        <form className="content" onSubmit={updateCategory}>
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
                    <label htmlFor="inputName">Category Name</label>
                    <input
                      type="text"
                      
                      className="form-control"
                      name="name"
                      value={categoryInput.name}
                      onChange={handleInput}
                    />
                    <small className="text-danger">{error.name}</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="inputDescription">
                      Category Description
                    </label>
                    <textarea
                      
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      name="description"
                      value={categoryInput.description}
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
                        <input type="text" className="form-control" name="meta_title" value={categoryInput.meta_title} onChange={handleInput}/>
                        <small className="text-danger">{error.meta_title}</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputSpentBudget">Meta keyword</label>
                        <input type="text" className="form-control" name="meta_keyword" value={categoryInput.meta_keyword} onChange={handleInput}/>
                        <small className="text-danger">{error.meta_title}</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputEstimatedDuration">Meta description</label>
                        <input type="text"  className="form-control" name="meta_description" value={categoryInput.meta_description} onChange={handleInput}/>
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
                  <button   className="btn btn-success float-right">Update Category</button>
                  </div>
            </div>



        </form>
      </div>
    </>
  )
}

export default EditCategory;