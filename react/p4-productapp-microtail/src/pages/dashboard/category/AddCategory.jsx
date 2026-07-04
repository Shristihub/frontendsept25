import React, { useState } from "react";
import { addCategory } from "../../../service/CategoryService";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const handleAddCategory = (e) => {
    let category = {
      categoryName: categoryName,
    };
    addCategory(category).then(
      (res) => console.log(res.status),
      (err) => console.log(err),
    );
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Category</h2>

      <form onSubmit={handleAddCategory} className="space-y-4">
        <div>
          <label
            htmlFor="categoryName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="submit"
          value="Add Category"
          className="w-full rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition cursor-pointer"
        />
      </form>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 w-full rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
      >
        Back
      </button>
    </div>
  );
};

export default AddCategory;
