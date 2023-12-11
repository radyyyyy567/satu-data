'use client'

import React from 'react';

interface FileDownloadComponentProps {
  fileName: string;
}

const FileDownloadComponent: React.FC<FileDownloadComponentProps> = ({ fileName }) => {
  const handleDownload = () => {
    // Create a link to the file using the public folder path
    const fileURL = `http://localhost:3000/upload/${fileName}`;
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
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
