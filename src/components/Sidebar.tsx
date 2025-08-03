import Link from "next/link";
import React from "react";

export default function Sidebar() {
	return (
		<aside className="bg-gray-900 text-gray-100 w-64 min-h-screen p-4 border-r border-gray-700">
			<h2 className="text-xl font-bold mb-4 text-white">Dashboard</h2>
			<nav className="space-y-2">
				<a
					href="#"
					className="block hover:bg-gray-700 px-3 py-2 rounded transition-colors text-gray-300 hover:text-white"
				>
					Home
				</a>
				<a
					href="#"
					className="block hover:bg-gray-700 px-3 py-2 rounded transition-colors text-gray-300 hover:text-white"
				>
					Analytics
				</a>
				<a
					href="#"
					className="block hover:bg-gray-700 px-3 py-2 rounded transition-colors text-gray-300 hover:text-white"
				>
					Settings
				</a>
				<Link
					href="/"
					className="block hover:bg-gray-700 px-3 py-2 rounded transition-colors text-gray-300 hover:text-white"
				>
					← Go back
				</Link>
			</nav>
		</aside>
	);
}
