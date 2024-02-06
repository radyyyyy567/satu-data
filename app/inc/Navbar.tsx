import {
  ChevronDownIcon,
  Bars3Icon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { logoKominfo, logoSatuDataIndonesia } from "../img/index";
import Image from "next/image";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuDataItems = ["Geospasial", "Statistik Sektorat", "Standar Data"];
  const menuDataLinks = ["/geospasial", "/data", "/standar-data"];
  const menuPublikasiItems = ["Dokumen", "Info Grafis"];
  const subMenuPublikasiItems = [[],["2019", "2020", "2021"]];
  const menuPublikasiLinks = ["/dokumen", ""];
  const subMenuuPublikasiLinks = [[],["/infografi/tahun/2019", "/infografi/tahun/2020", "/infografi/tahun/2021"]];
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <section className=" bg-white h-[70px] w-full fixed top-0 shadow z-40">
      <div className="absolute flex items-center text-red-500 top-0 right-10 h-full">
            
            <div>V. 1.0</div>
          </div>
        <nav className="relative flex lg:max-w-5xl max-w-[340px] mx-auto h-full items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <Image
              loading="lazy"
              src={logoSatuDataIndonesia}
              alt="logo-satu-data.png"
              height={40}
            />
            <div className="bg-red-300 w-[1px] h-[38px]"></div>
            <Image
              loading="lazy"
              src={logoKominfo}
              alt="logo-satu-data-indonesia.png"
              className="lg:h-[40px] h-[30px] w-auto"
            />
          </div>
          <div className="lg:flex hidden items-center space-x-4 text-[16px] font-semibold">
            <div>
              <ul className="space-x-4 flex items-center">
                <li>
                  <a
                    href="/"
                    className="text-[#1e1e1e] hover:text-red-500 transition-all duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="/data/"
                    className="text-[#1e1e1e] hover:text-red-500 transition-all duration-300"
                  >
                    Open Data
                  </a>
                </li>
                <li className="relative group hidden">
                  <div className="cursor-pointer text-[#1e1e1e] hover:text-red-500 transition-all duration-300 flex space-x-2 items-center ">
                    <div>Data</div>
                    <div>
                      <ChevronDownIcon className="h-[15px] w-[15px]" />
                    </div>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                      <ul className="space-y-1 mt-4 bg-white shadow-md">
                        <li className="p-2">
                          <a
                            href="/geospasial"
                            className="text-[#1e1e1e] block hover:text-red-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Geospasial
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="/data"
                            className="text-[#1e1e1e] block hover:text-red-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Statistik Sektoral
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="/standar-data"
                            className="text-[#1e1e1e] block hover:text-red-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Standar Data
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative group hidden">
                  <div className="cursor-pointer text-[#1e1e1e] hover:text-red-500 transition-all duration-300 flex space-x-2 items-center">
                    <div>Publikasi</div>
                    <div>
                      <ChevronDownIcon className="w-[15px] h-[15px]" />
                    </div>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible z-20 absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                      <ul className="space-y-1 mt-2 bg-white shadow-md h-auto">
                        <li className="auto p-2">
                          <a
                            href="/dokumen"
                            className="text-[#1e1e1e] block hover:text-red-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Dokumen
                          </a>
                        </li>
                        <li className="group/item is-published cursor-pointer relative p-2">
                          <div className="text-black flex items-center justify-between group-hover/item:text-red-500 px-[20px] delay-0">
                            <div className="block transition-all duration-300 py-[10px] ">
                              Info Grafis
                            </div>
                            <ChevronRightIcon className="w-4 h-4" />
                          </div>
                          <div className="opacity-0 group-hover/item:opacity-100 left-[1px] absolute top-0 mt-2 w-[200px] transition-all duration-300 transform translate-x-[180px] group-hover/item:translate-x-full z-[-10]">
                            <ul className="space-y-1 bg-white shadow-md">
                              <li>
                                <a
                                  href="/infografi/tahun/2019"
                                  className="text-[#1e1e1e] block hover:text-red-500 transition-all duration-300 py-[10px] px-[20px]"
                                >
                                  2019
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/infografi/tahun/2020"
                                  className="text-[#1e1e1e] block hover:text-red-500 transition-all duration-300 py-[10px] px-[20px]"
                                >
                                  2020
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/infografi/tahun/2021"
                                  className="text-[#1e1e1e] block hover:text-red-500 transition-all duration-300 py-[10px] px-[20px]"
                                >
                                  2021
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="/data-sektoral"
                    className="text-[#1e1e1e] hover:text-red-500 transition-all duration-300"
                  >
                    Data Sektoral
                  </a>
                </li>
                <li>
                  <a
                    href="/tentang"
                    className="text-[#1e1e1e] hover:text-red-500 transition-all duration-300"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="/admin/dashboard"
                className="py-3 px-7 border border-red-500 rounded-[5px] text-red-500 font-semibold"
              >
                Masuk
              </a>
            </div>
            <div>
              <div className="group/search text-red-500 cursor-pointer relative">
                <MagnifyingGlassIcon className="h-6 w-6" />
                <div className="group-hover/search:opacity-100 group-hover/search:visible invisible opacity-0 absolute pt-[23px] -left-[200px] transform translate-y-4 group-hover/search:translate-y-0 transition duration-300">
                  <div className="bg-white shadow p-4 text black">
                    <input
                      type="text"
                      className="focus:outline-none py-2 px-4 border border-gray-700 rounded-[5px] focus:border-red-500"
                      placeholder="Cari disini..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden rounded-[5px] border">
            <button className="p-2 active:bg-gray-200 transition duration-100" onClick={toggleMobileMenu}>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
        <nav
        className={`lg:hidden w-full fixed z-50 top-0 flex transform transition-all duration-300 overflow-scroll pr-[40px] ${
          showMobileMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
          <div className="w-full bg-white shadow h-screen overflow-scroll p-4 transfrom transition-all duration-200" >
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold pl-2">
                Menu
              </div>
              <button onClick={toggleMobileMenu}>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>
            <div className="my-[10px] h-[1px] w-full bg-red-500">

            </div>
            <div className="mt-8">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="block font-semibold p-2 rounded-md hover:bg-gray-200 w-full hover:text-red-500 transition duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <DropDownMenu title={"Data"} items={menuDataItems} links={menuDataLinks}/>
                <DropDownMenu title={"Publikasi"} items={menuPublikasiItems} links={menuPublikasiLinks} subItems={subMenuPublikasiItems} subLinks={subMenuuPublikasiLinks}/>
                <li>
                  <a
                    href="/tentang"
                    className="block font-semibold p-2 rounded-md hover:bg-gray-200 w-full hover:text-red-500 transition duration-300"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <div className="relative flex items-center justify-between">
                    <input type="text" className="p-2 w-full bg-opacity-0 border-b-2 transition duration-200 border-gray-300 focus:border-red-500 text-black placeholder-gray-800 focus:outline-none" placeholder="Cari Disini..."/>
                    <MagnifyingGlassIcon className="absolute right-2 w-6 h-6"/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
        <div className={`bg-gray-900 fixed top-0 transition-all w-full h-screen lg:hidden duration-300 z-40 ${
          showMobileMenu ? 'visible opacity-50' : 'invisible opacity-0'
        }`}></div>
      </section>
    </>
  );
};

export default Navbar;
