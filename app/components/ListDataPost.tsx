"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Link from 'next/link';

interface FileData {
  id: string;
  title: string;
  filename: string;
  uploader: {
    username: string;
    role: string;
  };
  createdAt: string;
  
}

const ListUserComponent = () => {
  const [data, setData] = useState<FileData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    getFileData();
  }, []);

  const getFileData = async () => {
    try {
      const response = await axios.get('/api/file');
      setData(response.data.AllDataPost || []);
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
        width: "5%"
      },
      {
        name: 'Title',
        selector: 'title',
        sortable: true,
      },
      {
        name: 'File Name',
        selector: 'filename',
        sortable: true,
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
        name: 'Details',
        cell: (row: FileData) => (
          <a href={`/data/${row.id}`}>Details</a>
        ),
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
        customStyles={{}}
      />
    </div>
  );
};

export default ListUserComponent;
