import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-yellow-500 text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Find your next designer today</h1>
      <p className="mb-8">The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.</p>
      <div className="space-x-4">
        <button className="bg-black text-white py-2 px-4 rounded">Get started now</button>
        <button className="bg-white border border-black text-black py-2 px-4 rounded">Learn about hiring</button>
      </div>
      <p className="mt-8">Are you a designer? <a href="#" className="text-blue-500">Join Dribbble</a></p>
    </div>
  );
};

export default HeroSection;
