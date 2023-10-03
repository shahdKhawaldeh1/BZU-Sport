import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container justify-content-center"> 
          <Link className="navbar-brand fw-bold text-white" to="/">
            <button data-text="Awesome" className="logo-btn">
              <span className="actual-text">&nbsp;BZU Sport&nbsp;</span>
              <span className="hover-text" aria-hidden="true">&nbsp;BZU Sport&nbsp;</span>
            </button>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> 
              <li className="nav-item">
                <Link className="nav-link active nav-link-background nav-link-border" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-border" to="/todo">Todo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-border" to="/sport">Exercises</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-border" to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>          
            <input placeholder="Search" type="search" className="input" />
          </div>
        </div>
      </nav>
    </>
  );
};
