import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";


const AddCategory = () => {


      const [categoryInput, setCategory] = useState({
            
            name:"",
            description:"",
            error_list: [],
          });

          const handleChange = (e) => {
            e.persist();
            setCategory({ ...categoryInput, [e.target.name]: e.target.value });
          };

          const handleCategory = (e) => {
            e.preventDefault();
            const data = {
              
              name: categoryInput.name,
              description: categoryInput.description,
        
        
            };
            axios.post(`api/store-category`, data).then(res => {
                  if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                    setCategory({ ...categoryInput,  name: "", description: "" });
                    document.getElementById("CATEGORY_FORM").reset();
            
                  } else if (res.data.status === 400) {
                    setCategory({ ...categoryInput, error_list: res.data.errors });
                  }
                });
              };
  return (
    <>
      <div className="content-wrapper">
            <section className="content-header">
                  <div className="container-fluid">
                  <div className="row mb-2">
                  <div className="col-sm-6">
                        <h1>Category Add</h1>
                  </div>
                  <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Category Add</li>
                        </ol>
                  </div>
                  </div>
                  </div>
            </section>
        <form className="content" onSubmit={handleCategory} id="CATEGORY_FORM">
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
                      id="name"
                      className="form-control"
                      name="name"
                      value={categoryInput.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="inputDescription">
                      Category Description
                    </label>
                    <textarea
                      id="description"
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      name="description"
                      value={categoryInput.description}
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
                        <input type="text" id="meta_title" className="form-control"  value={categoryInput.meta_title} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputSpentBudget">Meta keyword</label>
                        <input type="text" id="meta_keyword" className="form-control"  value={categoryInput.meta_keyword} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputEstimatedDuration">Meta description</label>
                        <input type="text" id="meta_description" className="form-control"  value={categoryInput.meta_description} onChange={handleChange}/>
                        </div>
                  </div>
                  {/* /.card-body */}
                  </div>
                  {/* /.card */}
            </div>
          </div>
          
            <div className="row">
                  <div className="col-12">
                  <button type="submit"  className="btn btn-success float-right">Add Category</button>
                  </div>
            </div>



        </form>
      </div>
    </>
  );
};

export default AddCategory;
