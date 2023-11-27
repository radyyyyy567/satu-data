"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LayoutDashboard from "./LayoutDashboard";

export const LayoutAlt = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/admin/login") ? (
        children
      ) : pathname.includes("/admin/dashboard") ? (
        <>
          <LayoutDashboard>{children}</LayoutDashboard>
        </>
      ) : (
        <>
          <Navbar />
            {children}
          <Footer />
        </>
      )}
    </>
  );
};
