import { Link } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Galeria</h1>
      <div className="space-x-4">
        <Link to="/" className="flex items-center gap-1 hover:none ml-4"> <HiOutlineHome /> Home</Link>
        <Link to="/favoritos" className="flex items-center gap-1 hover:none"> <HiOutlineHeart />Favoritos</Link>
      </div>
    </nav>
  );
}
