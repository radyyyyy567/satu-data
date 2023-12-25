"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListDataPostAdmin from "./ListDataPostAdmin";
import Category from "@/app/inc/Category";

const UploadLinkDriveComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [progress, setProgress] = useState(0);

  const [dataPost, setDataPost] = useState({
    title: "",
    description: "",
    category: "",
    linkdrive: "",
  });

  const resetDataPostState = () => {
    setDataPost({
      title: "",
      description: "",
      category: "",
      linkdrive: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dataPost.description || !dataPost.title || !dataPost.category || !dataPost.linkdrive) {
      toast.error("Tolong Masukkan Semua data yang diperlukan");
      return;
    }
    try {
      const response = await axios.post("/api/file/drive", dataPost);
      setLoading(true);
      toast.success("Upload Data Berhasil");
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error("Proses Upload Data Gagal " + error.response.data.message);
    } finally {
      setProgress(0);
      setDataPost;
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dataPost.title.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [dataPost]);

  return (
    <div className="p-4">
      <ToastContainer />
      <div>
        <div className="font-bold text-2xl">Upload Link Drive</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 pt-8">
        <div>
          <div className="mb-2">Silahkan Masukkan Judul Data</div>
          <input
            type="text"
            name="title"
            placeholder="Judul"
            value={dataPost.title}
            onChange={(e) =>
                setDataPost({
                  ...dataPost,
                  title: e.target.value,
                })
              }
            required
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <div>
          <div className="mb-2">Silahkan Masukkan Deskripsi Data</div>
          <input
            type="text"
            name="description"
            placeholder="Deskripsi"
            value={dataPost.description}
            onChange={(e) =>
                setDataPost({
                  ...dataPost,
                  description: e.target.value,
                })
              }
                required
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <div>
          <div className="mb-2">Silahkan Masukkan Kategori Data</div>
          <input
            type="text"
            name="kategori"
            placeholder="Kategori"
            value={dataPost.category}
            onChange={(e) =>
                setDataPost({
                  ...dataPost,
                  category: e.target.value,
                })
              }
            required
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <div>
          <div className="mb-2">Silahkan masukkan link drive anda</div>
          <input
            type="text"
            name="cloudFile"
            placeholder="Link File"
            value={dataPost.linkdrive}
            onChange={(e) =>
                setDataPost({
                  ...dataPost,
                 linkdrive: e.target.value,
                })
              }
            required
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="submit"
            className={`block w-full rounded-[5px] ${
              buttonDisabled ? "bg-gray-500" : "active:bg-red-700 bg-red-500"
            }  px-4 py-3 text-white font-semibold text-center`}
            disabled={buttonDisabled}
          >
            {loading ? "Proses..." : "Upload"}
          </button>
          <a
            href="/admin/dashboard/data"
            className="block w-full rounded-[5px] active:bg-green-700 bg-green-500 px-4 py-3 text-white font-semibold text-center"
          >
            Kembali
          </a>
        </div>
        {progress > 0 && (
          <div className="flex items-center space-x-2">
            <div className="relative rounded-full overflow-hidden w-full items-center space-x-2 h-5 border border-green-500">
              <div
                className="bg-green-500 h-full transform transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
              <div className="absolute flex items-center h-full justify-center top-0 text-black text-center w-full">
                <div className="">%{progress}</div>
              </div>
            </div>
          </div>
        )}
      </form>
      <div className="font-bold text-3xl text-gray-700 mt-8 mb-4">
        Tabel Data Post
      </div>
      <ListDataPostAdmin />
    </div>
  );
};

export default UploadLinkDriveComponent;
