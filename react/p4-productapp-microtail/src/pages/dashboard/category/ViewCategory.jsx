import React, { useEffect, useState } from "react";
import { viewAllCategories } from "../../../service/CategoryService";
import { useNavigate } from "react-router-dom";

const ViewCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    viewAllCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        View Categories
      </h2>

      <ul className="divide-y divide-gray-200">
        {categories.map((category) => (
          <li
            key={category.categoryId}
            className="py-2.5 text-sm text-gray-700"
          >
            {category.categoryName}
          </li>
        ))}
      </ul>

      {categories.length === 0 && (
        <p className="text-sm text-gray-400 py-2.5">No categories found.</p>
      )}

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 w-full rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
      >
        Back
      </button>
    </div>
  );
};

export default ViewCategory;
