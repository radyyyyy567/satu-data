import React from "react";
import DirectStatus from "../inc/DirectStatus";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import DataTable from "../inc/DataTable";

const page = () => {
  const namePage = "Standar Data";
  return (
    <>
      <section className="mt-[70px] py-[30px]">
        <div className="max-w-5xl mx-auto">
          <DirectStatus namePage={namePage} />
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center space-x-4">
            <div className="">
              <h1 className="text-[36px]">Daftar Standar Data Statistik Nasional</h1>
              <h2 className="">
                Daftar Standar Data Statistik Nasional lintas instansi yang menjadi rujukan dalam penyelanggaran kegiatan statistik.
              </h2>
            </div>
            <div className="">
                <button className="flex bg-green-800 text-white rounded-[5px] py-2 px-3 items-center space-x-2">
                    <DocumentArrowDownIcon className="h-6 w-6 "/>
                    <div>Exports</div>
                </button>
            </div>
          </div>
          <div className="mt-4">
            <DataTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
