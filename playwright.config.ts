import { defineConfig } from "playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL,
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "npm run dev -- --port 3001",
        port: 3001,
        reuseExistingServer: true,
      },
});
