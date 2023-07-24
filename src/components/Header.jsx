import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCartFill } from "react-icons/bs";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-blue-400">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsCartFill className="text-2xl" />
      </div>
    </header>
  );
}

export default Header;
