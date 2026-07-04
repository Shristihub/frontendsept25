import React, { useEffect, useState } from "react";
import { viewAllBrands } from "../../../service/BrandService";
import { useNavigate } from "react-router-dom";

const ViewBrand = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    viewAllBrands().then(
      (res) => setBrands(res.data),
      (error) => console.log(error),
    );
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Brands</h2>

      <ul className="divide-y divide-gray-200">
        {brands.map((brand) => (
          <li
            key={brand.brandId}
            className="py-2.5 text-sm text-gray-700"
          >
            {brand.brandName}
          </li>
        ))}
      </ul>

      {brands.length === 0 && (
        <p className="text-sm text-gray-400 py-2.5">No brands found.</p>
      )}

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default ViewBrand;