"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

interface FileDetailDataAdminComponentProps {
  id: string;
}

const DetailDataAdminComponent: React.FC<
  FileDetailDataAdminComponentProps
> = ({ id }) => {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First, fetch data from '/api/file/{id}'
        const fileResponse = await axios.get(`/api/file/${id}`);
        const dataPost = fileResponse.data.dataPostById;
        const fileName = dataPost.filename;
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
            
          const generatedColumns = [...keys.map((key) => ({
            name: <div>{key}</div>,
            selector: key,
            sortable: true,
            style: { overflowWrap: "break-word" },
            cell: (row: any) => <div>{row[key]}</div>,
          }))];
        
          setColumns(generatedColumns);
        }

        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-8 w-full bg-white overflow-auto space-y-4 rounded-b-lg">
      <h1 className="text-2xl font-semibold">Komponen Data</h1>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default DetailDataAdminComponent;
