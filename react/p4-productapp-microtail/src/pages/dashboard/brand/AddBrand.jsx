import React, { useState } from "react";
import { addBrand } from "../../../service/BrandService";
import { useNavigate } from "react-router-dom";

const AddBrand = () => {
  const navigate = useNavigate();
  const [brandName, setBrandName] = useState("");
  const handleAddBrand = async () => {
    //create the brand object
    let brand = {
      brandName: brandName,
    };
    //call addBrand method
    console.log(brand);
    let res = await addBrand(brand);
    console.log(res.status);
  };

  return (
      <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Brand</h2>

        <form onSubmit={handleAddBrand} className="space-y-4">
          <div>
            <label
              htmlFor="brandName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              id="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="submit"
            value="Add Brand"
            className="w-full rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition cursor-pointer"
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

export default AddBrand;
