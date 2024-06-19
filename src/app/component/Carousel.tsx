interface CarouselItemProps {
    name: string;
    title: string;
    tags: string[];
    image: string;
  }
  
  const CarouselItem: React.FC<CarouselItemProps> = ({ name, title, tags, image }) => {
    return (
      <div className="w-80 bg-white shadow-md rounded-lg overflow-hidden mx-2">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
          <div className="mt-2 flex flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2 mb-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const Carousel: React.FC = () => {
    const items = [
      // Example items (these should be replaced with actual data)
      { name: 'Daniele Buffa', title: 'Principal Designer', tags: ['Animation', 'UI', 'Visual'], image: 'https://picsum.photos/seed/picsum/200/3001'  },
      { name: 'Dan Mall', title: 'Design Educator', tags: ['Product', 'UX'], image: 'https://picsum.photos/seed/picsum/200/3001' },
      { name: 'Dan Mall', title: 'Design Educator', tags: ['Product', 'UX'], image: 'https://picsum.photos/seed/picsum/200/3001' },
      { name: 'Dan Mall', title: 'Design Educator', tags: ['Product', 'UX'], image: 'https://picsum.photos/seed/picsum/200/3001' },
      // Add more items here...
      { name: 'Dan Mall', title: 'Design Educator', tags: ['Product', 'UX'], image: 'https://picsum.photos/seed/picsum/200/3001' },
      { name: 'Dan Mall', title: 'Design Educator', tags: ['Product', 'UX'], image: 'https://picsum.photos/seed/picsum/200/3001' },


    ];
  
    return (
      <div className="flex overflow-x-scroll py-8">
        {items.map(item => (
          <CarouselItem key={item.name} {...item} />
        ))}
      </div>
    );
  };
  
  export default Carousel;
  