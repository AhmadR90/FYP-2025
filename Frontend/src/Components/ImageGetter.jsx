import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageGetter = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const images = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setUploadedFiles((prev) => [...prev, ...images]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false, // Allows multiple file uploads
  });

  return (
    <div className="p-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed ${
          isDragActive ? "border-green-600" : "border-gray-300"
        } rounded-lg p-6 text-center transition-colors duration-200`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-green-600">Drop your image(s) here...</p>
        ) : (
          <p className="text-gray-600">
            Drag and drop images here, or{" "}
            <span className="text-green-600 underline cursor-pointer">
              click to upload
            </span>
          </p>
        )}
          {uploadedFiles.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={file.preview}
                alt={file.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <p className="text-xs text-center mt-1 truncate">{file.name}</p>
            </div>
          ))}
        </div>
      )}
      </div>

      {/* Preview Section */}
    
    </div>
  );
};

export default ImageGetter;

