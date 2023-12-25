import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { cookies } from 'next/headers'

const page = async () => {
  const cookieStore = cookies()
  const theme = cookieStore.get('next-auth.session-token')
  console.log(theme?.value)
  return (
    <div>
        <section className="p-4">
          <div className="text-xl font-bold">
            Halo, 
          </div>
          <div className="text-sm">
            Ini adalah Halaman Dashboard Admin
          </div>
        </section>
    </div>
  )
}

export default page 