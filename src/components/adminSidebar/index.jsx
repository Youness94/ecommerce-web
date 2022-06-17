import React from 'react'
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
  <div className="">
   {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="" className="brand-link">
    <img src="" alt="" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">ecommerce web</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="" className="" alt="User Image" />
      </div>
      <div className="info">
        <Link to="" className="d-block">Youness Milali</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <Link to="" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Widgets
              <span className="right badge badge-danger">New</span>
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <a  className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Categories
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right"></span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href='/admin/add-category' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add Category</p>
              </a>
            </li>
            <li className="nav-item">
              <a href='/admin/view-category' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>View Category</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a  className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Brands
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right"></span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href='/admin/add-brand' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add Brand</p>
              </a>
            </li>
            <li className="nav-item">
              <a href='/admin/view-brand' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>View Brands</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a  className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Sizes
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right"></span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href='/admin/add-size' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add Size</p>
              </a>
            </li>
            <li className="nav-item">
              <a href='/admin/view-size' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>View Sizes</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a  className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Products
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right"></span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href='/admin/add-product' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add Product</p>
              </a>
            </li>
            <li className="nav-item">
              <a href='/admin/view-product' className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>View Products</p>
              </a>
            </li>
          </ul>
        </li>
  
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

  </div>
  )
}

export default AdminSidebar