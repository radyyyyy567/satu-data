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
          <div className="space-y-6 lg:space-y-10 mt-4 lg:mt-2 col-span-3">
            <div className="font-bold">Tautan</div>
            <div>
              <ul className="text-[16px] space-y-5">
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-red-500 "
                  >
                    data.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-red-500 "
                  >
                    kabpelalawan.bps.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-red-500 "
                  >
                    siependa.pelalawan.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-red-500 "
                  >
                    pddikti.kemdikbud.go.id
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:space-y-10 lg:mt-2 col-span-3">
            <div className="font-bold opacity-0">Tautan</div>
            <div>
              <ul className="text-[16px] space-y-5">
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-red-500 "
                  >
                    dapo.kemdikbud.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-red-500 "
                  >
                    emispendis.kemenag.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-red-500 "
                  >
                    satudata.kemnaker.go.id
                  </a>
                </li>
              </ul>
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
