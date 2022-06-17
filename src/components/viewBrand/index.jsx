import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const ViewBrand = () => {
      const [loading, setLoading] = useState(true);
      const [brandList, setBrandList] = useState([]);

      useEffect(()=> {
        axios.get(`api/view-brand`).then(res => {
              if(res.status === 200)
              {
                  setBrandList(res.data.brand)
              }
              setLoading(false);
        });
  }, []);

  const deleteBrand = (e, id) => {
          e.preventDefault();
          const thisClicked = e.currentTarget;

          thisClicked.innerText ="Deleting";
          axios.delete(`api/delete-brand/${id}`).then(res => {
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
      var viewbrand_HTMLTABLE = "";
      if(loading){
            return <h4>Loading Brand...</h4>
      }
      else{
            viewbrand_HTMLTABLE= 
            brandList.map((item) =>{
                  return( 
                        <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.description}</td>
                              <td>
                                    <a href={`edit-brand/${item.id}`} className="btn btn-success btn-sm">Edit</a>
                              </td>
                              <td>
                                    <button type="button" onClick={(e)=>deleteBrand(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
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
                <h1>Brands Tables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Brands Tables</li>
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
                  <h3 className="card-title">Table of brands</h3>
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
                        <th>Name</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {viewbrand_HTMLTABLE}
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

export default ViewBrand;