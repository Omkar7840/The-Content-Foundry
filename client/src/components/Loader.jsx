import React from 'react';

const Loader = () => {
  const bgImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <style>
        {`
          @keyframes page-flip {
            0% { transform: rotateY(0deg); background-color: #2563EB; }
            50% { transform: rotateY(180deg); background-color: #60A5FA; }
            100% { transform: rotateY(0deg); background-color: #2563EB; }
          }
        `}
      </style>
      
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Loading Background" className="h-full w-full object-cover scale-110 blur-md filter grayscale opacity-60" />
        </div>

        <div className="absolute inset-0 z-10 bg-radial-gradient from-gray-900/50 to-gray-900/90"></div>


     <div className="relative z-20 flex flex-col items-center justify-center p-5">
            <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.5)]" style={{ animation: 'page-flip 1.8s infinite ease-in-out' }}></div>
            <div className="absolute inset-0 rounded-xl bg-blue-900/50 transform translate-x-2 translate-y-2 -z-10"></div>
            </div>
            
            <p className="mt-8 text-blue-200 font-bold tracking-[0.3em] animate-pulse text-xs uppercase drop-shadow-md">
            Reading Article...
            </p>
        </div>
      </div>
    </>
  );
};

export default Loader;