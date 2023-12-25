import { useState } from "react";
import DirectStatus from "../inc/DirectStatus";

const page = () => {
  const value = "";
  const namePage = "Geospasial";
  return (
    <>
      <section className="mt-[70px] pt-[30px] pb-[60px]">
        <div className="max-w-5xl mx-auto">
          <DirectStatus namePage={namePage} />
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <h1 className="text-[32px] text-center font-semibold">
              Satu Kata Kabupaten Pelalawan
            </h1>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-blue-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="mt-16 space-y-2">
            <div>Data</div>
            <div>
              <select className="w-full border p-2 focus:outline-blue-100 rounded-[5px]">
                <option value={value} disabled selected>
                  Pilih Periode
                </option>
                <option value="0">1</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
                <option value="6">Jaguar</option>
                <option value="7">Land Rover</option>
                <option value="8">Mercedes</option>
                <option value="9">Mini</option>
                <option value="10">Nissan</option>
                <option value="11">Toyota</option>
                <option value="12">Volvo</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021391.6893711213!2d101.64737990703124!3d0.10758561407550503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d617f0ab37255b%3A0x3039d80b220d170!2sKabupaten%20Pelalawan%2C%20Riau!5e0!3m2!1sid!2sid!4v1699198692564!5m2!1sid!2sid"
            width="100%"
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

export default page;
