import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/24/solid";
import DirectStatus from "../inc/DirectStatus";
import "../globals.css";
import ListDataPost from "../components/ListDataPost";


const page = () => {
  const namePage = "Data";
  
  return (
    <>
      <section className="mt-[70px] py-[30px]">
        <div className="max-w-5xl mx-auto">
          <DirectStatus namePage={namePage} />
        </div>
      </section>
      <section className="pb-[60px]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 font-semibold">
              <button className="focus:outline-none flex text-blue-500 items-center space-x-2 py-2 w-full justify-between">
                <div>Kategori / Bidang</div>
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              <button className="focus:outline-none flex text-blue-500 items-center space-x-2 py-2 w-full justify-between">
                <div>Periode</div>
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              <button className="focus:outline-none flex text-blue-500 items-center space-x-2 py-2 w-full justify-between">
                <div>Wilayah</div>
                <ChevronDownIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="col-span-3">
              <div>
                <h1 className="text-[36px]">Semua Data</h1>
                <h2 className="">
                  Semua data yang terdaftar pada Satu Data Kabupaten Pelalawan.
                </h2>
              </div>
              <div className="border rounded-[5px] mt-8">
                <button className="flex items-center text-blue-500 focus:outline-none w-full space-x-2 p-4">
                    <FunnelIcon className="w-6 h-6"/>
                    <div className="font-semibold">
                        Filter Data
                    </div>
                </button>
              </div>
              <div className="mt-4">
                <ListDataPost />
              </div>
            </div>
          </div>   
        </div>
      </section>
    </>
  );
};

export default page;
