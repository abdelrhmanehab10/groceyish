"use client";

import { FC } from "react";
import Image from "next/image";
import {
  AiOutlineDashboard,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { isAdmin } from "@/lib/admin";
import { useRouter } from "next/navigation";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { userId } = useAuth();
  const { isSignedIn } = useUser();
  const router = useRouter();

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
      <div className="flex gap-5">
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
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-1"
          >
            <p className="text-xs font-bold">لوحة التحكم</p>
          </button>
        )}
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href="/sign-in" className="text-sm cursor-pointer">
            تسجيل الدخول
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
