'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

interface FileDetailComponentProps {
  fileName: string;
}

const DetailComponent: React.FC<FileDetailComponentProps> = ({ fileName }) => {
  const [data, setData] = useState<any[]>([]); // Use appropriate type for your data
  const [columns, setColumns] = useState<any[]>([]); // Columns for the DataTable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${fileName}`);
        const rawData = response.data.data;

        // Extracting the object part from each entry in the array
        const extractedData = rawData.map((entry: any) => {
          // The entries in the array seem to have an index followed by the object
          return entry.hasOwnProperty('data') ? entry.data : entry;
        });

        setData(extractedData);

        // Generate columns from the keys of the first object in the data array
        if (extractedData.length > 0) {
          const keys = Object.keys(extractedData[0]);
          const generatedColumns = keys.map((key: string) => ({
            name: key,
            selector: key,
          }));
          setColumns(generatedColumns);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fileName]);

  return (
    <div className='p-4'>
      <h1>Data from Data Post</h1>
      <DataTable
        className="table border rounded"
        columns={columns}
        data={data}
        pagination // Enable pagination if needed
        highlightOnHover
        dense
      />
    </div>
  );
};

export default DetailComponent;
