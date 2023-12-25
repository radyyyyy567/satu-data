'use client'
import DirectStatus from "../inc/DirectStatus";
import DataSektoralComponent from "../components/DataSektoralComponent";


const page = () => {
    const namePage = "Data Sektoral"
  return (
    <>
      <section className="mt-[70px] py-[30px]">
        <div className="max-w-5xl mx-auto">
          <DirectStatus namePage={namePage} />
        </div>
      </section>
      <DataSektoralComponent />
    </>
  );
};

export default page;
