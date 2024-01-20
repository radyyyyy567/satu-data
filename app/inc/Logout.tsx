'use client';
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Logout = () => {
  const route = useRouter();
  const [loading, setLoading] = useState(false)
  const handleLogout = async () => {
    try {
      setLoading(true);
      const signOutVar = await signOut({
        redirect: false, // Set to false to prevent immediate redirection
      });  
    } catch (error: any) {
      console.log(error)
    } finally {
      route.push('/');
    }
    
    
  };
  return (
    <button onClick={() => handleLogout()} className="flex space-x-2 items-center p-2 font-semibold text-[12px] w-full text-white bg-red-500 active:bg-red-800 rounded-lg ">
      <ArrowLeftOnRectangleIcon className="w-5 h-5" />
      <span>{loading ? "Memuat..." : "Keluar"}</span>
    </button>
  );
};

export default Logout;
