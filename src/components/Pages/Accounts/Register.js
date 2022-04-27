import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Register = () => {
  const { updateProfile, auth, user, setUser, setError, signInWithGoogle, createUserWithEmailAndPassword, setIsLoading } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  if (user) {
    navigate(from, { replace: true });
  }

  const handleRegister = e =>{
    e.preventDefault()
    
    const name = e.target['name'].value;
    const email = e.target['email'].value;
    const password = e.target['password'].value;
    const password2 = e.target['password2'].value;
      if(password===password2){
        createUserWithEmailAndPassword(auth,email, password)
          .then(result => {
              const user = result.user;
              setIsLoading(true);
              updateProfile(auth.currentUser,{
                  displayName: name,
                })
                setUser(user)
          })
          .catch(error => {
              setError(error);
               console.log(error)
              })
              .finally(()=>setIsLoading(false))
  }
      }

  return (
    <div><div className='md:w-3/6 w-5/6 mx-auto border-2 px-5 py-4 my-28 bg-green-800 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl'>
    <div className='w-full mb-5'>
      <img src="https://i.ibb.co/GczsJyh/Cannabio.png" alt="logo" className='w-3/6 mx-auto' />
    </div>
    <form onSubmit={handleRegister}>
    <div className="form-group">
        <label for="name" className='text-white'>Your Name</label>
        <input type="text" className="form-control hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
      </div>
      <div className="form-group">
        <label for="email" className='text-white'>Email address</label>
        <input type="email" className="form-control hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-gray-200">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label for="password" className='text-white'>Password</label>
        <input type="password" className="form-control hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full" id="password" placeholder="Password" />
      </div>

      <div className="form-group">
        <label for="password2" className='text-white'>Password</label>
        <input type="password" className="form-control hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full" id="password2" placeholder="Password" />
      </div>
      <button type="submit" className="bg-green-600 text-white w-full mt-2 py-2 hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full">Create Account</button>
    </form>
    <div className='flex gap-3 mt-5 items-center w-4/6 mx-auto'><hr className='w-full border-2 bg-gray-50' /><p className='text-white'>Or</p><hr className='w-full border-2 bg-gray-50' /></div>
    <div className='w-full text-center mt-2'>
      <button onClick={signInWithGoogle} className="md:w-2/6 w-4/6"><img src="https://www.oncrashreboot.com/images/create-apple-google-signin-buttons-quick-dirty-way-google.png" alt="" /></button>
    </div>
    <p className='text-white text-center'>Already User? <Link to="/login" className='text-green-100'>Login!</Link></p>
  </div></div>
  )
}

export default Register