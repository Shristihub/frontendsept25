import { useEffect, useState, } from "react";
import { viewAllBrands } from "../../../service/BrandService";
import { viewAllCategories } from "../../../service/CategoryService";
import { addProduct } from "../../../service/CatalogService";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [ratings, setRatings] = useState(0);
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const [brands, setBrands] = useState([]); //fetch to display in the UI as a dropdown
  const [categories, setCategories] = useState([]); // fetch to display in check box

  const [brandId, setBrandId] = useState(0); // to send to the backend
  const [categoryIdList, setCategoryIdList] = useState([]); // to send categoryIds to the backend
  const [offers, setOffers] = useState([]); // to send offernames to the backend

  //create an array
  const offersList = [
    "CASH BACK",
    "NO COST EMI",
    "BANK OFFER",
    "PARTNER OFFER",
  ];

  const fetchBrands = async () => {
    let res = await viewAllBrands();
    setBrands(res.data);
  };
  const fetchCategories = async () => {
    let res = await viewAllCategories();
    setCategories(res.data);
  };
  useEffect(() => {
    fetchBrands();
    fetchCategories();
  }, []);

  const handleCategoryToggle = (e) => {
    const id = Number(e.target.value);
    setCategoryIdList((prev) =>
      e.target.checked
        ? [...prev, { categoryId: id }]
        : prev.filter((c) => c.categoryId != id),
    );
  };

  const handleOfferToggle = (e) => {
    const name = e.target.value;
    setOffers((prev) =>
      e.target.checked
        ? [...prev, { offerName: name }]
        : prev.filter((o) => o.offerName != name),
    );
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    let product = {
      productName,
      price,
      stock,
      ratings,
      features: {
        color,
        material,
        description,
      },
      brand: {
        brandId: brandId,
      },
      categoryIdList,
    };
    let res = await addProduct(product);
    console.log(res.status);
    document.addProductForm.submit();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Add Product</h2>

      <form onSubmit={handleAddProduct} name="addProductForm" className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ratings
            </label>
            <input
              type="number"
              name="ratings"
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Material
            </label>
            <input
              type="text"
              name="material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Offers
          </label>
          <div className="grid grid-cols-2 gap-2">
            {offersList.map((offer) => (
              <label
                key={offer}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  value={offer}
                  onChange={handleOfferToggle}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                {offer}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Brand
          </label>
          <select
            name="brandId"
            onChange={(e) => setBrandId(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {brands.map((brand) => (
              <option value={brand.brandId} key={brand.brandId}>
                {brand.brandName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categories
          </label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <label
                key={category.categoryId}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  value={category.categoryId}
                  onChange={handleCategoryToggle}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                {category.categoryName}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Add Product
        </button>
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
export default AddProduct;
