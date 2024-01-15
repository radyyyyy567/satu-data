import DetailDataAdminComponent from "@/app/admin/components/DetailDataAdminComponent";
import DetailDataPostAdminComponent from "@/app/admin/components/DetailDataPostAdminComponent";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
    const namePage = "Detail Data"
  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <DetailDataPostAdminComponent id={params.id} />
        </div>  
      </section>
      <section className="bg-gray-100 pb-[30px]">
        <div className="max-w-5xl mx-auto">
          <DetailDataAdminComponent id={params.id} />
        </div>
      </section>
    </>
  );
};

export default page;
