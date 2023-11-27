"use client";
import Image from "next/image";
import {
  bannerWeb1,
  bannerWeb2,
  bannerWeb3,
  bannerWeb4,
  fotoKadisKominfo,
  logoKabupatenPelalawan,
} from "./img";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import CardCategory from "./inc/CardCategory";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Autoplay]}
            className="h-full w-full"
          >
            <SwiperSlide className="w-full pt-[70px] h-screen">
              <Image
                loading="lazy"
                src={bannerWeb1}
                alt="logo-kabupaten-pelalawan.jpg"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full pt-[70px] h-screen">
              <Image
                loading="lazy"
                src={bannerWeb2}
                alt="logo-kabupaten-pelalawan.jpg"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full pt-[70px] h-screen">
              <Image
                loading="lazy"
                src={bannerWeb3}
                alt="logo-kabupaten-pelalawan.jpg"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full pt-[70px] h-screen">
              <Image
                loading="lazy"
                src={bannerWeb4}
                alt="logo-kabupaten-pelalawan.jpg"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="mx-auto max-w-[340px] lg:max-w-5xl">
          <div className="flex flex-col items-center space=-y-2 text-[#444]">
            <div className="text-[32px] text-center font-semibold">
              Sekapur Sirih
            </div>
            <div className="flex items-center mt-6">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-red-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="mt-16 lg:grid grid-cols-2 gap-x-6 content-center">
            <div className="h-full py-6">
              <span className="font-bold ">Assalamualaikum Wr.Wb.</span>
              <div className="my-12 space-y-[30px]">
                <p>
                Dalam kesempatan ini, kami ingin memperkenalkan kepada masyarakat luas portal satudata yang merupakan sarana dari Pemerintah Kabupaten Pelalawan untuk memberikan akses terhadap data dan informasi kepada publik. Berikut adalah beberapa fitur yang kami tawarkan melalui portal Satu Data Pelalawan:
                </p>
                <ul className=" space-y-2 ">
                  <li className="flex items-start space-x-2">
                    <div className="w-6">
                      <CheckCircleIcon className="text-red-500 w-6 h-6"/>
                    </div>
                    <div>
                      Data Berdasarkan urusan/bidang.
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-6">
                      <CheckCircleIcon className="text-red-500 w-6 h-6"/>
                    </div>
                    <div>
                      Tampilan data series Bulanan, Semester dan Tahunan.
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                  <div className="w-6">
                      <CheckCircleIcon className="text-red-500 w-6 h-6"/>
                    </div>
                    <span>
                      Tampilan data dalam format JSON dan tabel excel.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                  <div className="w-6">
                      <CheckCircleIcon className="text-red-500 w-6 h-6"/>
                    </div>
                    <span>Pencarian data.</span>
                  </li>
                </ul>
                <p>
                Kami mengundang dengan tulus para pengguna portal ini untuk memberikan masukan dan kritik yang membangun guna peningkatan kualitas portal Satu Data Pelalawan. Terima kasih atas perhatian serta dukungan yang diberikan.
                </p>
              </div>
              <span className="font-bold">
                Oleh: RINTO RINALDI, S.T., M.Kom
              </span>
            </div>
            <div className="rounded-md overflow-hidden">
              <Image
                loading="lazy"
                src={fotoKadisKominfo}
                alt="foto-kadis-kominfo.jpg"
                className="object-cover h-full object-center"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="lg:max-w-5xl max-w-[340px] mx-auto">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <div className="text-[32px] text-center font-semibold">
              Kategori
            </div>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-red-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            Pilih data berdasarkan kategori urusan atau bidang
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-2 lg:grid-row-2 gap-3 mt-4">
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="mx-auto lg:max-w-5xl max-w-[340px]">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <div className="text-[32px] text-center font-semibold">
              Statistik Satu Data Kabupaten Pelalawan
            </div>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-red-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            Statistik data yang terdaftar pada aplikasi Satu Data Kabupaten Pelalawan
          </div>

          <div className="lg:grid grid-cols-3 mt-12 lg:space-y-0 space-y-12">
            <div className="flex-col items-center flex text-center space-y-2">
              <div className="rounded-full bg-red-500 p-4">
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
              <div className="rounded-full bg-red-500 p-4">
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
              <div className="rounded-full bg-red-500 p-4">
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
      <section className="bg-red-500 bg-opacity-5 py-[60px] ">
        <div className="lg:max-w-5xl max-w-[340px] mx-auto">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <div className="text-[32px] text-center font-semibold">
              Produsen Data
            </div>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-red-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            Pilih data berdasarkan kategori urusan atau bidang
          </div>
          <div className="lg:-mx-[20px] -mx-[10px]">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  
                },
                1024: {
                  slidesPerView: 3,
                  
                },
              }}
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
                  <Image
                    loading="lazy"
                    src={logoKabupatenPelalawan}
                    alt="logo-kabupaten-pelalawan.jpg"
                    className="w-[80px] h-[80px] object-cover object-center rounded-full"
                  />
                  <div>
                    <div className="font-bold">Satuan Polisi Pamong Praja</div>
                    <div className="text-[12px]">Produsen Data</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center space-y-4">
                  <Image
                    loading="lazy"
                    src={logoKabupatenPelalawan}
                    alt="logo-kabupaten-pelalawan.jpg"
                    className="w-[80px] h-[80px] object-cover object-center rounded-full"
                  />
                  <div>
                    <div className="font-bold">Satuan Polisi Pamong Praja</div>
                    <div className="text-[12px]">Produsen Data</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center space-y-4">
                  <Image
                    loading="lazy"
                    src={logoKabupatenPelalawan}
                    alt="logo-kabupaten-pelalawan.jpg"
                    className="w-[80px] h-[80px] object-cover object-center rounded-full"
                  />
                  <div>
                    <div className="font-bold">Satuan Polisi Pamong Praja</div>
                    <div className="text-[12px]">Produsen Data</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="text-center pb-[80px] pt-[30px] px-[10px]">
                <div className="shadow-xl bg-white h-full flex flex-col items-center justify-center space-y-4">
                  <Image
                    loading="lazy"
                    src={logoKabupatenPelalawan}
                    alt="logo-kabupaten-pelalawan.jpg"
                    className="w-[80px] h-[80px] object-cover object-center rounded-full"
                  />
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
