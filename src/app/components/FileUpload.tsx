"use client";

import React, { FormEvent, useState } from "react";

type FileUploadProps = {
  onStart: () => void;
  onFinish: (out: { stdout: string; stderr: string }) => void;
};

const FileUpload = ({ onStart, onFinish }: FileUploadProps) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text === "") {
      setError("Must select a file.");
      return;
    }

    onStart();
    const response = await fetch(
      "https://lupj0fjfj5.execute-api.us-west-2.amazonaws.com/Dev/",
      {
        headers: {
          "Content-Type": "text/plain",
        },
        method: "POST",
        body: text,
      }
    );
    const { out } = await response.json();
    onFinish(out);
  };

  return (
    <div className="w-full h-full flex flex-col gap-2 bg-slate-300 p-4">
      <form
        className="flex justify-between items-center h-10"
        onSubmit={onSubmit}
      >
        <input
          className="file:px-2 file:py-1 file:mr-5 file:border file:border-black file:bg-white"
          type="file"
          name="file"
          onChange={async (e) => {
            setError("");
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              if (file.size > 1000000) {
                setError("File size is too big; maximum of 1MB.");
              } else {
                setText(await file.text());
              }
            } else {
              setText("");
            }
          }}
        />
        <button
          className="px-2 py-1 border border-black bg-white"
          type="submit"
        >
          submit
        </button>
      </form>
      <pre className="bg-white p-2 h-full overflow-auto">
        {text ? (
          text
        ) : (
          <span className="italic text-gray-500">
            Uploaded file text will appear here...
          </span>
        )}
      </pre>
      {error && <span className="text-red-500 bg-white p-1">*{error}</span>}
    </div>
  );
};

export default FileUpload;
