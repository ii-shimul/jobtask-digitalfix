import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["placehold.net", "via.placeholder.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "via.placeholder.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
