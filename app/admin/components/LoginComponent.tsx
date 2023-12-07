"use client";
import { logoKominfo, logoPemkabPelalawan } from "@/app/img";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

const LoginComponent = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSignIn = async () => {
    const signInData = await signIn("credentials", {
      email: login.email,
      password: login.password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.push("/admin/dashboard/data");
    }
  };

  useEffect(() => {
    if (login.email.length > 0 && login.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [login]);

  return (
    <div className="bg-white rounded-xl p-10 shadow divide-y-4 space-y-2 divide-red-400">
      <div className="flex space-x-3 justify-center">
        <Image
          loading="lazy"
          src={logoPemkabPelalawan}
          alt="logo-satu-data.png"
          height={40}
        />
        <div className="bg-red-300 w-[1px] h-[38px]"></div>
        <Image
          loading="lazy"
          src={logoKominfo}
          alt="logo-satu-data-indonesia.png"
          height={40}
        />
      </div>
      <div className="py-4 space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="text-gray-500 text-[12px]">
            Email
          </label>
          <input
            id="email"
            type="text"
            value={login.email}
            onChange={(e) =>
              setLogin({
                ...login,
                email: e.target.value,
              })
            }
            placeholder="Masukkan Email disini"
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
            value={login.password}
            onChange={(e) =>
              setLogin({
                ...login,
                password: e.target.value,
              })
            }
            placeholder="Masukkan Password disini"
            className="w-full rounded-[5px] focus:outline-red-500 outline-offset-4 border px-4 py-3 text-[14px]"
          />
        </div>
        <button
          onClick={onSignIn}
          className=" block w-full rounded-[5px] active:bg-red-700 bg-red-500 px-4 py-3 text-white font-semibold text-center"
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
