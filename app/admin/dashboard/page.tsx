import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { cookies } from 'next/headers'

const page = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <div className="h-screen pt-[210px] px-4 pb-4 -mt-[210px] w-full space-y-6">
        <section className="pt-4">
          <div className="text-xl font-bold">
            Halo, {session?.user.username}
          </div>
          <div className="text-sm">
            Ini adalah Halaman Dashboard Admin
          </div>
        </section>
        <section className="text-6xl bg-red-200 w-full h-full flex items-center justify-between text-red-500 font-bold text-center rounded border-4 border-red-500 border-dashed">
          <div className="text-center w-full">
            PENGEMBANGAN
          </div>
          
        </section>
    </div>
  )
}

export default page 