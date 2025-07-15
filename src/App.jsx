import { Link } from "react-router-dom";

import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex justify-center gap-6 p-4 bg-white shadow-md">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>
      <AppRoutes />
    </div>
  );
};

export default App;
