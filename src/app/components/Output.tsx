"use client";

import React from "react";

type OutputProps = {
  outputStdout: string;
  outputStderr: string;
  loading: boolean;
};

const Output = ({ loading, outputStdout, outputStderr }: OutputProps) => {
  let output: React.ReactNode = "";
  if (outputStdout) {
    output = outputStdout;
  } else {
    if (outputStderr) {
      output = <span className="text-red-500 ">{outputStderr}</span>;
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 bg-slate-300 p-4">
      <h1 className="flex items-center h-10 text-xl">Output</h1>
      <pre className="bg-white p-2 h-full overflow-auto">
        {output ? (
          output
        ) : loading ? (
          <span className="text-gray-500 animate-pulse text-3xl">
            Loading...
          </span>
        ) : (
          <span className="italic text-gray-500">
            Output will appear here...
          </span>
        )}
      </pre>
    </div>
  );
};

export default Output;
