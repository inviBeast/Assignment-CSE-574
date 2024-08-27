"use client";

import React from 'react';

interface File {
  id: string;
  name: string;
  url: string;
  size: number;
  uploadedAt: string;
}

const FileList: React.FC<{ files: File[] }> = ({ files }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {files.map(file => (
        <div 
          key={file.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img 
            src={file.url} 
            alt={file.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 truncate">{file.name}</h2>
            <p className="text-sm text-gray-500 mt-1">Size: {file.size} bytes</p>
            <p className="text-sm text-gray-500 mt-1">Uploaded: {new Date(file.uploadedAt).toLocaleDateString()}</p>
            <a 
              href={file.url} 
              download 
              className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;
