"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import FileDownloadComponent from "@/app/admin/components/FileDownloadComponent";

interface FileDetailDataClientComponentProps {
  id: string;
}

const DetailDataClientComponent: React.FC<FileDetailDataClientComponentProps> = ({
  id,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataDetail, setDataDetail] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First, fetch data from '/api/file/{id}'
        const fileResponse = await axios.get(`/api/file/${id}`);
        const dataPost = fileResponse.data.getDataPostById;
        const fileName = dataPost.filename;
        setDataDetail(dataPost);
        console.log(dataDetail);
        // Next, use the filename to fetch data from 'http://localhost:5000/products/{filename}'
        const productsResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${fileName}`
        );
        const rawData = productsResponse.data.data;

        const extractedData = rawData.map((entry: any) => {
          return entry.hasOwnProperty("data") ? entry.data : entry;
        });

        setData(extractedData);

        if (extractedData.length > 0) {
          const keys = Object.keys(extractedData[0]);

          const generatedColumns = [
            ...keys.map((key) => ({
              name: <div>{key}</div>,
              selector: (row: any) => key,
              sortable: true,
              style: { overflowWrap: "break-word" },
              cell: (row: any) => <div>{row[key]}</div>,
            })),
          ];

          setColumns(generatedColumns);
        }

        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, dataDetail]);

  return (
    <div className="px-8 pb-8 w-full bg-white overflow-auto space-y-4 rounded-b-lg">
      <h1 className="text-2xl font-semibold">Komponen Data</h1>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex">
            <span className="py-2 px-4 bg-blue-500 space-x-2 flex items-center text-white font-semibold h-[40px] rounded">
              <ArrowDownCircleIcon className="w-5 h-5" />
              <FileDownloadComponent
                  fileName={dataDetail.fileName}
                  title={dataDetail.title}
                />
            </span>
          </div>
          <div className="table-container">
            <DataTable
              className=""
              columns={columns}
              data={data}
              highlightOnHover
              pagination
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: "blue",
                    color: "white",
                    fontWeight: "700",
                    borderRight: "1px solid white",
                  },
                },
                cells: {
                  style: {
                    borderRight: "1px solid rgba(0,0,0,.12)",
                    textOverflow: "unset",
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailDataClientComponent;
