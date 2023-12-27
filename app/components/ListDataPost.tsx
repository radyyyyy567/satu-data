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
      const response = await axios.get('/api/file');
      setData(response.data.AllDataPost.reverse() || []);
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
        width: "8%"
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
        name: <div>Uploader Username</div>,
        selector: 'uploader.username',
        sortable: true,
        style: { overflowWrap: "break-word" },
      },
      {
        name: <div>Produsen Data</div>,
        selector: 'uploader.role',
        sortable: true,
      },
      {
        name: <div>Tanggal DiPost</div>,
        selector: 'createdAt',
        sortable: true,
        format: (row: FileData) => new Date(row.createdAt).toLocaleDateString(),
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
              border: "1px solid black"
            }
          },
          header:{
            style: {
              overflowWrap: "break-word"
            }
          },
          cells: {
            style: {
              textOverflow: "unset"
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
