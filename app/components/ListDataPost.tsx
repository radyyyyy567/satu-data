"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Link from "next/link";
import FileDownloadComponent from "../admin/components/FileDownloadComponent";

interface FileData {
  id: string;
  title: string;
  description: string;
  filename: string;
  cateory: string;
  linkdrive: string;
  dataAt: string;
  uploader: {
    username: string;
    role: string;
  };
  globalIndex: number;
  createdAt: string;
  publish: string;
}

const ListDataPost = () => {
  const [data, setData] = useState<FileData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getFileData();
  }, []); // Removed [data] as a dependency

  const calculateGlobalIndex = (pageIndex: number, indexOnPage: number) => {
    const itemsPerPage = 10; // Adjust based on your pagination settings
    return pageIndex * itemsPerPage + indexOnPage + 1;
  };

  const getFileData = async () => {
    try {
      const response = await axios.get("/api/publish");
      const updatedData = response.data.allPublishDataPost.map((item: FileData, index: number) => ({
        ...item,
        globalIndex: index + 1,
      }));
      setData(updatedData || []);
      setLoading(false);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };

  const columns: any = [
    {
      name: <div>No.</div>,
      selector: (row: FileData) => row.globalIndex,
      sortable: true,
      cell: (row: FileData) => <div>{row.globalIndex}</div>,
      width: "5%",
    },
    {
      name: "Judul",
      selector: (row: FileData) => row.title,
      sortable: true,
      width: "",
      cell: (row: FileData) => <div>{row.title}</div>,
      wrap: true,
      style: { overflowWrap: "break-word" },
    },
    {
      name: "Organisasi",
      selector: (row: FileData) => row.uploader.role,
      sortable: true,
      width: "",
      cell: (row: FileData) => <div>{row.uploader.role}</div>,
      wrap: true,
      style: { overflowWrap: "break-word" },
    },
    {
      name: <div>Tanggal di Publish</div>,
      selector: (row: FileData) => row.createdAt,
      sortable: true,
      format: (row: FileData) => {
        const date = new Date(row.createdAt);
        const formattedDate = date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        });
        return formattedDate;
      },
    },
    {
      name: <div>Tanggal di Rilis</div>,
      selector: (row: FileData) => row.dataAt,
      sortable: true,
    },
    {
      name: "FileDetail",
      cell: (row: FileData) => (
        <div className="p-2 bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200">
          {<a href={`/data/${row.id}`}>Detail</a>}
        </div>
      ),
      width: "12%",
    },
    {
      name: "Download",
      cell: (row: FileData) => (
        <div className="p-2 bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200">
          {row.linkdrive ? (
            <a href={row.linkdrive} target="_blank">
              Download
            </a>
          ) : (
            <FileDownloadComponent fileName={row.filename} title={row.title} />
          )}
        </div>
      ),
      width: "15%",
    },
  ];

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>{" "}
          {/* You can replace this with your preferred loading indicator */}
        </div>
      ) : (
        <DataTable
          className="max-w-auto border"
          columns={columns}
          data={data}
          responsive
          pagination
          highlightOnHover
          customStyles={{
            pagination: {
              style: {
                border: "1px solid rgba(0,0,0,.12)",
                borderTop: "0px",
              },
            },
            headCells: {
              style: {
                overflowWrap: "break-word",
                backgroundColor: "blue",
                color: "white",
                borderRight: "1px solid white",
                margin: "0",
                padding: "0px 10px",
              },
            },
            cells: {
              style: {
                textOverflow: "unset",
                padding: "0px 10px",
                borderRight: "1px solid rgba(0,0,0,.12)",
              },
            },
            rows: {
              style: {
                textOverflow: "unset",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default ListDataPost;
