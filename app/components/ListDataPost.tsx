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
  useEffect(() => {
    getFileData();
  }, [data]);

  const getFileData = async () => {
    try {
      const response = await axios.get('/api/file');
      setData(response.data.AllDataPost.reverse() || []);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  const columns: any = [
    // ... previous column definitions ...
    {
        name: 'No.',
        selector: (row: any, index: number) => index + 1,
        sortable: true,
        cell: (row: any, index: number) => (
          <div className="w-[10px]">{index + 1}</div>
        ),
        width: "10%"
      },
      {
        name: 'Title',
        selector: 'title',
        sortable: true,
        width: "",
        style: { 'whiteSpace': 'unset' }
      },
      {
        name: 'Uploader Username',
        selector: 'uploader.username',
        sortable: true,
      },
      {
        name: 'Uploader Role',
        selector: 'uploader.role',
        sortable: true,
      },
      {
        name: 'Release Date',
        selector: 'createdAt',
        sortable: true,
        format: (row: FileData) => new Date(row.createdAt).toLocaleDateString(),
      },
      {
        name: 'FileDetail',
        cell: (row: FileData) => (
          <div className='p-2 bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200'>
            {
              <a href={`/data/${row.filename}`}>Detail</a>
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
      <DataTable
        className='max-w-auto '
        columns={columns}
        data={data}
        responsive
        pagination
        highlightOnHover
        customStyles={{
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
    </div>
  );
};

export default ListDataPost;
