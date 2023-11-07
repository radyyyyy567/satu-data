import CardDocument from '@/app/inc/CardDocument'
import DirectStatus from '@/app/inc/DirectStatus'
import React from 'react'


const page = () => {
    const tahun = "2019"
    const namePage = `Info grafis ${tahun}`
  return (
    <>
        <section className="mt-[70px] py-[30px] ">
            <div className="max-w-5xl mx-auto">
                <DirectStatus namePage={namePage}/>
            </div>
        </section>
        <section className="py-[30px]">
            <div className="max-w-5xl mx-auto">
                <div className="text-[36px]">
                    Data Infografis Tahun {tahun}
                </div>
                <h2 className="">
                    Publikasi Infografis Dinas Komunikasi dan Informatika Kota Batam pada Tahun {tahun}.
                </h2>
                <div className="mt-4">
                    26 posts 
                </div>
            </div>
        </section>
        <section className="py-[60px]">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                    <CardDocument />  
                    <CardDocument />  
                    <CardDocument />  
                    <CardDocument />  
                    <CardDocument />  
                </div>
            </div>
        </section>
    </>
  )
}

export default page