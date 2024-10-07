import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-slate-300 p-4 w-full mt-auto text-gray-600 flex gap-4">
      <div>Created by Ethan Chennault</div>
      <div>echennau@uci.edu</div>
      <div>GitHub: </div>
    </div>
  );
};

export default Footer;
