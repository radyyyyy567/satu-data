"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const LayoutAlt = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/admin")  ? (
        children
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
