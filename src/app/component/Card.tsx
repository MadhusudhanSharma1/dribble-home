interface CardProps {
    title: string;
    author: string;
    likes: number;
    views: number;
    image: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, author, likes, views, image }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{author}</p>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500">{likes} likes</span>
            <span className="text-sm text-gray-500">{views} views</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  