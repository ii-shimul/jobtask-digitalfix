"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Blog {
	id: number;
	title: string;
	body: string;
	userId: number;
}

const Page = () => {
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((blogs: Blog[]) => {
				setBlogs(blogs);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching blogs:", error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading blogs...</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
			<div className="grid gap-6 grid-cols-3">
				{blogs.map((blog) => (
					<div key={blog.id} className="border rounded-lg p-6 shadow-sm">
						<Link href={`/blog/${blog.id}`} className="text-xl font-semibold mb-2">{blog.title}</Link>
						<p className="text-gray-600 mb-2">
							Post ID: {blog.id} | User ID: {blog.userId}
						</p>
						<p className="text-gray-800">{blog.body}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
