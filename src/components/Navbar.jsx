import { Link, NavLink } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-orange-600 font-semibold"
      : "text-gray-700 hover:text-orange-600 transition";

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">

        <Link to="/" className="text-2xl font-bold text-gray-900">
          Mtaa Market
        </Link>

        <div className="flex flex-wrap gap-5 items-center">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkStyle}>
            Products
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>

          <Link
            to="/login"
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Login
          </Link>

          <Link
            to="/cart"
            className="font-semibold text-gray-800 hover:text-orange-600"
          >
            Cart ({cartCount})
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;