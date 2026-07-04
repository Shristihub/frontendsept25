import React, { useState } from "react";
import { deleteByCategoryId } from "../../../service/CategoryService";
import { useNavigate } from "react-router-dom";

const DeleteBrand = () => {
  const navigate = useNavigate();
  const [brandId, setBrandId] = useState(0);
  const handleDeleteBrand = (e) => {
    e.preventDefault();
    deleteByBrandId(brandId).then((res) => console.log(res.status));
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Delete Brand</h2>

      <form onSubmit={handleDeleteBrand} className="space-y-4">
        <div>
          <label
            htmlFor="brandId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Brand ID
          </label>
          <input
            type="text"
            name="brandId"
            id="brandId"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <input
          type="submit"
          value="Delete Brand"
          className="w-full rounded-md bg-red-600 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition cursor-pointer"
        />
      </form>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default DeleteBrand;
