import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { logoKotaBatam, logoSatuData } from "./img/index";
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
                    <a href="#" className="text-[#1e1e1e] hover:text-blue-500 transition-all duration-300">
                      Beranda
                    </a>
                  </li>
                  <li className="relative group">
                    <div
                      className="cursor-pointer text-[#1e1e1e] hover:text-blue-500 transition-all duration-300 flex space-x-2 items-center "
                    >
                      <div>
                        Data
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-[15px] h-[15px]"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                        <ul className="p-2 space-y-1 mt-4 bg-white shadow-md">
                          <li>
                            <a
                              href="#"
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
                    <div
                      className="cursor-pointer text-[#1e1e1e] hover:text-blue-500 transition-all duration-300 flex space-x-2 items-center"
                    >
                      <div>
                        Publikasi
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-[15px] h-[15px]"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full -left-4 mt-2 w-[200px] transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                        <ul className="p-2 space-y-1 mt-2 bg-white shadow-md h-auto">
                          <li className="auto">
                            <a
                              href="#"
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
                    <a href="#" className="text-[#1e1e1e] hover:text-blue-500 transition-all duration-300">
                      Tentang Kami
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="py-3 px-7 border border-blue-500 rounded-[5px] text-blue-500 font-semibold">
                  Masuk
                </a>
              </div>
            </div>
          </nav>
        </section>
        {children}
      </body>
    </html>
  );
}
