import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";



const AddSize = () => {


      const [sizeInput, setSize] = useState({
            
            type:"",
            error_list: [],
          });

          const handleChange = (e) => {
            e.persist();
            setSize({ ...sizeInput, [e.target.name]: e.target.value });
          };

          const handleSize = (e) => {
            e.preventDefault();
            const data = {

              type: sizeInput.type,
        
            };
            axios.post(`/api/store-size`, data).then(res => {
                  if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                    setSize({ ...sizeInput,  type: "",});
                    document.getElementById("SIZE_FORM").reset();
            
                  } else if (res.data.status === 400) {
                        setSize({ ...sizeInput, error_list: res.data.errors });
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
                        <h1>Size Add</h1>
                  </div>
                  <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Size Add</li>
                        </ol>
                  </div>
                  </div>
                  </div>
            </section>
        <form className="content" onSubmit={handleSize} id="SIZE_FORM">
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
                    <label htmlFor="inputName">Size Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="type"
                      value={sizeInput.type}
                      onChange={handleChange}
                    />
                  </div>
                  
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>

           
          </div>
          
            <div className="row">
                  <div className="col-12">
                  <button type="submit"  className="btn btn-success float-right">Add Size</button>
                  </div>
            </div>



        </form>
      </div>
    </>
  );
};

export default AddSize;
