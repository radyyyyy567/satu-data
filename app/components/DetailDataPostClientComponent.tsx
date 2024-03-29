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
  const [loading, setLoading] = useState<boolean>(true);
  const [dataTitle, setDataTitle] = useState<any>(null); // Update 'any' to your data structure
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/file/${id}`);
        const fetchedData = response.data.getDataPostById;
        console.log(fetchedData);
        setDataTitle(fetchedData);
        console.log(response);
        // Convert the timestamp string to a Date object
        const dateObject = new Date(fetchedData.createdAt);

        // Extract year, month, and day
        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it is zero-indexed
        const day = dateObject.getDate().toString().padStart(2, "0");

        // Set the year, month, and day to the state variable
        setDate(`${day}/${month}/${year}`);

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
          <div className="px-8 pt-8 rounded-tl-lg bg-white ">
            <div className="text-3xl font-semibold mb-8 ">
              {dataTitle.title}
            </div>
            <div className="">
              <div className="border divide-y-[1px]">
                <div className="grid grid-cols-2 divide-x-[1px]">
                  <div className="p-2">Judul</div>
                  <div className="p-2">{dataTitle.title}</div>
                </div>
                <div className="grid grid-cols-2 divide-x-[1px]">
                  <div className="p-2">Deskripsi</div>
                  <div className="p-2">
                    {dataTitle.description}
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x-[1px]">
                  <div className="p-2">Tanggal di Rilis</div>
                  <div className="p-2">{dataTitle.dataAt}</div>
                </div>
                <div className="grid grid-cols-2 divide-x-[1px]">
                  <div className="p-2">Tanggal di Publish</div>
                  <div className="p-2">{date}</div>
                </div>
                <div className="grid grid-cols-2 divide-x-[1px]">
                  <div className="p-2">Organisasi</div>
                  <div className="p-2">{dataTitle.uploader.role}</div>
                </div>
              </div>
            </div>
          </div>
          
            <div className="p-8 rounded-tl-lg bg-white ">
              <div className="text-3xl font-semibold mb-4">Tautan</div>
              <div className="">
                <div className="border flex">
                  <div className="w-full">
                  {dataTitle.realfilename ? (
                    <a
                      href={`${process.env.NEXT_PUBLIC_API_URL}/products/download/real/${dataTitle.realfilename}/${dataTitle.title}`}
                      className="block border-b border-r px-4 py-2 text-blue-500"
                    >
                      {dataTitle.title}
                    </a>
                  ) : (
                    <div className="px-4 py-2 text-gray-500">Tidak terdapat tautan</div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          
        </>
      )}
    </div>
  );
};

export default DetailDataPostClientComponent;
