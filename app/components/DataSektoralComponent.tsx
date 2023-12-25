"use client";
import { useEffect, useState } from "react";
import DirectStatus from "../inc/DirectStatus";
import ListBookComponent from "./ListBookComponent";

const DataSektoralComponent = () => {
  const namePage = "Data Sektoral";
  const [year, setYear] = useState<string>("2023");

  const handleYear = (value: string) => {
    return setYear(value);
  };

  useEffect(() => {}, [year]);
  return (
    <>
      <section className="max-w-5xl mx-auto mt-4">
        <div className="flex">
          <div className="w-[30%]">
            <div className="font-semibold text-[24px]">
              Statistik Sektoral Kabupaten Pelalawan
            </div>
            <div className="mt-4 border border-bg-gray-300 rounded">
              <button
                onClick={() => handleYear("2019")}
                className={`${
                  year === "2019" && "font-semibold" // Use the updated class name here
                } border-b border-gray-300 w-full text-left px-4 py-2 transition duration-300 cursor-pointer odd:bg-gray-100 even:bg-white hover:text-blue-500 hover:border-b-blue-500`}
              >
                2019
              </button>
              <button
                onClick={() => handleYear("2020")}
                className={`${
                  year === "2020" && "font-semibold"
                } border-b border-gray-300 w-full text-left px-4 py-2 transition duration-300 cursor-pointer odd:bg-gray-100 even:bg-white hover:text-blue-500 hover:border-b-blue-500`}
              >
                2020
              </button>
              <button
                onClick={() => handleYear("2021")}
                className={`${
                  year == "2021" && "font-semibold"
                } border-b border-gray-300 w-full text-left px-4 py-2 transition duration-300 cursor-pointer odd:bg-gray-100 even:bg-white hover:text-blue-500 hover:border-b-blue-500`}
              >
                2021
              </button>
              <button
                onClick={() => handleYear("2022")}
                className={`${
                  year == "2022" && "font-semibold"
                } border-b border-gray-300 w-full text-left px-4 py-2 transition duration-300 cursor-pointer odd:bg-gray-100 even:bg-white hover:text-blue-500 hover:border-b-blue-500`}
              >
                2022
              </button>
              <button
                onClick={() => handleYear("2023")}
                className={`${
                  year == "2023" && "font-semibold"
                } border-b border-gray-300 w-full text-left px-4 py-2 transition duration-300 cursor-pointer odd:bg-gray-100 even:bg-white hover:text-blue-500 hover:border-b-blue-500`}
              >
                2023
              </button>
            </div>
          </div>
          <div className="ml-24 mt-4">
            <div className="font-semibold text-[24px]">
              Buku Statistik Sektoral
            </div>
            <div className="mt-4">
              <div className="text-blue-500">
                <ListBookComponent year={year} />
              </div>
            </div>
          </div>
          <div className="pl-24"></div>
        </div>
      </section>
    </>
  );
};

export default DataSektoralComponent;
