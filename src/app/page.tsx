import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Carousel from './component/Carousel';
import Card from './component/Card';
import HeroSection from './component/HeroSection';
import CategoriesSection from './component/CategoriesSection';
const Home: React.FC = () => {
  const cards = [
    { title: 'Design 1', author: 'Author 1', likes: 94, views: 27700, image: 'https://picsum.photos/seed/picsum/200/3001' },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100, image: 'https://picsum.photos/seed/picsum/200/3001' },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100, image: 'https://picsum.photos/seed/picsum/200/3001'  },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100, image: 'https://picsum.photos/seed/picsum/200/3001'  },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100, image: 'https://picsum.photos/seed/picsum/200/3001'  },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100, image: 'https://picsum.photos/seed/picsum/200/3001'  },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100, image: 'https://picsum.photos/seed/picsum/200/3001'  },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100, image: 'https://picsum.photos/seed/picsum/200/3001'  },
    { title: 'Design 2', author: 'Author 2', likes: 131, views: 55100,image: 'https://picsum.photos/seed/picsum/200/3001'  },
  ];

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Designers</h2>
        <Carousel />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Explore inspiring designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
      <HeroSection />
      <CategoriesSection />
    </div>
  );
};

export default Home;
