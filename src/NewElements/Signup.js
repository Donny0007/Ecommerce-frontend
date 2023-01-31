import React from 'react'

const Signup = () => {
  return (
    <div className='container'>
    <form className='form-horizontal'>
      <h2 className='jumbotron text-center'>Creating a New Account</h2>
      <label htmlFor='name' className='control-label col-sm-1'>Name</label>
      <div className=' col-sm-3'>
        <input type='text' className='form-control' name='name'/>
      </div>
      <label htmlFor='email' className='control-label col-sm-1'>Email</label>
      <div className='col-sm-3'>
        <input type='email' className='form-control' name='email'/>
      </div>
      <label htmlFor='password' className='control-label col-sm-1'>Password</label>
      <div className='col-sm-3'>
        <input type='password' className='form-control' name='password'/>
      </div>
      <label htmlFor='gender' className='control-label col-sm-1'>Gender</label><br/>
      <div className='col-sm-3'>
        <input type='radio' className='radio-inline' name='gender' value={"M"}/>Male
        <input type='radio' className='radio-inline' name='gender' value={"F"}/>Female
        <input type='radio' className='radio-inline' name='gender' value={"O"}/>Other
      </div>
      <label htmlFor='contact' className='control-label col-sm-1'>Contact number</label>
      <div className='col-sm-3'>
        <input type='tel' className='form-control' name='contact'/>
      </div>
      <label htmlFor='street' className='control-label col-sm-1'>Street</label>
      <div className='col-sm-3'>
        <input type='text' className='form-control' name='street'/>
      </div>
      <label htmlFor='district' className='control-label col-sm-1'>District</label>
      <div className='col-sm-3'>
        <select className='form-control'>
          <option>Ktm</option>
          <option>Bkt</option>
          <option>Lalitpur</option>
        </select>
      </div><br/>
        <button type='submit' className='text-center btn btn-success' value='SignUp'>Sign Up</button>
    </form>
    </div>
  )
}
    
export default Signup;
