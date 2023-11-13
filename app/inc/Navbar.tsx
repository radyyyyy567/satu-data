import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { logoKominfo } from "../img/index";
import Image from "next/image";


const Navbar = () => {
  return (
    <>
      <section className="bg-white h-[70px] w-full fixed top-0 shadow z-40">
        <nav className="max-w-5xl mx-auto h-full flex items-center justify-between">
          <div className="flex">
            <Image src={logoKominfo} alt="logo-satu-data.png" height={40} />
          </div>
          <div className="flex items-center space-x-4 text-[16px]">
            <div>
              <ul className="space-x-4 flex items-center">
                <li>
                  <a
                    href="#"
                    className="text-[#1e1e1e] hover:text-blue-500 transition-all duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <li className="relative group">
                  <div className="cursor-pointer text-[#1e1e1e] hover:text-blue-500 transition-all duration-300 flex space-x-2 items-center ">
                    <div>Data</div>
                    <div>
                      <ChevronDownIcon className="h-[15px] w-[15px]" />
                    </div>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                      <ul className="space-y-1 mt-4 bg-white shadow-md">
                        <li className="p-2">
                          <a
                            href="/geospasial"
                            className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Geospasial
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="/data"
                            className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Statistik Sektorat
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="/standar-data"
                            className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Standar Data
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <div className="cursor-pointer text-[#1e1e1e] hover:text-blue-500 transition-all duration-300 flex space-x-2 items-center">
                    <div>Publikasi</div>
                    <div>
                      <ChevronDownIcon className="w-[15px] h-[15px]" />
                    </div>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible z-20 absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                      <ul className="space-y-1 mt-2 bg-white shadow-md h-auto">
                        <li className="auto p-2">
                          <a
                            href="/dokumen"
                            className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                          >
                            Dokumen
                          </a>
                        </li>
                        <li className="group/item is-published cursor-pointer relative p-2">
                          <div className="text-black flex items-center justify-between group-hover/item:text-blue-500 px-[20px] delay-0">
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
                                  className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                                >
                                  2019
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/infografi/tahun/2020"
                                  className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                                >
                                  2020
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/infografi/tahun/2021"
                                  className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
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
                    href="/tentang"
                    className="text-[#1e1e1e] hover:text-blue-500 transition-all duration-300"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="#"
                className="py-3 px-7 border border-blue-500 rounded-[5px] text-blue-500 font-semibold"
              >
                Masuk
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;