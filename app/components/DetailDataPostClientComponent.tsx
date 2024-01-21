"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import FileDownloadComponent from "../admin/components/FileDownloadComponent";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

interface DetailDataPostClientComponent {
  id: string;
}

const DetailDataPostClientComponent: React.FC<
  DetailDataPostClientComponent
> = ({ id }) => {
  const [loading, setLoading] =  useState<boolean>(true);
  const [dataTitle, setDataTitle] = useState<any>(null); // Update 'any' to your data structure
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/file/${id}`);
        const fetchedData = response.data.getDataPostById;
        console.log(fetchedData);
        setDataTitle(fetchedData);
        console.log(response)
        // Convert the timestamp string to a Date object
        const dateObject = new Date(fetchedData.createdAt);

        // Extract year, month, and day
        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it is zero-indexed
        const day = dateObject.getDate().toString().padStart(2, "0");

        // Set the year, month, and day to the state variable
        setDate(`${year}-${month}-${day}`);

        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="pt-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex justify-end">
            <div className="bg-white p-2 rounded-t-lg">
              <span className="py-2 px-4 bg-blue-500 space-x-2 flex items-center text-white font-semibold h-[40px] rounded">
                <ArrowDownCircleIcon className="w-5 h-5" />
                <FileDownloadComponent
                  fileName={dataTitle.filename}
                  title={dataTitle.title}
                />
              </span>
            </div>
          </div>
          <div className="p-8 rounded-tl-lg bg-white ">
            <div className="text-3xl font-semibold mb-8 ">
              {dataTitle.title}
            </div>
            <div className="">
              <div className="border flex">
                <div className="w-6/12">
                  <div className=" border-b border-r px-4 py-2">Judul</div>
                  <div className=" border-b border-r px-4 py-2">
                    Deskripsi
                  </div>
                  <div className=" border-b border-r px-4 py-2">
                    Tanggal di Rilis
                  </div>
                  <div className=" border-b border-r px-4 py-2">
                    Tanggal di Publish
                  </div>
                  <div className=" border-b border-r px-4 py-2">
                    Organisasi
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="border-b bg-white px-4 py-2">
                    {dataTitle.title}
                  </div>
                  <div className="border-b bg-white px-4 py-2">
                    {dataTitle.description}
                  </div>
                  <div className="border-b bg-white px-4 py-2">{dataTitle.dataAt}</div>
                  <div className="border-b bg-white px-4 py-2">{date}</div>
                  <div className="border-b bg-white px-4 py-2">
                    {dataTitle.uploader.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {dataTitle.realfilename && 
            <div className="p-8 rounded-tl-lg bg-white ">
            <div className="text-3xl font-semibold mb-8 ">
              Tautan
            </div>
            <div className="">
              <div className="border flex">
                <div className="w-full">
                  <a href={`${process.env.NEXT_PUBLIC_API_URL}/products/download/real/${dataTitle.realfilename}/${dataTitle.title}`} className="block border-b border-r px-4 py-2 text-blue-500">{dataTitle.title}</a>                  
                </div>
              </div>
            </div>
          </div>
          }
        </>
      )}
    </div>
  );
};

export default DetailDataPostClientComponent;
