"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Blog {
	id: number;
	title: string;
	body: string;
	userId: number;
}

const Page = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const [blog, setBlog] = useState<Blog | null>(null);
	const [loading, setLoading] = useState(true);

	// Fetch the blog
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Blog post not found");
				}
				return response.json();
			})
			.then((blog: Blog) => {
				setBlog(blog);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching blog:", error);
				setLoading(false);
			});
	}, [slug]);

	// Show loading if loading
	if (loading) {
		return (
			<div className="container mx-auto p-4 place-content-center text-center min-w-screen min-h-screen">
				<div className="text-center">Loading blog post...</div>
			</div>
		);
	}

	// Show error message if blog is not found
	if (!blog) {
		return (
			<div className="container mx-auto p-4 place-content-center text-center min-w-screen min-h-screen">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-2">Blog post not found</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto p-4 max-w-4xl mt-36">
			<div className="bg-gray-400 rounded-lg shadow-lg p-8">
				<div className="mb-4">
					<span className="text-sm text-gray-500">
						Post ID: {blog.id} | User ID: {blog.userId}
					</span>
				</div>
				<h1 className="text-4xl font-bold mb-6 text-gray-900">{blog.title}</h1>
				<div className="prose prose-lg max-w-none">
					<p className="text-gray-700 leading-relaxed text-lg">{blog.body}</p>
				</div>
				<div className="mt-8 pt-4 border-t border-gray-200">
					<Link
						href="/blog"
						className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
					>
						← Back to all blog posts
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;
