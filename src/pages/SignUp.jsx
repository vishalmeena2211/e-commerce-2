
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';


// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     gender: 'male', 
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className=''>
//       <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-100 dark:text-gray-900 m-auto">
//         <h2 className="mb-3 text-3xl font-semibold text-center">Create an Account</h2>

//         <form onSubmit={handleSubmit} className="space-y-8 ">
//           <div className="space-y-1">
//             <div className="space-y-3">
//               <label htmlFor="firstName" className="block text-sm">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//                 placeholder="First Name"
//                 className="w-full px-3 py-3 border rounded-md border-gray-500  bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400 "
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-3">
//               <label htmlFor="lastName" className="block text-sm">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 id="lastName"
//                 placeholder="Last Name"
//                 className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-3">
//               <label htmlFor="email" className="block text-sm">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="you@example.com"
//                 className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="******"
//                 className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="block text-sm">Gender</label>
//             <div className="flex space-x-4">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   checked={formData.gender === 'male'}
//                   onChange={handleChange}
//                 />
//                 <span className="text-sm">Male</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   checked={formData.gender === 'female'}
//                   onChange={handleChange}
//                 />
//                 <span className="text-sm">Female</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="other"
//                   checked={formData.gender === 'other'}
//                   onChange={handleChange}
//                 />
//                 <span className="text-sm">Other</span>
//               </label>
//             </div>
//           </div>
//           <div className="my-6 space-y-4">
//             <NavLink to='/otp'>
//             <button
//               type="submit"
//               className="w-full px-8 py-4 hover:bg-purple-50 transition duration-300 ease-linear border border-green-600 hover:text-green-700 font-semibold rounded-md dark:bg-green-600 dark:text-gray-100"
//             >
//               Register
//             </button>
//             </NavLink>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
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
    //   setLoading(true);
    //   const res = await fetch('/api/auth/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    //   if (data.success === false) {
    //     setLoading(false);
    //     setError(data.message);
    //     return;
    //   }
    //   setLoading(false);
    //   setError(null);
    //   navigate('/sign-in');
    // } catch (error) {
    //   setLoading(false);
    //   setError(error.message);
    // }
    setTimeout(() => {
      setLoading(false);
    }, 500);
    console.log(formData)
  };
  return (
    <div className='p-3 max-w-lg mx-auto  mt-32'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
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
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/login'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
