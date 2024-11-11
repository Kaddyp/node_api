import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    const token = useSelector(state => state.auth.token);
    const role = useSelector(state => state.auth.role);
    return (
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
            <div className="container-fluid"> 
              <a className="navbar-brand" href="/">SUGI</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/" style={({ isActive }) => ({
                          color: isActive
                              ? "black"
                              : "gray",
                      })}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/product" style={({ isActive }) => ({
                          color: isActive
                              ? "black"
                              : "gray",
                      })}>Product</NavLink>
                    </li>
                </ul>
                <div className="d-flex">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {(role === 'Admin') && (
                        <>
                          <li className="nav-item">
                            <a className="nav-link" href="/setting">Setting</a>
                          </li>
                        </>
                      )}                    
                      {(role === 'Engineer') && (
                        <>
                          <li className="nav-item">
                            <a className="nav-link" href="/routing">Routing</a>
                          </li> 
                          <li className="nav-item">
                            <a className="nav-link" href="/config">Config</a>
                          </li>                     
                        </>
                      )}
                      
                      {!token && (
                        <>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/login" style={({ isActive }) => ({
                                color: isActive
                                    ? "black"
                                    : "gray",
                            })}>Sign in</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/register" style={({ isActive }) => ({
                                color: isActive
                                    ? "black"
                                    : "gray",
                            })}>Sign up</NavLink>
                          </li>
                        </>
                      )}              
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
    );
}
export default Header;