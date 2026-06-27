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
    <div>
      <form onSubmit={handleAddBrand}>
        <input
          type="text"
          name="brandName"
          id="brandName"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <input type="submit" value="Add Brand"></input>
      </form>
      <button onClick={() => navigate("/dashboard")}>Back</button>
    </div>
  );
};

export default AddBrand;
