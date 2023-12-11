import { NextResponse } from "next/server";
import prisma from "./../../../../lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
//   try {
//     const datapost = await prisma.dataPost.findMany({
//       where: {
//         uploaderId: params.id,
//       },
//     });

//     if (datapost.length > 0) {
//       const deleteDataPost = await prisma.dataPost.deleteMany({
//         where: {
//           uploaderId: params.id,
//         },
//       });
//     }
//     const user = await prisma.user.delete({
//       where: {
//         id: params.id,
//       },
//     });
//     if (!user) {
//       return NextResponse.json(
//         { message: "User tidak ditemukan!" },
//         { status: 401 }
//       );
//     }
//     return NextResponse.json(
//       { message: "User berhasil dihapus!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json({ message: "User gagal dihapus" + error });
//   }
}