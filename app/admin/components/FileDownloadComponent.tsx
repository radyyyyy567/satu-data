'use client'

import React from 'react';

interface FileDownloadComponentProps {
  title:  string;
  fileName: string;
}

const FileDownloadComponent: React.FC<FileDownloadComponentProps> = ({ fileName, title }) => {
  const handleDownload = () => {
    // Create a link to the file using the public folder path
    const fileURL = `http://localhost:5000/products/download/${fileName}/${title}`;
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `${title}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download
    </button>
  );
};

export default FileDownloadComponent;