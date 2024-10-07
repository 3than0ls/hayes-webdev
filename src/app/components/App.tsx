"use client";

import React, { useState } from "react";
import FileUpload from "./FileUpload";
import Output from "./Output";
import Footer from "./Footer";

type Props = {};

const App = (props: Props) => {
  const [outputStdout, setOutputStdout] = useState("");
  const [outputStderr, setOutputStderr] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col bg-white w-full text-black flex-grow gap-4 justify-center items-center p-24">
      <h1 className="text-2xl text-left w-full">
        Hayes&apos; Non-scientific sub-project: &ldquo;web front-ends,
        submission management, web drives&rdquo;{" "}
      </h1>
      <div className="w-full h-full flex flex-col md:flex-row">
        <FileUpload
          onStart={() => {
            setLoading(true);
            setOutputStdout("");
            setOutputStderr("");
          }}
          onFinish={(out) => {
            setLoading(false);
            setOutputStdout(out.stdout);
            setOutputStderr(out.stderr);
          }}
        />
        <Output
          loading={loading}
          outputStdout={outputStdout}
          outputStderr={outputStderr}
        />
      </div>
    </div>
  );
};

export default App;
