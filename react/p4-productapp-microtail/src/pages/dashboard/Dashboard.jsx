import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardCard = ({ title, description, addLink, addLabel, links }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-1 text-sm text-gray-500">{description}</p>
    <hr className="my-4 border-gray-200" />
    <div className="flex flex-col gap-3">
      <Link
        to={addLink}
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
      >
        {addLabel}
      </Link>
      <div className="flex gap-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-center text-2xl font-bold text-gray-900">
        Admin Dashboard
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <DashboardCard
          title="Product Dashboard"
          description="Add, edit, delete products"
          addLink="products/add"
          addLabel="Add Product"
          links={[
            { to: "products/update", label: "Update" },
            { to: "products/delete", label: "Delete" },
          ]}
        />

        <DashboardCard
          title="Brand Dashboard"
          description="Add, edit, delete brands"
          addLink="brands/add"
          addLabel="Add Brand"
          links={[
            { to: "brands", label: "View" },
            { to: "brands/delete", label: "Delete" },
          ]}
        />

        <DashboardCard
          title="Category Dashboard"
          description="Add, edit, delete category"
          addLink="categories/add"
          addLabel="Add Category"
          links={[
            { to: "categories", label: "View" },
            { to: "categories/delete", label: "Delete" },
          ]}
        />
      </div>

      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;