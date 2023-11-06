import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { logoKotaBatam, logoSatuData } from "./img/index";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satu Data - Portal Data Kota Batam",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="bg-white h-[70px] w-full fixed top-0 shadow z-40">
          <nav className="max-w-5xl mx-auto h-full flex items-center justify-between">
            <div className="flex">
              <Image src={logoKotaBatam} alt="logo-satu-data.png" height={40} />
              <Image src={logoSatuData} alt="logo-satu-data.png" height={40} />
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
                        <ChevronDownIcon className="h-[15px] w-[15px]"/>
                      </div>
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                        <ul className="p-2 space-y-1 mt-4 bg-white shadow-md">
                          <li>
                            <a
                              href="/geospasial"
                              className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                            >
                              Geospasial
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                            >
                              Statistik Sektorat
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
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
                        <ChevronDownIcon className="w-[15px] h-[15px]"/>
                      </div>
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                        <ul className="p-2 space-y-1 mt-2 bg-white shadow-md h-auto">
                          <li className="auto">
                            <a
                              href="/dokumen"
                              className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                            >
                              Dokumen
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-[#1e1e1e] block hover:text-blue-500 transition-all duration-300 py-[10px] px-[20px]"
                            >
                              Info Grafis
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
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
        {children}
        <section className="py-[60px]">
          <div className="grid grid-cols-12 gap-x-4 max-w-5xl mx-auto">
            <div className="space-y-6 col-span-6">
              <div className="text-[28px] font-bold">
                Sekretariat Satu Data Kabupaten Pelalawan
              </div>
              <div className="text-[12px]">
                JL. Engku Putri No. 1, Kelurahan Tlk. Tering
                <br />
                Kecamatan Batam Kota, Kota Batam Kepulauan Riau
                <br />
                29432
              </div>
              <div className="text-[12px]">
                <span className="font-bold">Telepon: </span>
                {"(0778) 462164"}
                <br />
                <span className="font-bold">Email: </span>
                {"satudata@batam.go.id"}
              </div>
            </div>
            <div className="space-y-10 mt-2 col-span-3">
              <div className="font-bold">Tautan</div>
              <div>
                <ul className="text-[16px] space-y-5">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <a href="#" className="duration-300 transition hover:text-blue-500 ">
                      data.go.id
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <a href="#" className="duration-300 transition hover:text-blue-500 ">
                      kabpelalawan.bps.go.id
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <a href="#" className="duration-300 transition hover:text-blue-500 ">
                      siependa.pelalawan.go.id
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <a href="#" className="duration-300 transition hover:text-blue-500 ">
                      pddikti.kemdikbud.go.id
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="space-y-10 mt-2 col-span-3">
              <div className="font-bold opacity-0">Tautan</div>
              <div>
                <ul className="text-[16px] space-y-5">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <a href="#" className="duration-300 transition hover:text-blue-500 ">
                      dapo.kemdikbud.go.id
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <a href="#" className="duration-300 transition hover:text-blue-500 ">
                      emispendis.kemenag.go.id
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <a href="#" className="duration-300 transition hover:text-blue-500 ">
                      satudata.kemnaker.go.id
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[30px] bg-blue-500 bg-opacity-5">
          <div className="max-w-5xl mx-auto font-light text-[12px]">
          © Hak Cipta Satu Data <span className="font-bold">Kabupaten Pelalawan</span>.
          </div>
        </section>
      </body>
    </html>
  );
}
