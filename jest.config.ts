import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "app/**/*.{ts,tsx,js,jsx}",
  //   "components/**/*.{ts,tsx,js,jsx}",
  //   "!**/node_modules/**",
  //   "!**/.next/**",
  // ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
};

// createJestConfig is exported this way toensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
