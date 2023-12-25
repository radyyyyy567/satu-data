'use client';
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button onClick={() => signOut({
        redirect: true,
        callbackUrl: `/admin/dashboard`
    })} className="flex space-x-2 items-center p-2 font-semibold text-[12px] w-full text-white bg-red-500 active:bg-red-800 rounded-lg ">
      <ArrowLeftOnRectangleIcon className="w-5 h-5" />
      <span>Log Out</span>
    </button>
  );
};

export default Logout;
