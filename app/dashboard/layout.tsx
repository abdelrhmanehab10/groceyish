"use client";
import { isAdmin } from "@/lib/admin";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FC } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { userId } = useAuth();

  if (!isAdmin(userId)) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default DashboardLayout;
