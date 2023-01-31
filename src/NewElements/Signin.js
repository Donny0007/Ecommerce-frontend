import React from 'react'
import { Link } from "react-router-dom";
const Register = () => {
    
    return (
      <div className='container'>
      <form className='form-group'>
        <h2 className='jumbotron text-center my-3'>Signing In</h2>
        <div className='col-sm-6'>
          <input type='email' placeholder="Email" className='form-control text-center' id="email" required/><br/>
        </div>
        <div className='col-sm-6'>
          <input type='password' placeholder="Password" className='form-control text-center' id="pwd"required/><br/>
        </div>
        <div className='text-center'>
        <input type="submit" className='btn btn-default' value={'Sign In'}/><br/><br/>
        <Link to="/signup">Create an account</Link>
        </div>
      </form>
      </div>
    )
    }
export default Register;