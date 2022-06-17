import React,{useState, useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

import { useHistory } from "react-router-dom";

const EditSize = (props) => {

      const history = useHistory();
     
      const [sizeInput, setSize] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState([]);

      useEffect(()=> {

            const size_id = props.match.params.id; 

            axios.get(`/api/edit-size/${size_id}`).then(res => {
                  if(res.data.status === 200)
                  {
                        setSize(res.data.size)
                  }
                  else if (res.data.status === 404){
                        swal("Error",res.data.message,"error");
                        history.push('/admin/view-size');
                  }
                  setLoading(false);
            });
      }, [props.match.params.id, ]);

      const handleInput = (e)=> {
            e.persist();
            setSize({...sizeInput, [e.target.name]: e.target.value})
      }

      const updateSize = (e) => {
            e.preventDefault()

            const size_id = props.match.params.id;
            const data = sizeInput;
            axios.put(`/api/update-size/${size_id}`, data).then(res =>{
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
                        history.push('/admin/view-size');
                  }

            });
      }

      if(loading){
            return <h4>Loading Edit Size...</h4>
      }
  return (
      <>
      <div className="content-wrapper">
            <section className="content-header">
                  <div className="container-fluid">
                  <div className="row mb-2">
                  <div className="col-sm-6">
                        <h1>Size Update</h1>
                  </div>
                  <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Size Update</li>
                        </ol>
                  </div>
                  </div>
                  </div>
            </section>
        <form className="content" onSubmit={updateSize}>
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
                      onChange={handleInput}
                    />
                    <small className="text-danger">{error.type}</small>
                  </div>
                  
                  
                 
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>

            
          </div>
          
            <div className="row">
                  <div className="col-12">
                  <button   className="btn btn-success float-right">Update Size</button>
                  </div>
            </div>



        </form>
      </div>
    </>
  )
}

export default EditSize;