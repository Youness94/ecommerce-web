import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AuthUser = () => {
      const history = useHistory();

      const getToken = () => {
            const tokenString = sessionStorage.getItem('token',);
            const userToken = JSON.parse(tokenString);
            return userToken; 
      }
      const getUser = () => {
            const userString = sessionStorage.getItem('user',);
            const user_detail = JSON.parse(userString);
            return user_detail; 
      }

      const [token,  setToken] = useState(getToken());
      const [user,  setUser] = useState(getUser());

      const saveToken = (user, token) => {
            sessionStorage.getItem('token', JSON.stringify(token));
            sessionStorage.getItem('user', JSON.stringify(user));

            setToken(token);
            setUser(user);
            history.push('/admin/dashboard')
      }
      const http = axios.create({
            baseURL : 'http://localhost:8000/api', 
            headers:{
                  'Content-type' : 'application/jason', 
            }
      }); 
      return{
            setToken:saveToken,
            getToken,
            token,
            user,
            http,
      }
}

export default AuthUser