// CustomPaginationComponent.tsx
import React from 'react';
import DataTable, { PaginationComponentProps } from 'react-data-table-component';

interface CustomPaginationProps {
  onPageChange: (selectedPage: number) => void;
  totalRows: number;
  paginationTotalRows: number,
  currentPage: number; // Define the currentPage prop
}

const CustomPagination: React.FC<CustomPaginationProps & PaginationComponentProps> = ({
  onPageChange,
  totalRows,
  paginationTotalRows,
  currentPage,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const totalPages = Math.ceil(totalRows / paginationTotalRows);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-button ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return <div className="pagination-container">{renderPagination()}</div>;
};

export default CustomPagination;
