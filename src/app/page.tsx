import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My App</h1>
      <p className="text-gray-600 text-center max-w-xl">
        This is a simple app demonstrating how to use Clerk for authentication in a Next.js project. 
        Sign in to access more features!
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
