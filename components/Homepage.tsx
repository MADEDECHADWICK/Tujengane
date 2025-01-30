import Login from '@/app/login/page';
import React from 'react';


const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4"
    style={{
      backgroundImage: 'url(/images/wall4.PNG)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <h1 className="text-4xl font-bold text-blue-500 mb-4">TUGENGANE</h1>
      <h2 className="text-2xl mb-8">Welcome to a gathering of purpose</h2>
      <Login />
    </div>
  );
};

export default Homepage;