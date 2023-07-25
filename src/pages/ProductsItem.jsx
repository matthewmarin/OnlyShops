import ProductsCard from "../components/ProductsCard";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";

function ProductsItem() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductsItem = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProductsItem();
  }, []);

  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          All Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductsItem;
