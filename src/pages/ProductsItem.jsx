import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import Features from "../components/Features";

function ProductsItem() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setCategory(data);
    };
    fetchCategories();
  }, []);

  if (category.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <Features cards={category} />
      <ProductsCard />
    </div>
  );
}

export default ProductsItem;
