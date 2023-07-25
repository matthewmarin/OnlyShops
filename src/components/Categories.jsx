import React, { useEffect, useState } from "react";
import Features from "./Features";

function Categories() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
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
    </div>
  );
}

export default Categories;
