import DetailComponent from '@/app/admin/components/DetailComponent';
import React from 'react';

const Page = ({ params }: { params: { filename: string } }) => {
  return (
    <div>
      <DetailComponent fileName={params.filename}/>
    </div>
  );
};

export default Page;