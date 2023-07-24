import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-700">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase  font-medium max-w-[240px] text-primary hover:text-blue-900 "
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className="text-2xl">
              <IoMdClose className="text-gray-500 hover:text-red-900 transition cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer bg-red-400"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-4">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer bg-blue-400"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around text-lg">
              ${price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium text-2xl">{`$ ${parseFloat(
              item.price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
