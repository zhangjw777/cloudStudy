// 项目配置页面
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

const CWD = process.cwd();

//配置参考 https://vitejs.dev/config/
export default defineConfig((mode) => {
	const { VITE_BASE_URL } = loadEnv(mode, CWD);
	return {
		base: "./",
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		plugins: [vue(), vueJsx(), svgLoader()],
		// server:{
		//   port: 8081
		// }
		server: {
			port: 18081,
			host: "0.0.0.0",
			proxy: {
				"/api": {
					target: "http://api.CloudCourse.com", // 目标接口地址
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
	};
});
