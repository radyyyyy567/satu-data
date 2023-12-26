'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

interface FileDetailDataClientComponentProps {
  id: string;
}

const DetailDataClientComponent: React.FC<FileDetailDataClientComponentProps> = ({ id }) => {
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
        const productsResponse = await axios.get(`http://localhost:5000/products/${fileName}`);
        const rawData = productsResponse.data.data;

        const extractedData = rawData.map((entry: any) => {
          return entry.hasOwnProperty('data') ? entry.data : entry;
        });

        setData(extractedData);

        if (extractedData.length > 0) {
          const keys = Object.keys(extractedData[0]);
          const generatedColumns = keys.map((key: string) => ({
            name: key,
            selector: key,
          }));
          setColumns(generatedColumns);
        }

        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='p-4 w-full overflow-auto space-y-4'>
      <h1 className='text-2xl font-semibold'>Data Detail</h1>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <DataTable
          className="table border rounded"
          columns={columns}
          data={data}
          pagination
          highlightOnHover
        />
      )}
    </div>
  );
};

export default DetailDataClientComponent;
