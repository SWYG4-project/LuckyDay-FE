import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import viteTsconfigPaths from "vite-tsconfig-paths";
// NOTE: src 경로 설정을 위해 추가
// (https://velog.io/@otterji/Vite-typescript-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-path-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0 참고)
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), viteTsconfigPaths()],
  cacheDir: "./.vite",
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
