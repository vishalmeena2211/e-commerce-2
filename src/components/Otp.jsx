import React, { useState, useRef } from 'react';

const Otp = () => {
  const initialFormData = {
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the input value is not a number, don't update the state
    if (!/^\d+$/.test(value)) {
      return;
    }

    // Update the state for the current input box
    setFormData({
      ...formData,
      [name]: value,
    });

    // Focus on the next input box if there's a value
    if (value && name !== 'otp4') {
      const nextInput = inputRefs.current[parseInt(name.charAt(3))];
      nextInput && nextInput.focus();
    }
  };

  const handleBackspace = (e, index,name) => {
    if (e.key === 'Backspace' && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      prevInput && prevInput.focus();
    }
    setFormData({
        ...formData,
        [name]: '',
      });
    
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();

    // Concatenate the individual OTP fields to form the complete OTP
    const otp = formData.otp1 + formData.otp2 + formData.otp3 + formData.otp4;

    // Validate the OTP here if needed
    if (!otp || otp.length !== 4) {
      setError('Please enter a valid OTP.');
      return;
    }

    // Here you can add logic to verify the OTP with a backend API or any other validation method

    // For now, just log the OTP
    console.log('OTP Verification Data:', otp);
  };

  return (
    <div className='m-5'>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-100 text-gray-900 m-auto">
        <h2 className="mb-10 text-3xl font-semibold text-center">OTP Verification</h2>

        <form action="" onSubmit={handleOTPSubmit} className="space-y-10">
          <div className="space-y-4">
            <div className="space-y-2 flex justify-center gap-4">
              {['otp1', 'otp2', 'otp3', 'otp4'].map((name, index) => (
                <input
                  key={name}
                  type="text"
                  name={name}
                  id={name}
                  ref={(el) => (inputRefs.current[index] = el)}
                  placeholder=""
                  value={formData[name]}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleBackspace(e, index,name)}
                  required
                  maxLength={1}
                  className="w-12 px-3 mt-2 py-3.5 text-center border rounded-md border-gray-500 bg-gray-100 text-gray-900 focus:border-red-400"
                />
              ))}
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button type="submit" className="w-full px-8 py-3 my-10 font-semibold rounded-md dark:bg-green-600 dark:text-gray-100">Verify OTP</button>

          <div className="flex items-center w-full ">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>

          <p className="text-sm text-center dark:text-gray-400">Don't have an account?
            <a href="/" rel="noopener noreferrer" className="focus:underline text-blue-500 hover:underline">Sign up here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Otp;
