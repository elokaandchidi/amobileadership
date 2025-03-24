import React, { useState } from 'react';
import { FaAngleDown, FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

type PaginationData={
    currentPage: number,
    pageSize: number,
    dataLength: number,
    totalPages: number,
    onPageChange: (newValue: number) => void,
    onPageSizeChange: (newValue: number) => void,
}

const Pagination = ({ currentPage, totalPages, dataLength, pageSize, onPageChange, onPageSizeChange }: PaginationData) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='flex flex-col gap-10 justify-center w-full'>
      <div className='flex flex-row items-center justify-center gap-3'>
        <div className=''>
          Showing {dataLength} out of {pageSize}
        </div>
        <div className='relative w-[4rem] gap-3 h-8 flex flex-row items-center justify-center border'>
          {pageSize}
          <FaAngleDown className="cursor-pointer" onClick={() => setIsDropdown(!isDropdown)}/>
          <div className={`${isDropdown ? '' : 'hidden' } absolute mb-[10rem] border w-full items-center flex flex-col`}>
            <span className='cursor-pointer hover:bg-black hover:text-white w-full text-center' onClick={()=> [onPageSizeChange(5), setIsDropdown(!isDropdown)]} >5</span>
            <span className='cursor-pointer hover:bg-black hover:text-white w-full text-center' onClick={()=> [onPageSizeChange(10), setIsDropdown(!isDropdown)]} >10</span>
            <span className='cursor-pointer hover:bg-black hover:text-white w-full text-center' onClick={()=> [onPageSizeChange(20), setIsDropdown(!isDropdown)]} >20</span>
            <span className='cursor-pointer hover:bg-black hover:text-white w-full text-center' onClick={()=> [onPageSizeChange(30), setIsDropdown(!isDropdown)]} >30</span>
            <span className='cursor-pointer hover:bg-black hover:text-white w-full text-center' onClick={()=> [onPageSizeChange(40), setIsDropdown(!isDropdown)]} >40</span>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center gap-4 w-full'>
        <div onClick={() => onPageChange(currentPage-1)} className={`${currentPage === 1 ? 'hidden' : '' } flex flex-row items-center justify-center gap-2 cursor-pointer`}>
          <FaArrowLeftLong />
          Previous Page
        </div>
        <div className='flex flex-row items-center gap-1'>
          {pages.map((page) => (
            <button className={`${page === currentPage ? '' : 'underline'} `} key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>
              {page}
            </button>
          ))}
        </div> 
        <div onClick={() => onPageChange(currentPage+1)} className={`${currentPage === totalPages ? 'hidden' : '' } flex flex-row items-center justify-center gap-2 cursor-pointer`}>
          <span className="underline">Next Page</span>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default Pagination;