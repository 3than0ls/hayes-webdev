"use client";

import React, { FormEvent, useState } from "react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<null | File>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file === null) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append("file", file, file.name);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <form
      className="w-96 bg-white flex flex-col gap-4 text-black"
      onSubmit={onSubmit}
    >
      <input
        type="file"
        name="file"
        onChange={(e) => {
          setFile(e.target.files?.[0] ?? null);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default FileUpload;
