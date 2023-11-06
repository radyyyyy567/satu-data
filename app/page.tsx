"use client";
import Image from "next/image";
import { badge, bannerWeb, logoKotaBatam, logoSatuData, logoSatuDataIndonesia } from "./img";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <section className="mt-[70px] h-[60vh] relative">
        <div className="h-full w-full">
          <Image
            src={bannerWeb}
            alt="banner-web.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div className="max-w-5xl mx-auto flex flex-col justify-center h-full">
            <div className="text-[48px] text-white text-center w-full font-bold flex leading-[1]">
              <p>Selamat Datang di&nbsp;</p>
              <p className="uppercase border-b-[4px] border-blue-500">
                Satu Data Pelalawan
              </p>
            </div>
            <div className="text-left text-[24px] text-white mt-2">
              Portal Terbuka Pemerintah
              <br />
              Kabupaten Pelalawan
            </div>
            <div className="h-[50px] w-10/12 flex mx-auto mt-8">
              <input
                className="w-full rounded-l-[5px] focus:outline-none p-4"
                placeholder="Cari data..."
              />
              <button className="bg-blue-500 flex items-center text-white p-4 space-x-2 rounded-r-[5px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <div>Cari</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center space=-y-2 text-[#444]">
            <div className="text-[32px] text-center font-semibold">
              Satu Data Kabupaten Pelalawan
            </div>
            <div className="flex items-center mt-6">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-blue-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-x-[150px] mt-16">
            <div className="col-span-2 space-y-4">
              <Image
                src={logoSatuData}
                alt="logo-satu-data.png"
                className="w-full"
              />
              <Image
                src={logoSatuDataIndonesia}
                alt="logo-satu-data.png"
                className="w-full"
              />
              <Image src={badge} alt="logo-satu-data.png" className="w-full" />
            </div>
            <div className="col-span-3">
              <div>
                <span className="font-semibold text-blue-500">
                  Satu Data Kabupaten Pelalawan{" "}
                </span>
                adalah portal milik Pemerintah Kota Batam yang ditujukan untuk
                publik dalam mengakses data dan informasi mengenai Kota Batam.
              </div>
              <div className="mt-4">
                Beberapa fitur portal Satu Data Pelalawan.
              </div>
              <div className="mt-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Data Berdasarkan urusan/bidang.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Tampilan data series Bulanan, Semester dan Tahunan.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Tampilan data dalam format JSON dan tabel excel.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Pencarian data.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <div className="text-[32px] text-center font-semibold">
              Kategori
            </div>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-blue-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            Pilih data berdasarkan kategori urusan atau bidang
          </div>
          <div className="-mx-[20px]">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ type: "bullets" }}
              modules={[Navigation, Pagination, Autoplay]}
              className="h-[300px]"
            >
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <div className="font-bold">Pendidikan</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <div className="font-bold">Kesehatan</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <div className="font-bold">Pendidikan</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <div className="font-bold">Pendidikan</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <div className="text-[32px] text-center font-semibold">
              Statistik Satu Data Kabupaten Pelalawan
            </div>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-blue-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            Statistik data yang terdaftar pada aplikasi Satu Data Kota Batam
          </div>

          <div className="grid grid-cols-3 mt-12">
            <div className="flex-col items-center flex text-center space-y-2">
              <div className="rounded-full bg-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <div className="text-[36px] text-[#124364] font-semibold">42</div>
              <div>Data Urusan</div>
            </div>
            <div className="flex-col items-center flex text-center space-y-2">
              <div className="rounded-full bg-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>
              </div>
              <div className="text-[36px] text-[#124364] font-semibold">
                10822
              </div>
              <div>Total Data</div>
            </div>
            <div className="flex-col items-center flex text-center space-y-2">
              <div className="rounded-full bg-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="text-[36px] text-[#124364] font-semibold">61</div>
              <div>Instansi Produsen Data</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-500 bg-opacity-5 py-[60px]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <div className="text-[32px] text-center font-semibold">
              Produsen Data
            </div>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-blue-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            Pilih data berdasarkan kategori urusan atau bidang
          </div>
          <div className="-mx-[20px]">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ type: "bullets" }}
              modules={[Navigation, Pagination, Autoplay]}
              className="h-[400px]"
            >
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center space-y-4">
                  <Image src={logoKotaBatam} alt="logo-kota-batam.jpg" className="w-[80px] h-[80px] object-cover object-center rounded-full"/>
                  <div>
                    <div className="font-bold">Satuan Polisi Pamong Praja</div>
                    <div className="text-[12px]">Produsen Data</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center space-y-4">
                  <Image src={logoKotaBatam} alt="logo-kota-batam.jpg" className="w-[80px] h-[80px] object-cover object-center rounded-full"/>
                  <div>
                    <div className="font-bold">Satuan Polisi Pamong Praja</div>
                    <div className="text-[12px]">Produsen Data</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center space-y-4">
                  <Image src={logoKotaBatam} alt="logo-kota-batam.jpg" className="w-[80px] h-[80px] object-cover object-center rounded-full"/>
                  <div>
                    <div className="font-bold">Satuan Polisi Pamong Praja</div>
                    <div className="text-[12px]">Produsen Data</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center space-y-4">
                  <Image src={logoKotaBatam} alt="logo-kota-batam.jpg" className="w-[80px] h-[80px] object-cover object-center rounded-full"/>
                  <div>
                    <div className="font-bold">Satuan Polisi Pamong Praja</div>
                    <div className="text-[12px]">Produsen Data</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
