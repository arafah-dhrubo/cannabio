import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../hook/useAuth';
const Login = () => {
  const { user, signInWithGoogle, auth, signInWithEmailAndPassword, SetUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = e =>{
    e.preventDefault()
    const email = e.target['email'].value;
    const password = e.target['password'].value;
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
      SetUser(result.user)
    })
  }
  return (
    <div>
      <div className='md:w-3/6 w-5/6 mx-auto border-2 px-3 py-4 my-28 bg-gray-900'>
        <div className='w-full mb-5'>
          <img src="https://i.ibb.co/GczsJyh/Cannabio.png" alt="logo" className='w-3/6 mx-auto' />
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label for="email" className='text-white'>Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="password" className='text-white'>Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>

          <button type="submit" className="bg-green-600 text-white w-full mt-2 py-2">Submit</button>
        </form>
        <div className='flex gap-3 mt-5 items-center w-4/6 mx-auto'><hr className='w-full border-2 bg-gray-50' /><p className='text-white'>Or</p><hr className='w-full border-2 bg-gray-50' /></div>
        <div className='w-full text-center mt-2'>
          <button onClick={signInWithGoogle} className="md:w-2/6 w-4/6"><img src="https://www.oncrashreboot.com/images/create-apple-google-signin-buttons-quick-dirty-way-google.png" alt="" /></button>
        </div>
        <p className='text-white text-center'>New User? <Link to="/register" className='text-green-500'>Create Account?</Link></p>
      </div>
    </div>
  )
}

export default Login