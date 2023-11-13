import DirectStatus from "../inc/DirectStatus";
import { logoKabupatenPelalawan } from "../img/index";
import Image from "next/image";

const page = () => {
  const namePage = "Tentang Kami";
  return (
    <>
      <section>
        <div className="max-w-5xl mx-auto mt-[70px] py-[30px]">
          <DirectStatus namePage={namePage} />
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-[#444] space-y-6">
            <h1 className="text-[32px] text-center font-semibold">
              Satu Data Kabupaten Pelalawan
            </h1>
            <div className="flex items-center">
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
              <div className="bg-blue-500 h-[3px] w-[40px]"></div>
              <div className="bg-gray-400 h-[1px] w-[40px]"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-[100px] pt-[60px]">
            <div className="flex flex-col justify-center">
              <Image
                src={logoKabupatenPelalawan}
                alt="logo-kabupaten-pelalawan.png"
              />
            </div>
            <div className="space-y-4 col-span-2">
              <p>Bahwa perbaikan tata kelola data oleh Pemerintah Daerah perlu dilakukan dalam mendukung penyelenggaraan Satu Data Indonesia sesuai amanat <a href="/" className="text-blue-500">Peraturan Presiden Nomor 39 Tahun 2019 tentang</a>  Satu Data Indonesia.
              </p>
              <p>Satu Data Kota Batam merupakan bentuk kebijakan tata kelola data di Pemerintah Kota Batam yang bertujuan untuk menciptakan data berkualitas, mudah diakses, terintegrasi dan dapat dibagipakaikan antar Instansi di Kota Batam, Kepulauan Riau. Kebijakan ini tertuang dalam Peraturan Walikota Batam Nomor 47 Tahun 2019 tentang Penyelenggaraan Satu Data Indonesia Tingkat Kota Batam. Melalui Satu Data Kota Batam, seluruh data Kecamatan per-semesternya dapat bermuara di Portal Satu Data Kota Batam (<a href="https://satudata.batam.go.id" className="text-blue-500">https://satudata.batam.go.id</a>). Selanjutnya, terintegrasi ke tingkat Nasional dengan Satu Data Indonesia  (<a href="https://data.go.id/" className="text-blue-500">https://data.go.id/</a>).
              </p>
              <p>Portal Satu Data Kota Batam merupakan portal resmi data terbuka Kota Batam yang dikelola oleh Sekretariat Forum Satu Data Kota Batam dan Dinas Komunikasi dan Informatika Kota Batam. Melalui Portal Satu Data Kota Batam, kami berupaya penuh untuk memperbaiki tata kelola data demi terwujudnya transparansi dan akuntabilitas pemerintah, serta mendukung pembangunan nasional.
              </p>
              <p>Bagian data yang dikategorikan sebagai data publik dalam Portal Satu Data Kota Batam, dapat diakses secara terbuka sebagaimana diatur dalam Undang-undang nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;