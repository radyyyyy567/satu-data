import Image from "next/image";
import { dokumen } from "../img";
import Category from "./Category";

const CardDocument = () => {
  return (
    <div className="rounded-[5px] border">
      <div className="">
        <Image
          src={dokumen}
          alt="dokumen-1.png"
          className="h-[200px] object-cover"
        />
      </div>
      <div className="p-4">
        <div>
          <h3 className="text-[24px] leading-[1.2]">
            BULETIN STATISTIK SEKTORAL BULAN OKTOBER
          </h3>
        </div>
        <div className="flex flex-wrap">
          <div className="mt-2">
            <Category nameCategory="Infrastruktur" />
          </div>
          <div className="mt-4 text-gray-500 text-[12px]">
            Dipublikasi pada <time dateTime="2023-11-06">November 6, 2023</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDocument;
