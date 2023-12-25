import DetailDataClientComponent from "@/app/components/DetailDataClientComponent";
import DirectStatus from "@/app/inc/DirectStatus";
import React from "react";

const page = ({ params }: { params: { filename: string } }) => {
    const namePage = "Detal Data"
  return (
    <>
    <section className="mt-[70px] pt-[30px] pb-[60px]">
        <div className="max-w-5xl mx-auto">
          <DirectStatus namePage={namePage} />
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <DetailDataClientComponent fileName={params.filename} />
        </div>
      </section>
    </>
  );
};

export default page;
