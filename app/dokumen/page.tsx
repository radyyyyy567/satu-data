import Image from "next/image"
import { dokumen } from "../img"
import DirectStatus from "../inc/DirectStatus"
import Category from "../inc/Category"
import CardDocument from "../inc/CardDocument"

const page = () => {
    const namePage = "Dokumen"
  return (
    <>
        <section className="mt-[70px] py[30px] ">
            <div className="max-w-5xl mx-auto">
                <DirectStatus namePage={namePage}/>
            </div>
        </section>
        <section className="py-[60px]">
            <div className="max-w-5xl mx-auto">
                <div className="text-[36px]">
                    Semua Dokumen
                </div>
                <h2 className="">
                    Semua Dokumen Publikasi Dinas Komunikasi dan Informatika Kota Batam.
                </h2>
                <div className="mt-4">
                    19 data 
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