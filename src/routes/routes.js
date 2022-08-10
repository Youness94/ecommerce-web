import Dashboard from "../components/adminDashboard";
import AddCategory from "../components/addCategory";
import ViewCategory from "../components/viewCategory";
import EditCategory from "../components/editCategory";

import AddBrand from "../components/addBrand";
import ViewBrand from "../components/viewBrand";
import EditBrand from "../components/editBrand";

import AddSize from "../components/addSize";
import ViewSize from "../components/viewSize";
import EditSize from "../components/editSize";

import AddProduct from "../components/addProduct";
import ViewProduct from "../components/viewProduct";
import EditProduct from "../components/editProduct";




const routes = [
      {path: '/admin', exact: true, name:'Admin'},
      {path: '/admin/dashboard', exact: true, name:'Dashboard', component:Dashboard},
      // {path: '/admin/profile', exact: true, name:'Profile', component:Profile}, 

      {path: '/admin/add-category', exact: true, name:'Category', component:AddCategory},
      {path: '/admin/view-category', exact: true, name:'ViewCategory', component:ViewCategory},
      {path: '/admin/edit-category/:id', exact: true, name:'EditCategory', component:EditCategory},

      {path: '/admin/add-brand', exact: true, name:'AddBrand', component:AddBrand},
      {path: '/admin/view-brand', exact: true, name:'ViewBrand', component:ViewBrand},
      {path: '/admin/edit-brand/:id', exact: true, name:'EditBrand', component:EditBrand},

      {path: '/admin/add-size', exact: true, name:'AddSize', component:AddSize},
      {path: '/admin/view-size', exact: true, name:'ViewSize', component:ViewSize},
      {path: '/admin/edit-size/:id', exact: true, name:'EditSize', component:EditSize},
      
      {path: '/admin/add-product', exact: true, name:'AddProduct', component:AddProduct},
      {path: '/admin/view-product', exact: true, name:'ViewProduct', component:ViewProduct},
      {path: '/admin/edit-product/:id', exact: true, name:'EditProduct', component:EditProduct},
      
];


export default routes;