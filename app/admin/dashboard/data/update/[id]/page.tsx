import UpdateDataComponent from '@/app/admin/components/UpdateDataComponent'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
  return (
    <div>
        <UpdateDataComponent id={params.id}/>
    </div>
  )
}

export default page