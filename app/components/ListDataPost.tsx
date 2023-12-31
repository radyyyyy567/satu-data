"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Link from 'next/link';
import FileDownloadComponent from '../admin/components/FileDownloadComponent';

interface FileData {
  id: string;
  title: string;
  description: string;
  filename: string;
  cateory: string;
  linkdrive: string;
  uploader: {
    username: string;
    role: string;
  };
  createdAt: string;
  publish: string;
}



const ListDataPost = () => {
  const [data, setData] = useState<FileData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getFileData();
  }, [data]);

  const getFileData = async () => {
    try {
      const response = await axios.get('/api/file/publish');
      setData(response.data.allPublishDataPost.reverse() || []);
      setLoading(false);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
      setLoading(false);
    }
  };

  const columns: any = [
  
    // ... previous column definitions ...
    {
        name: <div>No.</div>,
        selector: (row: any, index: number) => index + 1,
        sortable: true,
        cell: (row: any, index: number) => (
          <div className="w-[20px]">{index + 1}</div>
        ),
        width: "5%",
      },
      {
        name: 'Title',
        selector: 'title',
        sortable: true,
        width: "",
        wrap: true,
        style: { overflowWrap: "break-word" },
      },
      {
        name: 'OPD',
        selector: 'uploader.role',
        sortable: true,
        width: "",
        wrap: true,
        style: { overflowWrap: "break-word" },
      },
      {
        name: <div>Rilis</div>,
        selector: 'createdAt',
        sortable: true,
        format: (row: FileData) => new Date(row.createdAt).toLocaleDateString(),
      },
      {
        name: <div>Publish</div>,
        selector: 'dataAt',
        sortable: true,
      },
      {
        name: 'FileDetail',
        cell: (row: FileData) => (
          <div className='p-2 bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200'>
            {
              <a href={`/data/${row.id}`}>Detail</a>
            }
          </div>
        ),
        width: "12%"
      },
      {
        name: 'Download',
        cell: (row: FileData) => (
          <div className='p-2 bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200'>
            {
              row.linkdrive ? <a href={row.linkdrive} target="_blank" >Download</a> : <FileDownloadComponent fileName={row.filename} title={row.title} />
            }
          </div>
        ),
        width: "15%"
      },
  ];

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center">
        <p>Loading...</p> {/* You can replace this with your preferred loading indicator */}
      </div>
      ) : (
      <DataTable
        className='max-w-auto border'
        columns={columns}
        data={data}
        responsive
        pagination
        highlightOnHover
        customStyles={{
          pagination: {
            style: {
              border: "1px solid rgba(0,0,0,.12)",
              borderTop: "0px"
            }
          },
          headCells:{
            style: {
              overflowWrap: "break-word",
              backgroundColor: "blue",
              color: "white",
              borderRight: "1px solid white",
              margin: "0",
              padding: "0px 10px"
            }
          },
          cells: {
            style: {
              textOverflow: "unset",
              padding: "0px 10px",
              borderRight: "1px solid rgba(0,0,0,.12)"
            }
          },
          rows: {
            style: {
              textOverflow: "unset"
            }
          }
        }}
      />
      )}
    </div>
  );
};

export default ListDataPost;
