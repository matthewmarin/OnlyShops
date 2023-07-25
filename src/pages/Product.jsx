import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(id, "id", product);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  if (!Object.keys(product).length > 0) return <div>Item Not Found</div>;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center"></span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <div className="relative"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <div className="flex">
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded mr-2">
                  Add to Cart
                </button>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
