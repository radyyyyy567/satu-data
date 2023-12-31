"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

interface UpdateBookComponent {
  id: string
}

const UpdateBookComponent: React.FC<UpdateBookComponent> = ({id}) => {
  const route = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (
        selectedFile.name.endsWith(".pdf")
      ) {
        setFile(selectedFile);
      } else {
        toast.error("Tolong masukkan File PDF");
      }
    }
  };

  const resetFileState = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = "";
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Create FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("year", year);
  
    // Check if a file is selected
    if (file) {
      formData.append("file", file);
    }
  
    try {
      const response = await axios.patch(`/api/book/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const uploadPercentage = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setProgress(uploadPercentage);
          }
        },
      });
      setLoading(true);
      toast.success("Upload Data Berhasil");
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error("Proses Upload Data Gagal " + error.response.data.message);
    } finally {
      setProgress(0);
      setLoading(false);
      route.push("/admin/dashboard/book");
    }
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/book/${id}`);
      setTitle(response.data.selectedBook.title);
      setYear(response.data.selectedBook.year);
    } catch (error: any) {
      console.log(error);
    }
  };

  fetchData();
}, [id]);

  return (
    <div className="p-4">
      <ToastContainer />
      <div>
        <div className="font-bold text-2xl">Upload Data</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 pt-8">
        <div>
          <div className="mb-2">Silahkan Masukkan Judul Buku</div>
          <input
            type="text"
            name="title"
            placeholder="Judul"
            value={title}
            onChange={handleTitleChange}
            required
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <div>
          <div className="mb-2">Silahkan Masukkan Tahu Buku</div>
          <input
            type="number"
            name="year"
            placeholder="Tahun"
            value={year}
            onChange={handleYearChange}
            required
            className="rounded border ring-outline ring-blue-500 ring-0 focus:ring-2 py-2 px-4 w-full focus:outline-none"
          />
        </div>
        <div className="space-y-2 spacex-x-2">
          <div>Silahkan pilih file buku yang ingin di upload</div>
          <label
            htmlFor="file"
            className="inline-block transform bg-green-500 px-4 py-2 font-bold text-white active:scale-95 transition-all duration-200 rounded cursor-pointer"
          >
            Pilih File
          </label>
          <span className="ml-2">{file?.name}</span>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="w-full"
            hidden
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
          href="/admin/dashboard/data/googledrive"
          className="block w-full rounded-[5px] active:bg-green-700 bg-green-500 px-4 py-3 text-white font-semibold text-center"
        > 
          Upload File Google Drive
        </a>
        </div>
        { progress > 0 && <div className="flex items-center space-x-2">
            <div className="relative rounded-full overflow-hidden w-full items-center space-x-2 h-5 border border-green-500">
              <div
                className="bg-green-500 h-full transform transition-all duration-300"
                style={{
                  width: `${progress}%`
                }}
              ></div>
              <div className="absolute flex items-center h-full justify-center top-0 text-black text-center w-full">
                  <div className="">
                    %{progress}
                  </div>
              </div>
            </div>
          </div>
          }
      </form>
    </div>
  );
};

export default UpdateBookComponent;
