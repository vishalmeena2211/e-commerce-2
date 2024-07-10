// import React, { useState } from 'react'

// const Login = () => {

//     const initialFormData = {
//         email: '',
//         password: '',
//     };

//     // Create state variables htmlFor form data and error messages
//     const [formData, setFormData] = useState(initialFormData);
//     const [error, setError] = useState('');

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Validate the form data here if needed
//         // For example, check if email and password are not empty
//         if (!formData.email || !formData.password) {
//             setError('Please fill in both email and password fields.');
//             return;
//         }

//         // If the form data is valid, you can proceed with further actions
//         // For now, just log the form data

//         console.log('Form Data:', formData);


//     };
//     return (
//         <div className=''>


//             <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-100 text-gray-900 m-auto border border-black">
//                 <h2 className="mb-10 text-3xl font-semibold text-center">Login to your account</h2>

//                 <form action="" onSubmit={handleSubmit} className="space-y-10">
//                     <div className="space-y-4">
//                         <div className="space-y-3">
//                             <label htmlFor="email" className="block text-sm">Email address</label>
//                             <input type="email" name="email" id="email" placeholder="vishal@gmail.com" value={formData.email}
//                                 onChange={handleInputChange} required className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400" />
//                         </div>
//                         <div className="space-y-2">
//                             <div className="flex justify-between">
//                                 <label htmlFor="password" className="text-sm">Password</label>
//                                 <a rel="noopener noreferrer" href="/" className="text-xs hover:underline text-gray-800 hover:text-gray-900">Forgot password?</a>
//                             </div>
//                             <input type="password" name="password" id="password" placeholder="*****" value={formData.password}
//                                 onChange={handleInputChange} required className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400" />
//                         </div>
//                     </div>


//                     {error && (
//                         <div className="text-red-600 text-sm">{error}</div>
//                     )}


//                     <button type="submit" className="w-full px-8 py-4 my-10 hover:bg-purple-50 border border-green-600 transition duration-300 ease-linear  hover:text-green-700 font-semibold rounded-md dark:bg-green-600 dark:text-gray-100">Sign in</button>

//                     <div className="flex items-center w-full ">
//                         <hr className="w-full dark:text-gray-700" />
//                         <p className="px-3 dark:text-gray-700">OR</p>
//                         <hr className="w-full dark:text-gray-700" />
//                     </div>

//                     <p className="text-sm text-center dark:text-gray-400">Dont have account?
//                         <a href="/" rel="noopener noreferrer" className="focus:underline text-green-600 hover:underline">Sign up here</a>
//                     </p>
//                 </form>
//             </div>



//         </div>
//     )
// }

// export default Login







import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, setLoading } = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // try {
    //   dispatch(signInStart());
    //   const res = await fetch('/api/auth/signin', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    //   if (data.success === false) {
    //     dispatch(signInFailure(data.message));
    //     return;
    //   }
    //   dispatch(signInSuccess(data));
    //   navigate('/');
    // } catch (error) {
    //   dispatch(signInFailure(error.message));
    // }

    setTimeout(() => {
        setLoading(false);
      }, 500);

    console.log(formData);
  };


  return (
    <div className='p-3 max-w-lg mx-auto mt-32'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
    </div>
  );
}
