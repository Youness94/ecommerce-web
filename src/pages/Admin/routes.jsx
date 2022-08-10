import React from 'react'

import { Redirect,  Route , Switch } from "react-router-dom";
import Navbar from '../../components/adminNavbar'
import Sidebar from '../../components/adminSidebar'
import Footer from '../../components/adminFooter'

import routes from '../../routes/routes'

const AdminPages = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className="">
            <div className="">
            <Sidebar/>
            </div>
            <div className="">
                  <main>
                  <Switch>
                              {routes.map((route, idx)=>{
                                    return(
                                          route.component && (
                                                <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={(props)=>(
                                                      <route.component {...props} />
                                                )}
                                                />
                                          )
                                    )
                              })}
                              <Redirect from='/admin' to='/admin/dashboard' />
                              </Switch> 
                             
                  </main>
                  <Footer/>
            </div>
      </div>
    </div>
  )
}

export default AdminPages
