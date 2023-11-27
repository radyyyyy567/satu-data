import { logoKominfo, logoPemkabPelalawan } from "@/app/img/index";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="h-screen w-full fixed top-0 left-0 flex items-center justify-center bg-red-100">
        <div className="bg-white rounded-xl p-10 shadow divide-y-4 space-y-10 divide-red-400">
          <div className="flex space-x-3 justify-center">
            <Image loading="lazy" src={logoPemkabPelalawan} alt="logo-satu-data.png" height={40} />
            <div className="bg-red-300 w-[1px] h-[38px]"></div>
            <Image loading="lazy"
              src={logoKominfo}
              alt="logo-satu-data-indonesia.png"
              height={40}
            />
          </div>
          <div className="py-4 space-y-4">
            <div className="space-y-1">
              <label htmlFor="username" className="text-gray-500 text-[12px]">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Masukkan Username disini"
                className="w-full rounded-[5px] focus:outline-red-500 outline-offset-4 border px-4 py-3 text-[14px]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="text-gray-500 text-[12px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password disini"
                className="w-full rounded-[5px] focus:outline-red-500 outline-offset-4 border px-4 py-3 text-[14px]"
              />
              <a href="#" className="text-red-500 hover:underline focus:text-red-800 text-[12px]">
                Lupa Password?
              </a>
            </div>
            <a href="/admin/dashboard" className=" block w-full rounded-[5px] active:bg-red-700 bg-red-500 px-4 py-3 text-white font-semibold text-center">
              Masuk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
