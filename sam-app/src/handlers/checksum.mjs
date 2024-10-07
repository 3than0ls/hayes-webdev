// import { tmp } from "./node_modules/tmp";
import * as fs from "node:fs/promises";
import { exec } from "child_process";
import { promisify } from "node:util";

export const checksumHandler = async (event) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `checkSumHandler only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }

  //   if (event.headers["Content-Type"] !== "text/plain") {
  //     throw new Error(
  //       `checkSumHandler only accepts Content-Type text/plain, you tried: ${event.headers["Content-Type"]}.`
  //     );
  //   }

  const fName = `${new Date().toISOString()}_input`;
  const fPath = `/tmp/${fName}.txt`;

  await fs.writeFile(fPath, event.body || "", (e) => {
    console.log("WRITING BODY ERROR", e);
  });

  const command = `bash ./backend_layer/backend.sh ${fPath}`;
  const out = await promisify(exec)(command);

  //   console.log("STDOUT:", out.stdout);

  const response = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
    },
    statusCode: 200,
    body: JSON.stringify({ out }),
  };

  console.info(
    `Response from:\n${event.path}\nStatusCode: ${response.statusCode}\nBody: ${response.body}`
  );
  return response;
};
