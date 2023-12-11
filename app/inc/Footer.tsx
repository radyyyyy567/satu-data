import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <>
      <section className="py-[60px]">
        <div className="lg:grid grid-cols-12 gap-x-4 max-w-[340px] lg:max-w-5xl mx-auto">
          <div className="space-y-6 col-span-6">
            <div className="text-[28px] font-bold">
              Sekretariat Satu Data Kabupaten Pelalawan
            </div>
            <div className="text-[12px]">
              Komp. Perkantoran Pemerintah Kabupaten Pelalawan, Jalan Sultan Syarif Hasyim No.1, Pangkalan Kerinci, Kabupaten Pelalawan. Riau.
              <br />
              29432
            </div>
            <div className="text-[12px]">
              <span className="font-bold">Telepon: </span>
              +6212 7055 5518
              <br />
              <span className="font-bold">Email: </span>
              info@pelalawankab.go.id
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px] bg-red-500 bg-opacity-5">
        <div className="lg:max-w-5xl max-w-[340px] mx-auto font-light text-[12px]">
          © Hak Cipta Satu Data{" "}
          <span className="font-bold">Kabupaten Pelalawan</span>.
        </div>
      </section>
    </>
  );
};

export default Footer;
