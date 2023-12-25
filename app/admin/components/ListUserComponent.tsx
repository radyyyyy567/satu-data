"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';


const ListUserComponent = () => {
  const [data, setData] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  

  const getUserData = async () => {
    try {
      const response = await axios.get("/api/user");
      setData(response.data.user || []); // Ensure the data is an array or handle other types appropriately
      console.log(response.data.user)
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  const handleDelete = (userId: number) => {
    // Function to handle delete action, based on the userId
    console.log(`Delete user with ID ${userId}`);
  };

  const handleEdit = (userId: number) => {
    // Function to handle edit action, based on the userId
    console.log(`Edit user with ID ${userId}`);
  };

  const customButton = (userId: number) => (
    <div>
      <button
        onClick={() => handleEdit(userId)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(userId)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );


  const columns: any = [
    {
      name: 'Username',
      selector: 'username',
      sortable: true,
    },
    {
      name: 'Role',
      selector: 'role',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row: any) => customButton(row.id), // Assuming 'id' is the user ID
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tabel Akun OPD</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div className='my-4'>
        <a href="/admin/dashboard/user/create" className='inline-block py-2 px-4 bg-green-500 rounded transition transform duration-100 active:bg-green-600 active:scale-95 text-white font-bold'>
          Tambah Akun
        </a>
      </div>
      <DataTable
        className='table border rouneded-[5px]'
        columns={columns}
        data={data}
        responsive
        pagination
        highlightOnHover
        customStyles={{
          head: {
            style: {
              borderRadius: "20px"
            }
          },
          headRow: {
            style: {
              backgroundColor: '#3b82f6', // Background color for the header
              color: 'white', // Text color for better contrast
              borderRadius: "5px 5px 0px 0px"
            },
          },
          // headCells: {
          //   style: {
          //     borderColor: "gray",
          //     borderWidth: "0px 1px 0px 0px",
          //   }
          // },
          cells: {
            style: {
              borderColor: "#e5e7eb",
              borderWidth: "0px 1px 0px 0px"
            }
          }
        }}
      />
    </div>
  );
};

export default ListUserComponent