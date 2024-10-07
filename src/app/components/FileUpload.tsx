"use client";

import React, { FormEvent, useState } from "react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<null | File>(null);

  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file === null) {
      return;
    }

    const response = await fetch(
      "https://lupj0fjfj5.execute-api.us-west-2.amazonaws.com/Dev/",
      {
        headers: {
          "Content-Type": "text/plain",
        },
        method: "POST",
        body: await file.text(),
      }
    );

    const { stdout, stderror } = (await response.json()).out;
    setResult(stdout);
  };

  return (
    <>
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
      {result && (
        <pre className="p-2 bg-white rounded-sm text-black w-fit mt-4">
          {result}
        </pre>
      )}
    </>
  );
};

export default FileUpload;
