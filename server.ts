// server.ts
import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve(async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  // 1. Handle Clean URL for the Privacy Policy page
  if (url.pathname === "/privacy-policy") {
    return await serveFile(req, "frontend/dist/privacy_policy.html");
  }
  if (url.pathname === "/delete-account") {
    return await serveFile(req, "frontend/dist/delete_account.html");
  }

  // 2. Attempt to serve the exact file requested from the "frontend/dist" folder
  // (e.g., /assets/index-xxx.js, /assets/shutter.mp3)
  const response = await serveDir(req, {
    fsRoot: "frontend/dist",
    quiet: true,
  });

  // 3. SPA Fallback: If the file doesn't exist (e.g., they visit the root "/"),
  // catch the 404 and serve the main camera index.html file instead!
  if (response.status === 404) {
    return await serveFile(req, "frontend/dist/index.html");
  }

  return response;
});
