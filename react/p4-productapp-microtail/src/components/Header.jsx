import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between gap-4 bg-gray-900 px-6 py-3">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-white shrink-0">
        ShipKart
      </Link>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => navigate("/register")}
          className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Sign Up
        </button>

        <button
          onClick={() => navigate("/login")}
          className="rounded-md border border-gray-600 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Sign In
        </button>

        <Link to="/cart">
          <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 transition">
            Cart
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;