"use client"
import { logoKominfo, logoPemkabPelalawan } from "@/app/img"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"


const RegistComponent = () => {
    const router = useRouter();


    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        role: ""
    })
    const [ buttonDisabled, setButtonDisabled ] = useState(true)
     
    const onSignup = async () => {
    }
    
    useEffect(() => {
        if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0 && user.role.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }, [user])
    
  return (
    <div className="bg-white rounded-xl p-10 shadow divide-y-4 space-y-10 divide-red-400">
          <div className="flex space-x-3 justify-center">
            <Image loading="lazy" src={logoPemkabPelalawan} alt="logo-satu-data.png" height={40} />
            <div className="bg-red-300 w-[1px] h-[38px]"></div>
            <Image loading="lazy"
              src={logoKominfo}
              alt="logo-satu-data-indonesia.png"
              height={40}
            />
          </div>
          <div className="py-4 space-y-4">
            <div className="space-y-1">
              <label htmlFor="username" className="text-gray-500 text-[12px]">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({
                    ...user, username: e.target.value
                })}
                placeholder="Masukkan Username disini"
                className="w-full rounded-[5px] focus:outline-red-500 outline-offset-4 border px-4 py-3 text-[14px]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-gray-500 text-[12px]">
                Email
              </label>
              <input
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({
                    ...user, email: e.target.value
                })}
                placeholder="Masukkan Username disini"
                className="w-full rounded-[5px] focus:outline-red-500 outline-offset-4 border px-4 py-3 text-[14px]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="text-gray-500 text-[12px]">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({
                    ...user, password: e.target.value
                })}
                placeholder="Masukkan Password disini"
                className="w-full rounded-[5px] focus:outline-red-500 outline-offset-4 border px-4 py-3 text-[14px]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="role" className="text-gray-500 text-[12px]">
                OPD
              </label>
              <input
                id="role"
                type="text"
                placeholder="Masukkan Nama OPD"
                value={user.role}
                onChange={(e) => setUser({
                    ...user, role: e.target.value
                })}
                className="w-full rounded-[5px] focus:outline-red-500 outline-offset-4 border px-4 py-3 text-[14px]"
              />
            </div>
            <button className={`block w-full rounded-[5px] ${buttonDisabled ? "bg-gray-500" : "active:bg-red-700 bg-red-500"}  px-4 py-3 text-white font-semibold text-center`} disabled={buttonDisabled}>
              Daftar
            </button>
          </div>
        </div>
  )
}

export default RegistComponent