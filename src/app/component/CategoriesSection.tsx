import React from 'react';

const categories = [
  { name: 'Branding', image: 'path-to-branding-image' },
  { name: 'Web Design', image: 'path-to-webdesign-image' },
  { name: 'Illustration', image: 'path-to-illustration-image' },
  { name: 'Print', image: 'path-to-print-image' },
  { name: 'Animation', image: 'path-to-animation-image' },
  { name: 'Mobile', image: 'path-to-mobile-image' },
  { name: 'Typography', image: 'path-to-typography-image' },
];

const CategoriesSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <div key={category.name} className="text-center">
              <img src={category.image} alt={category.name} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
