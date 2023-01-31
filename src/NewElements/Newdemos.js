import React from 'react'
import { Link } from 'react-router-dom'
const Newdemos = () => {
    
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
                    <Link className="navbar-brand" to="/">E-Commerce Site</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Phones and Tablets</Link></li>
                    <li><Link to="/">Desktops and Laptops</Link></li>
                    <li><Link to="/">Accessories</Link></li>
                    <div className='buttons'>
                        <Link to="/register" className="btn btn-primary btn-sm">Sign In</Link>
                    </div>
                </ul>
            </div>
        </nav>
    )      
}

export default Newdemos
