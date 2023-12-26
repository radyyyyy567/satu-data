import DetailDataClientComponent from "@/app/components/DetailDataClientComponent";
import DetailDataPostClientComponent from "@/app/components/DetailDataPostClientComponent";
import DirectStatus from "@/app/inc/DirectStatus";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
    const namePage = "Detail Data"
  return (
    <>
    <section className="mt-[70px] pt-[30px] pb-[60px]">
        <div className="max-w-5xl mx-auto">
          <DirectStatus namePage={namePage} />
        </div>
      </section>
      <section className="">
        <div className="max-w-5xl mx-auto">
          <DetailDataPostClientComponent id={params.id} />
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <DetailDataClientComponent id={params.id} />
        </div>
      </section>
    </>
  );
};

export default page;
