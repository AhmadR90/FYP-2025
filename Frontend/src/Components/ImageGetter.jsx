import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaTrash } from "react-icons/fa"; // Importing a trash icon from react-icons

const ImageGetter = ({ heading }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]; // Get the first file
    const image = Object.assign(file, { preview: URL.createObjectURL(file) });
    setUploadedFile(image); // Set the uploaded file
  };

  const handleDelete = () => {
    setUploadedFile(null); // Clear the uploaded file
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false, // Allows only one file upload
  });

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">{heading}</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed h-40 ${
          isDragActive ? "border-green-600" : "border-gray-300"
        } rounded-lg p-6 text-center transition-colors duration-200`}
      >
        <input {...getInputProps()} disabled={uploadedFile !== null} />
        {isDragActive ? (
          <p className="text-green-600">Drop your image here...</p>
        ) : (
          <p className="text-gray-600">
            Drag and drop an image here, or{" "}
            <span className="text-green-600 underline cursor-pointer">
              click to upload
            </span>
          </p>
        )}
      </div>

      {uploadedFile && (
        <div className="mt-4 relative group">
          <img
            src={uploadedFile.preview}
            alt={uploadedFile.name}
            className="w-full h-32 object-fill rounded-md"
          />
          <p className="text-sm mt-1 truncate">{uploadedFile.name}</p>
          <button
            onClick={handleDelete}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100" // Show on hover
          >
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};

const DualImageGetter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ImageGetter heading="Check Specie" />
      <ImageGetter heading="Check Disease" />
    </div>
  );
};

export default DualImageGetter;
