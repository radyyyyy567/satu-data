"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Link from 'next/link';
import FileDownloadComponent from './FileDownloadComponent';
import { toast } from 'react-toastify';

interface FileData {
  id: string;
  title: string;
  filename: string;
  category: string;
  description: string;
  linkdrive: string;
  rowIndex: number;
  uploader: {
    username: string;
    role: string;
  };
  createdAt: string;
  
}



const ListBookPostAdmin = () => {
  const [data, setData] = useState<FileData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  useEffect(() => {
    getFileData();
  }, [data]);

  const getFileData = async () => {
    try {
      const response = await axios.get('/api/book');
      setData(response.data.AllDataPost.reverse() || []);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  const deleteFile = async (id: string) => {
    try{
        const deleteFileSelected = await axios.delete('/api/file/' + id);
        getFileData();
        toast.success("Data Berhasil Dihapus")
    } catch (error: any){
        toast.error("Data Gagal Dihapus " + error.response?.data?.message)
    }
  }
  
  
  const columns: any = [
    
    // ... previous column definitions ...
    {
        name: 'No.',
        selector: (row: any, index: number) => index + 1,
        sortable: true,
        cell: (row: any, index: number) => (
          <div className="w-[10px]">{index + 1}</div>
        ),
        width: "8%"
      },
      {
        name: 'Title',
        selector: 'title',
        sortable: true,
        width: ""
      },
      {
        name: 'Pengupload',
        selector: 'uploader.username',
        sortable: true,
        width: "12%"
      },
      {
        name: 'OPD',
        selector: 'uploader.role',
        sortable: true,
        width: "12%"
      },
      {
        name: 'Release Date',
        selector: 'createdAt',
        sortable: true,
        format: (row: FileData) => new Date(row.createdAt).toLocaleDateString(),
        width: "12%"
      },
      {
        name: 'Download',
        cell: (row: FileData) => (
          <div className='p-2 bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200'>
            {
              row.linkdrive ? <a href={row.linkdrive} target="_blank" >Download</a> : <FileDownloadComponent fileName={row.filename} title={row.title}/>
            }
          </div>
        ),
        width: "12%"
      },
      {
        name: 'Actions',
        cell: (row: FileData) => (
          <div className='flex space-x-2'>
            <button className='text-xs p-2 rounded bg-blue-500 text-white font-bold active:scale-95 transfrom transition duration-150'>EDIT</button>
            <button onClick={() => deleteFile(row.id)} className='p-2 text-xs rounded bg-red-500 text-white font-bold active:scale-95 transfrom transition duration-150'>DELETE</button>
          </div>
        )
      }
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
              textOverflow: "unset",
            }
          },
        }}
        
      />
    </div>
  );
};

export default ListBookPostAdmin;
