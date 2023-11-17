import { BuildingOffice2Icon } from '@heroicons/react/24/solid'
import React from 'react'

const CardCategory = () => {
  return (
    <>
    <div className="relative border rounded overflow-hidden-lg p-4 space-y-3">
              <div className="text-red-500  h-10 w-10 flex items-center justify-center rounded-full bg-red-100">
                <BuildingOffice2Icon className="h-6 w-6"/>
              </div>
              <div className="text-[12px] font-semibold">
                Ekonomi & Industri
              </div>
              <a href="#" className="absolute h-full w-full top-0 left-0"></a>
            </div>
    </>
  )
}

export default CardCategory