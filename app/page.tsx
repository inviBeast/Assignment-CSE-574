"use client";

import React, { useState, useEffect } from 'react';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';

interface File {
  id: string;
  name: string;
  url: string;
  size: number;
  uploadedAt: string;
}

const Home: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const refreshFiles = async () => {
    try {
      const response = await fetch('/api/list');
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  useEffect(() => {
    refreshFiles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="max-w-3xl w-full py-12 px-6">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-yellow-400 text-center mb-12">
          CSE-574: Lab Assignment No. 1
        </h1>
        
        {/* Name and Roll Number */}
        <p className="text-xl text-gray-800 text-center mb-6">
          Name: Ayushman Singh
        </p>
        <p className="text-xl text-gray-800 text-center mb-12">
          Roll Number: 21135040
        </p>

        <FileUpload refreshFiles={refreshFiles} />
        <FileList files={files} />
      </div>
    </div>
  );
};

export default Home;
