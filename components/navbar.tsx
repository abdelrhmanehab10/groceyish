"use client";

import { FC } from "react";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { isAdmin } from "@/lib/admin";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { userId } = useAuth();

  return (
    <div className="h-16 flex justify-between items-center px-3 w-full">
      <div className="flex gap-1 items-center">
        <Image width={40} height={40} src="/logo.png" alt="logo" />
        <div>
          <h3 className="font-bold text-emerald-500">مكانك</h3>
          <p className="text-xs">للخضراوات</p>
        </div>
      </div>
      {!isAdmin(userId) ? (
        <form className="hidden md:flex md:w-1/2">
          <input
            type="text"
            placeholder="أبحث عما تريد.."
            className="placeholder:text-sm px-2 w-full"
          />
          <button type="submit" className="bg-emerald-500 p-2  text-white">
            <AiOutlineSearch />
          </button>
        </form>
      ) : null}
      <div className="flex items-center gap-5">
        {!isAdmin(userId) ? (
          <>
            <button>
              <AiOutlineSearch className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1">
              <p className="text-xs hidden md:block">قائمة الرغبات</p>
              <AiOutlineHeart className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1">
              <p className="text-xs hidden md:block">مشترياتي</p>
              <AiOutlineShoppingCart className="w-5 h-5" />
            </button>
          </>
        ) : (
          <Link
            href="/dashboard"
            className="bg-emerald-500 p-2 rounded text-white text-xs font-bold transition border hover:border-emerald-500 hover:bg-transparent hover:text-emerald-500"
          >
            لوحة التحكم
          </Link>
        )}
        {userId ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href="/sign-in" className="text-sm font-bold cursor-pointer">
            تسجيل الدخول
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
