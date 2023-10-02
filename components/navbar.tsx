import { FC } from "react";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="h-16 flex justify-between items-center px-3 w-full">
      <div className="flex gap-1 items-center">
        <Image width={40} height={40} src="/logo.png" alt="logo" />
        <div>
          <h3 className="font-bold text-emerald-500">مكانك</h3>
          <p className="text-xs">للخضراوات</p>
        </div>
      </div>
      <form className="flex md:w-1/2">
        <input
          type="text"
          placeholder="أبحث عما تريد.."
          className="placeholder:text-sm px-2 w-full"
        />
        <button type="submit" className="bg-emerald-500 p-2  text-white">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex gap-5">
        <button className="flex items-center gap-1">
          <p className="text-xs hidden md:block">قائمة الرغبات</p>
          <AiOutlineHeart className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-1">
          <p className="text-xs hidden md:block">مشترياتي</p>
          <AiOutlineShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
