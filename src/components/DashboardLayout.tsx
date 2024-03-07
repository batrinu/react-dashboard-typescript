// src/components/DashboardLayout.jsx
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidenav Container */}
      <div className="w-64 space-y-4 p-5 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold">Custom Web Supervisor</h2>
        <nav>
          <ul className="flex flex-col">
            <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">
              Dashboard
            </Link>

            <Link
              to="/dashboard/units"
              className="hover:bg-gray-700 p-2 rounded"
            >
              Units
            </Link>
            <Link
              to="/dashboard/unit/id"
              className="hover:bg-gray-700 p-2 rounded"
            >
              Unit
            </Link>

            {/* Add more navigation items here */}
          </ul>
        </nav>
      </div>

      {/* Content Area - Renders the matched child route component. */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
