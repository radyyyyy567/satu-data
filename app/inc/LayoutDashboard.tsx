import { useState } from "react";
import { ArrowLeftOnRectangleIcon, BellIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { logoKominfo, logoSatuDataIndonesia, userImage } from "../img";

export const LayoutDashboard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex overflow-hidden h-screen">
      <section
        className={`w-[300px] h-full flex flex-col justify-between overflow-hidden bg-gray-200 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="pt-2 px-2">
              <div className="flex shadow rounded-lg items-center space-x-1 p-4 bg-white justify-center">
              <Image
                  loading="lazy"
                  src={logoSatuDataIndonesia}
                  alt="logo-satu-data.png"    
                  height={28}
              />
              <div className="bg-red-500 w-[1px] h-[36px]"></div>
              <Image
                  loading="lazy"
                  src={logoKominfo}
                  alt="logo-satu-data-indonesia.png"  
                  height={28}
              />
              </div>
          </div>
          <div className="pt-2 px-2">
              <div className="bg-white shadow p-4 rounded-lg">
                  <div className="text-gray-500 font-semibold uppercase text-xs tracking-[5px]">
                      Features
                  </div>
                  <ul className="mt-4">
                      <li>
                          <a href="/admin/dashboard" className="flex space-x-2 items-center p-2 font-semibold text-[12px] w-full hover:bg-gray-200 rounded-lg ">
                            <HomeIcon className="w-5 h-5" />
                            <span>
                              Dashboard
                            </span>
                          </a> 
                      </li>
                  </ul>
              </div>
          </div>
          <div className="pt-2 px-2">
              <div className="bg-white shadow p-4 rounded-lg">
                  <div className="text-gray-500 font-semibold uppercase text-xs tracking-[5px]">
                      System
                  </div>
                  <ul className="mt-4">
                      <li>
                          <a href="/admin/dashboard" className="flex space-x-2 items-center p-2 font-semibold text-[12px] w-full text-white bg-red-500 active:bg-red-800 rounded-lg ">
                            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                            <span>
                              Logo Out
                            </span>
                          </a> 
                      </li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="p-2 text-center text-xs text-gray-400">
          Powered By Kominfo Pelalwan@2023
        </div>
      </section>
      <section
        className={`w-full transition-all duration-300 ${
          sidebarOpen ? "ml-0" : "-ml-[300px]"
        }`}
      >
        <nav className="h-[70px] bg-white shadow flex justify-between items-center p-4">
          <div>
            <button
              onClick={toggleSidebar}
              className="active:bg-gray-100 p-2 rounded-[5px]"
            >
              <Bars3Icon className="h-6 w-6 text-gray-900" />
            </button>
          </div>
          <div className="flex items-center h-full space-x-8">
            <div className="flex items-center">
              <button className="active:bg-gray-100 p-2 rounded-full hover:bg-gray-50 transition duration-200">
                <BellIcon className="w-5 h-5" />
              </button>
              <button className="active:bg-gray-100 p-2 rounded-full hover:bg-gray-50 transition duration-200">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="h-full w-[1px] bg-red-500"></div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full overflow-hidden border-red-500 border">
                <Image
                  src={userImage}
                  alt="user.jpg"
                  loading="lazy"
                  width={24}
                  height={24}
                />
              </div>
              <div className="font-semibold tex-gray-800">Kasinda Karissa</div>
            </div>
          </div>
        </nav>
        {children}
      </section>
    </div>
  );
};

export default LayoutDashboard;
