
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

      <Link to="/getallrecipe" className="text-green-600 font-bold text-2xl">
        <h1>Recipe Finder</h1>
      </Link>

      <ul className="md:flex hidden items-center gap-10">
        <li><Link className="hover:text-gray-500/80 transition" to="/getallrecipe">Get all recipe</Link></li>
        <li><Link className="hover:text-gray-500/80 transition" to="/contactus">Contact Us</Link></li>
      </ul>

      <Link to="/givefeed"><button type="button" className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-green-600 hover:text-white active:scale-95 transition-all w-40 h-11 rounded-full">
        Give feedback
      </button>
      </Link>
    </nav >
  );
};

export default Navbar;