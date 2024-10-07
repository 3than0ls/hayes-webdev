"use server";

import { NextRequest, NextResponse } from "next/server";
import { exec } from "node:child_process";
import { dir } from "node:console";
import * as fs from "node:fs/promises";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  const data = await file.text();

  // const fName = "temp";
  // const fPath = `./${fName}.txt`;

  // console.log("body", data);

  // console.log("writing to file");
  // await fs.writeFile(fPath, data);

  // // console.log(await fs.readdir("./backend"));
  // const command = `bash "./backend/backend.sh" ${fPath}`;
  // // const command = 'echo "The \\$HOME variable is $HOME"';
  // exec(command, (e, stdout, stderr) => {
  //   if (e) {
  //     console.error("ERROR", e);
  //     return;
  //   }
  //   console.log("STDOUT", stdout);
  //   console.error("STDERR", stderr);
  // });

  // const out = (await fs.readFile(fPath)).toString();
  // console.log("reading from file:", out);

  return NextResponse.json("valid", { status: 200 });
}
