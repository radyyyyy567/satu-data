"use client";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const UploadDataComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (
        selectedFile.name.endsWith(".xlsx") ||
        selectedFile.name.endsWith(".xls")
      ) {
        setFile(selectedFile);
      } else {
        alert("Please select an Excel file (.xlsx or .xls)");
      }
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("File:", file); // Log the file state
    console.log("Title:", title); // Log the title state

    if (!file || !title) {
      alert("Please select a file and provide a title.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      const response = await axios.post("/api/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File uploaded successfully!", response.data);
      // Add any further handling or feedback here after successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error, show a message, or perform other actions
    }
  };

  return (
    <div className="p-4">
      <div>
        <div className="font-bold text-2xl">Upload Data</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 pt-8">
        <div>
          <div className="mb-2">Silahkan Masukkan Judul Data</div>
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
        <div className="space-y-2 spacex-x-2">
          <div>Silahkan pilih file data yang ingin di upload</div>
          <label
            htmlFor="file"
            className="inline-block transform bg-green-500 px-4 py-2 font-bold text-white active:scale-95 transition-all duration-200 rounded cursor-pointer"
          >
            Pilih File
          </label>
          <span className="ml-2">
            {file?.name}
          </span>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".xlsx, .xls"
            className="w-full"
            required
            hidden
          />
        </div>
        <button
          type="submit"
          className="ring-2 px-3 py-2 bg-blue-800 text-white rounded-md"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadDataComponent;
