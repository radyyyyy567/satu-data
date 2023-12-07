"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const MakeUserComponent: React.FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
    role: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const resetUserState = () => {
    setUser({
      username: "",
      email: "",
      password: "",
      confPassword: "",
      role: "",
    });
  };
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault( )
    try {
      setLoading(true);
      const reponse = await axios.post("/api/user", user);
      console.log("Pendaftaran Berhasil", reponse.data);
    } catch (error: any) {
      console.log("Pendaftaran gagal");
      setErrorMessage("Pendaftaran gagal " + error.response.data.message);
    } finally {
      resetUserState();
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.role.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="p-4">
      <div>
        <div className="font-bold text-2xl">Tambah User</div>
        <div className="text-red-500">
          {errorMessage}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 pt-4">
        <div className="space-y-1">
          <label htmlFor="username" className="text-gray-500 text-[12px]">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) =>
              setUser({
                ...user,
                username: e.target.value,
              })
            }
            placeholder="Masukkan Username disini"
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
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
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
            placeholder="Masukkan Username disini"
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
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
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
            placeholder="Masukkan Password disini"
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="confpassword" className="text-gray-500 text-[12px]">
            Konfirmasi Password
          </label>
          <input
            id="confpassword"
            type="password"
            value={user.confPassword}
            onChange={(e) =>
              setUser({
                ...user,
                confPassword: e.target.value,
              })
            }
            placeholder="Masukkan Password disini"
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
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
            onChange={(e) =>
              setUser({
                ...user,
                role: e.target.value,
              })
            }
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className={`block w-full rounded-[5px] ${
            buttonDisabled ? "bg-gray-500" : "active:bg-red-700 bg-red-500"
          }  px-4 py-3 text-white font-semibold text-center`}
          disabled={buttonDisabled}
        >
          {loading ? "Proses..." : "Daftar"}
        </button>
      </form>
    </div>
  );
};

export default MakeUserComponent;
