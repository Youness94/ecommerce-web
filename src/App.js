import AdminPages from './pages/Admin/routes';
import axios from "axios";
import { CartProvider } from "react-use-cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
// import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
// import Login from "./layouts/Buttons/Login";
import Contact from "./pages/Contact";
import ProductDetail from "./components/clientSide/ProductDetail";
import { BrowserRouter as Router,  Route , Switch} from "react-router-dom";
import Carts from './pages/Carts/inxdex';



axios.defaults.baseURL ='http://localhost:8000'
// axios.defaults.withCredentials = true;
// axios.defaults.withCredentials = false;
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
        <Route path="/admin" name='Admin' render={(props) => <AdminPages {...props} />} />

        <Route path="/products">
          <Header />
          <Products/>
        </Route>

        <Route path="/products:id">
          <Header />
          <ProductDetail/>
        </Route>

        <Route path="/checkout">
            
            <Header />
            <Carts />
          </Route>

        <Route exact path="/about">
          <Header />
          <About/>
        </Route>
        
        <Route exact path="/contact">
          <Header />
          <Contact/>
        </Route>

        <Route exact path="/">
        <Header/>
          <Home/>
        </Route>
              
        {/* <Route path="/login" component={Login}/> */}
        
        </Switch>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
