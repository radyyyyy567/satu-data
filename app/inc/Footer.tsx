import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <>
      <section className="py-[60px]">
        <div className="grid grid-cols-12 gap-x-4 max-w-5xl mx-auto">
          <div className="space-y-6 col-span-6">
            <div className="text-[28px] font-bold">
              Sekretariat Satu Data Kabupaten Pelalawan
            </div>
            <div className="text-[12px]">
              JL. Engku Putri No. 1, Kelurahan Tlk. Tering
              <br />
              Kecamatan Batam Kota, Kota Batam Kepulauan Riau
              <br />
              29432
            </div>
            <div className="text-[12px]">
              <span className="font-bold">Telepon: </span>
              {"(0778) 462164"}
              <br />
              <span className="font-bold">Email: </span>
              {"satudata@batam.go.id"}
            </div>
          </div>
          <div className="space-y-10 mt-2 col-span-3">
            <div className="font-bold">Tautan</div>
            <div>
              <ul className="text-[16px] space-y-5">
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-blue-500 "
                  >
                    data.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-blue-500 "
                  >
                    kabpelalawan.bps.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-blue-500 "
                  >
                    siependa.pelalawan.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-blue-500 "
                  >
                    pddikti.kemdikbud.go.id
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-10 mt-2 col-span-3">
            <div className="font-bold opacity-0">Tautan</div>
            <div>
              <ul className="text-[16px] space-y-5">
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-blue-500 "
                  >
                    dapo.kemdikbud.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-blue-500 "
                  >
                    emispendis.kemenag.go.id
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRightIcon className="w-3 h-3"/>
                  <a
                    href="#"
                    className="duration-300 transition hover:text-blue-500 "
                  >
                    satudata.kemnaker.go.id
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px] bg-blue-500 bg-opacity-5">
        <div className="max-w-5xl mx-auto font-light text-[12px]">
          © Hak Cipta Satu Data{" "}
          <span className="font-bold">Kabupaten Pelalawan</span>.
        </div>
      </section>
    </>
  );
};

export default Footer;
