import React from 'react'

interface SettingMenuProps{
    nameCategory: string;
  }

const Category = ({nameCategory}: SettingMenuProps) => {
  return (
    <div className='rounded-full border-gray-500 border text-[12px] font-bold px-2 bg-gray-100 text-gray-500'>
        <a title={nameCategory}>
        {nameCategory}
        </a>
    </div>
  )
}

export default Category