"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Link from 'next/link';
import FileDownloadComponent from './FileDownloadComponent';
import { toast } from 'react-toastify';
import DetailComponent from './DetailComponent';

interface FileData {
  id: string;
  title: string;
  filename: string;
  category: string;
  description: string;
  linkdrive: string;
  archive: boolean;
  rowIndex: number;
  dataAt: string;
  uploader: {
    username: string;
    role: string;
  };
  createdAt: string;
  
}



const ListDataPostAdmin = () => {
  const [data, setData] = useState<FileData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  useEffect(() => {
    getFileData();
  }, [data]);

  const publishDataPost = async (id: string) => {
    try {
      const response = await axios.patch(`/api/file/publish/${id}`)
      toast.success("Data berhasil di Publish");
    } catch (error: any) {
      toast.error(error.response.data.message || 'Ada masalah!')
    }
  }

  const archiveDataPost = async (id: string) => {
    try {
      const response = await axios.patch(`/api/file/arsip/${id}`)
      toast.success("Data berhasil di Arsip");
    } catch (error: any) {
      toast.error(error.response.data.message || 'Ada masalah!')
    }
  }

  const getFileData = async () => {
    try {
      const response = await axios.get('/api/file');
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
        width: "5%",
        borderRight: "1px solid rgba(0,0,0,.12)"
      },
      {
        name: 'Data',
        selector: (row: FileData) => row.title,
        sortable: true,
        width: "20%"
      },
      {
        name: 'Pengupload',
        selector: (row: FileData) => row.uploader.username,
        sortable: true,
        width: "10%"
      },
      {
        name: 'Status',
        selector: (row: FileData) => row.archive,
        sortable: true,
        width: "8%",
        cell: (row: FileData) => (
          <div>
            {row.archive ? (
              <div className='bg-yellow-500 p-1 text-white font-semibold rounded'>
                Arsip
              </div>
            ) : (<div className='bg-green-400 p-1 text-white font-semibold rounded'>
            Publik
          </div>)}
          </div>
        ),
      },
      {
        name: 'Organisasi',
        selector: (row: FileData) => row.uploader.role,
        sortable: true,
        width: "10%"
      },
      {
        name: <div>Tanggal di Publish</div>,
        selector: (row: FileData) => row.createdAt,
        sortable: true,
        format: (row: FileData) => {
          const formattedDate = new Date(row.createdAt).toISOString().split('T')[0];
          return formattedDate;
        },
        width: "10%"
      },
      {
        name:  <div>Tanggal di Rilis</div>,
        selector: (row: FileData) => row.dataAt,
        sortable: true,
        width: "10%"
      },
      {
        name: 'File Detail',
        cell: (row: FileData) => (
          <div className='p-2 w-full text-center bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200'>
            {
              <a href={`/admin/dashboard/data/${row.id}`}>Detail</a>
            }
          </div>
        ),
        width: "8%"
      },
      {
        name: 'Download',
        cell: (row: FileData) => (
          <div className='p-2 bg-blue-800 text-white font-semibold rounded active:scale-95 transform transition duration-200 w-full text-center'>
            {
              row.linkdrive ? <a href={row.linkdrive} target="_blank" >Download</a> : <FileDownloadComponent fileName={row.filename} title={row.title} />
            }
          </div>
        ),
        width: "9%"
      },
      {
        name: 'Opsi',
        cell: (row: FileData) => (
          <div className='space-y-2'>
            {!row.archive ? (
              <button onClick={() => archiveDataPost(row.id)} className='block bg-yellow-500 p-2 text-white font-semibold rounded'>
                Arsip
              </button>) : 
            (<button onClick={() => publishDataPost(row.id)} className='block bg-green-400 p-2 text-white font-semibold rounded'>
              Publikasi
            </button>)
            }
            <a href={`data/update/${row.id}`} className='block p-2 text-xs rounded bg-blue-500 text-center text-white font-bold active:scale-95 transfrom transition duration-150'>EDIT</a>
            <button onClick={() => deleteFile(row.id)} className='block p-2 text-xs rounded bg-red-500 text-white font-bold active:scale-95 transfrom transition duration-150'>DELETE</button>
          </div>
        ),
      }
  ];

  return (
    <div className="">
      <DataTable
        className=''
        columns={columns}
        data={data}
        responsive
        pagination
        highlightOnHover
        
        customStyles={{
          table: {
            style: {
              borderLeft: "1px solid rgba(0,0,0,.12)"
            }
          },
          headCells: {
            style: {
              padding: "5px",
              margin: "0px",
              borderRight: "1px solid white",
              backgroundColor: "blue",
              color: "white",
              fontWeight: "700",
              textOverflow: "unset",
              overflowWrap: "break-word"
            }
          },
          cells: {
            style: {
              textOverflow: "unset",
              padding: "5px",
              margin: "0px",
              borderRight: "1px solid rgba(0,0,0,.12)",
              alignItems: "start"
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

export default ListDataPostAdmin;
