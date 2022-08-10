import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import AuthUser from '../AuthUser'

const Login = () => {

  const history = useHistory();

  const {http, setToken} = AuthUser();

  const [loginInput, setLogin] = useState({
    email:"",
    password:'',
    error_list: [],
  });

  const handleChange = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleLogin =  (e) => {
    e.preventDefault();
    const formData = {
      email:loginInput.email,
      password:loginInput.password,
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
          // await 
          axios.post(`/api/login`, formData).then( res => {    
            if(res.data.status === 200 ){

              localStorage.setItem('auth_token');
              localStorage.setItem('auth_name');
                swal("Success",res.data.message,"success");
                  history.push('/login')
                }
                else if(res.data.status === 401)
                {
                  swal("Warning",res.data.message,"warning");
                }
                else{
                  setLogin({...loginInput,error_list : res.data.validation_errors})
                }
                  
                
                })
              })  
      };
    
  return (
    <>
     <div className="login ">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post" onSubmit={handleLogin}>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" name='email'  value={loginInput.email} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" name='password' value={loginInput.password} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mt-2 mb-3">
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>
{/* /.login-box */}

    </>
  )
}

export default Login
