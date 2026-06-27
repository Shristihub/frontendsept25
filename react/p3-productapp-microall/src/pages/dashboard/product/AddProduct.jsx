import { useEffect, useState } from "react";
import { viewAllBrands } from "../../../service/BrandService";
import { viewAllCategories } from "../../../service/CategoryService";
import { addProduct } from "../../../service/CatalogService";

const AddProduct = () => {
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
      setCategoryIdList(prev=>
        e.target.checked?[...prev,{categoryId:id}] :prev.filter(c=>c.categoryId!=id)
      );
     }

    // const id = Number(e.target.value);
    // setCategoryIdList((prev) => {
    //   const catId = Number(e.target.value);
     
    //   e.target.checked
    //     ? [...prev, { categoryId: id }]
    //     : // id not checked remove from the list
    //       prev.filter((cat) => cat.categoryId != catId);
    // });
    
  // };
  const handleOfferToggle = (e) => {
    const name = e.target.value;
    setOffers((prev) =>
      e.target.checked
        ? [...prev, { offerName: name }]
        : prev.filter((o) => offerName != name),
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
     categoryIdList
    };
     let res = await addProduct(product);
     console.log(res.status);
    
   };

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <table>
          <tbody>
            <tr>
              <td>ProdutName</td>
              <td>
                <input
                  type="text"
                  name="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Ratings</td>
              <td>
                <input
                  type="number"
                  name="ratings"
                  value={ratings}
                  onChange={(e) => setRatings(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Color</td>
              <td>
                <input
                  type="text"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Material</td>
              <td>
                <input
                  type="text"
                  name="material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>
                <input
                  type="number"
                  name="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Offers</td>
              <td>
                {offersList.map((offer) => (
                  <div key={offer}>
                    <input
                      type="checkbox"
                      key={offer}
                      value={offer}
                      onChange={handleOfferToggle}
                    />
                    {offer}
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>
                <select
                  name="brandId"
                  onChange={(e) => setBrandId(e.target.value)}
                >
                  {brands.map((brand) => (
                    <option value={brand.brandId} key={brand.brandId}>
                      {brand.brandName}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Categories</td>
              <td>
                {categories.map((category) => (
                  <div key={category.categoryId}>
                    <input
                      type="checkbox"
                      value={category.categoryId}
                      onChange={handleCategoryToggle}
                    />
                    {category.categoryName}
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Add Product" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default AddProduct;
