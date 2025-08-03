import Image from "next/image";
import React from "react";

export default function Topbar() {
	return (
		<header className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
			<h1 className="text-2xl font-semibold text-white">Welcome Back!</h1>
			<div className="flex items-center space-x-4">
				<span className="text-gray-300">Hello, Bax</span>
				<Image
					src={"https://placehold.net/avatar.png"}
					alt={"Avatar"}
					width={32}
					height={32}
					className="rounded-full border-2 border-gray-600"
				/>
			</div>
		</header>
	);
}
