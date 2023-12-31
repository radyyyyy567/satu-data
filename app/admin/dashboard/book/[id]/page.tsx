import UpdateBookComponent from '@/app/admin/components/UpdateBookComponent'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
  return (
    <div>
        <UpdateBookComponent id={params.id}/>
    </div>
  )
}

export default page