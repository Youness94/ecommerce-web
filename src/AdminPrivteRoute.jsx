import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AdminPages from './pages/Admin/routes'


const AdminPrivteRoute = ({...rest}) => {

  const [Authenticated, setAuthenticate] = useState(false);
  useEffect(()=>{
    axios.get(`/api/ckeckingAuthenticated`).then(res => {
      if(res.status === 200){
        setAuthenticate(true)
      }
    }); 
    return ()=> {
      setAuthenticate(false)
    }
  }, [])
  


  return (
    <Route {...rest}
    render = { ({props, location}) => 
    // Authenticated ? 
    localStorage.getItem('auth_token') ? 
    (<AdminPages {...props} />):
    (<Redirect to={{pathname:'/login', state :{from : location}}} />)

    }
    />
  );
}

export default AdminPrivteRoute
