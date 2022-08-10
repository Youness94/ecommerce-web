import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import './register.css'

const Register = () => {

  const history = useHistory();

      const [registerInput, setRegister] = useState({
            
            name:"",
            email:"",
            password:'',
            error_list: [],
          });

          const handleChange = (e) => {
            e.persist();
            setRegister({ ...registerInput, [e.target.name]: e.target.value });
          };

          const handleUser =  (e) => {
            e.preventDefault();
            const formData = new FormData();
                  formData.append('name', registerInput.name);
                  formData.append('email', registerInput.email);
                  formData.append('password', registerInput.password);
                  

                  axios.get('/sanctum/csrf-cookie').then(response => {
                  // awaitx
                   axios.post(`/api/register`, formData).then( res => {
                    if(res.data.status === 200 ){

                          localStorage.setItem('auth_token', res.data.token);
                          localStorage.setItem('auth_name', res.data.username);
                            swal("Success",res.data.message,"success");
                            setRegister({...registerInput,
                                    name:"",
                                    email:"",
                                    password:'',
            
                              });
                              history.push('/login')
                    }else{
                      setRegister({...registerInput,error_list : res.data.validation_errors})
                    }
                        })
                      })    
              };
            
                  

  return (
    <>
     <div className="register-box">
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a  className="h1"><b>Admin</b>LTE</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form  method="post" onSubmit={handleUser}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name" name='name' value={registerInput.name} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" name='email'  value={registerInput.email} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" name='password' value={registerInput.password} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center">
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div>
      <a href="login.html" className="text-center">I already have a membership</a>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}

    </>
  )
}

export default Register
