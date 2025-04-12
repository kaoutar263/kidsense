import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-2 shadow-md bg-white">
      <img src="/logo.jpg" alt="Kidsense Logo" className="w-24" />

      {/* Boutons Parent / Enfant avec redirection */}
      <div className="flex gap-2">
        <Link to="/enfant">
          <button
            className={`px-4 py-1 rounded-full border text-sm ${
              isActive("/enfant")
                ? "bg-green-100 border-green-400"
                : "bg-white border-gray-300"
            }`}
          >
            Enfant
          </button>
        </Link>

        <Link to="/parent">
          <button
            className={`px-4 py-1 rounded-full border text-sm ${
              isActive("/parent")
                ? "bg-green-100 border-green-400"
                : "bg-white border-gray-300"
            }`}
          >
            Parent
          </button>
        </Link>
      </div>

      {/* Boutons Login & Sign Up */}
      <div className="flex gap-3">
        <Link to="/login">
          <button
            className={`px-4 py-2 rounded-lg text-white ${
              isActive("/login") ? "bg-green-600" : "bg-green-500"
            } hover:bg-green-600`}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            + Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



