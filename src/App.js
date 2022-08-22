import AdminPages from './pages/Admin/routes';
import axios from "axios";
import { CartProvider } from "react-use-cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
// import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Contact from "./pages/Contact";
import ProductDetail from "./components/clientSide/ProductDetail";
import { BrowserRouter as Router,  Route , Switch, Redirect} from "react-router-dom";
import Carts from './pages/Checkout';
import Login from './layouts/Login';
import Register from './layouts/Register';

import AdminPrivteRoute from './AdminPrivteRoute'
import Navbar from './layouts/Navbar';
import './App.css'


axios.defaults.baseURL ='http://localhost:8000/';

// axios.interceptors.request.use(function (config){
// const token = localStorage.getItem('auth_token');
// config.headers.Authorization = token ? `bearer ${token}`: '';
// return config;
// });
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-type'] = 'application/jason';
// axios.defaults.headers.post['Accept'] = 'application/jason';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
      
      
        <Switch>

        <Route path="/login">
          {localStorage.getItem('auth_token') ? <Redirect to='/admin/dashboard' /> : <Login/>}
        </Route>
        <Route path="/register">
        {localStorage.getItem('auth_token') ? <Redirect to='/login' /> : <Register/>}
        </Route>
        <AdminPrivteRoute path="/admin" name='Admin' />

        <Route path="/products">
        <Navbar/>
          <Products/>
        </Route>

        <Route exact path="/product/:id">
          <Navbar/>
          <ProductDetail/>
        </Route>

        <Route exact path="/checkout">
            <Navbar/>
            <Carts/>
        </Route>

        <Route exact path="/about">
        <Navbar/>
          <About/>
        </Route>
        
        <Route exact path="/contact">
        <Navbar/>
          <Contact/>
        </Route>

        <Route exact path="/">
        {/* <Header/> */}
        {/* <Navbar/> */}
          <Home/>
        </Route>

        {/* <Route path="/admin" name='Admin' render={(props) => <AdminPages {...props} />} /> */}

        
       
        {/* <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/> */}
        
        </Switch>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
