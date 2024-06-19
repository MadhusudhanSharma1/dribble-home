import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-bold">Dribbble</p>
        </Link>
        <div className="flex space-x-4">
          <Link href="#">
            <p className="text-gray-700">Find designers</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700">Inspiration</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700">Courses</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700">Jobs</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700">Go Pro</p>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#">
            <p className="text-gray-700">Log in</p>
          </Link>
          <Link href="#">
            <p className="bg-black text-white px-4 py-2 rounded-full">Sign up</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
