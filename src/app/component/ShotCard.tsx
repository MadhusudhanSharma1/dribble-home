interface ShotCardProps {
    title: string;
    image: string;
  }
  
  const ShotCard: React.FC<ShotCardProps> = ({ title, image }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
    );
  };
  
  export default ShotCard;
  