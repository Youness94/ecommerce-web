import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";



const AddBrand = () => {


      const [brandInput, setBrand] = useState({
            
            name:"",
            description:"",
            error_list: [],
          });

          const handleChange = (e) => {
            e.persist();
            setBrand({ ...brandInput, [e.target.name]: e.target.value });
          };

          const handleBrand = (e) => {
            e.preventDefault();
            const data = {
              
              name: brandInput.name,
              description: brandInput.description,
        
        
            };
            axios.post(`/api/store-brand`, data).then(res => {
                  if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                    setBrand({ ...brandInput,  name: "", description: "" });
                    document.getElementById("CATEGORY_FORM").reset();
            
                  } else if (res.data.status === 400) {
                        setBrand({ ...brandInput, error_list: res.data.errors });
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
                        <h1>Brand Add</h1>
                  </div>
                  <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Brand Add</li>
                        </ol>
                  </div>
                  </div>
                  </div>
            </section>
        <form className="content" onSubmit={handleBrand} id="CATEGORY_FORM">
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
                      id="name"
                      className="form-control"
                      name="name"
                      value={brandInput.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="inputDescription">
                      Brand Description
                    </label>
                    <textarea
                      id="description"
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      name="description"
                      value={brandInput.description}
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
                        <input type="text" id="meta_title" className="form-control"  value={brandInput.meta_title} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputSpentBudget">Meta keyword</label>
                        <input type="text" id="meta_keyword" className="form-control"  value={brandInput.meta_keyword} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputEstimatedDuration">Meta description</label>
                        <input type="text" id="meta_description" className="form-control"  value={brandInput.meta_description} onChange={handleChange}/>
                        </div>
                  </div>
                  {/* /.card-body */}
                  </div>
                  {/* /.card */}
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
  );
};

export default AddBrand;
