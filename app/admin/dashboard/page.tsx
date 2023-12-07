import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async () => {
  const session = await getServerSession(authOptions);
  
  
  return (
    <div>
        <section className="p-4">
          <div className="text-xl font-bold">
            Halo, {session?.user.username}
          </div>
          <div className="text-sm">
            Ini adalah Halaman Dashboard Admin
          </div>
        </section>
    </div>
  )
}

export default page 