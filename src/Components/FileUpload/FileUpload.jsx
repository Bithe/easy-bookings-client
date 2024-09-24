import { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      // Call your backend API endpoint to upload files
    },
  });

  // REMOVE THE FILE
  const handleRemoveFile = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  return (
    <div {...getRootProps()}>
      {/* DRAG AND DROP IMAGE/FILE */}
      <div className="pt-4">
        <label className="mb-5 block font-semibold text-[#07074D]">
          Upload File
        </label>

        <div className="mb-2">
          <input type="file" name="file" id="file" className="sr-only" />
          <label className="relative flex p-2 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] text-center">
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                Browse
              </span>
            </div>
          </label>
        </div>

        {/* Check if there are uploaded files to display */}
        {uploadedFiles.length > 0 && (
          <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
            {/* List of uploaded files with remove buttons */}
            <ul>
              {uploadedFiles.map((file) => (
                <li
                  key={file.name}
                  className="flex items-center justify-between p-2 border border-[#E0E0E0] rounded-lg mt-2"
                >
                  <span className="truncate pr-3 text-base text-[#07074D]">
                    {file.name}
                  </span>
                  <button
                    onClick={() => handleRemoveFile(file.name)}
                    className="text-[#07074D]"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
