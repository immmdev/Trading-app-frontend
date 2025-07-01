import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
   


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="Logo" style={{ width: "120px" }} />
                </Link>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">

                        {/* Navigation Links */}
                        <li className="nav-item">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    window.location.href = "http://localhost:3001";
                                }}
                            >
                                Go to Dashboard
                            </button>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>            
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
