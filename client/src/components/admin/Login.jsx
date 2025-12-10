import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const bgImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-900">
      
      <div className="absolute inset-0 z-0">
        <img 
            src={bgImage} 
            alt="Background" 
            className="h-full w-full object-cover scale-110 blur-md filter grayscale opacity-60" 
        />
      </div>

      <div className="absolute inset-0 z-10 bg-radial-gradient from-gray-900/50 to-gray-900/90"></div>

      <div className="relative z-20 w-full max-w-sm p-6 max-md:m-6 bg-white/90 backdrop-blur-sm border border-blue-600 shadow-xl shadow-gray-900/50 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-2 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">Admin</span> Login
            </h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>
          
          <form
            onSubmit={handleSubmit}
            className="mt-4 w-full sm:max-w-md text-gray-500"
          >
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="Email"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6 bg-transparent"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="Password"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6 bg-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 font-medium bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-900 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;