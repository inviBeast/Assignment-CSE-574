"use client";

import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC<{ refreshFiles: () => void }> = ({ refreshFiles }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    try {
      const response = await axios.post('/api/upload', formData);
      console.log('File uploaded successfully:', response.data);
      refreshFiles();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <div className="mb-4">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="block w-full text-sm text-gray-700
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-100 file:text-indigo-600
          hover:file:bg-indigo-200
          "
        />
      </div>
      <button 
        onClick={handleFileUpload} 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;
