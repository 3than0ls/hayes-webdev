import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-300 p-4 w-full mt-auto text-gray-600 flex gap-4">
      <div>Created by Ethan Chennault</div>
      <div>echennau@uci.edu</div>
      <a
        className="ml-auto underline"
        href="https://github.com/3than0ls/hayes-webdev"
      >
        GitHub
      </a>
    </div>
  );
};

export default Footer;
