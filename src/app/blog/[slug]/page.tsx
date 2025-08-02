"use client";

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
	const [error, setError] = useState<string | null>(null);

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
				setError(error.message);
				setLoading(false);
			});
	}, [slug]);

	if (loading) {
		return (
			<div className="container mx-auto p-4">
				<div className="text-center">Loading blog post...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="container mx-auto p-4">
				<div className="text-center text-red-600">
					<h1 className="text-2xl font-bold mb-2">Error</h1>
					<p>{error}</p>
				</div>
			</div>
		);
	}

	if (!blog) {
		return (
			<div className="container mx-auto p-4">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-2">Blog post not found</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto p-4 max-w-4xl">
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
					<a
						href="/blog"
						className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
					>
						← Back to all blog posts
					</a>
				</div>
			</div>
		</div>
	);
};

export default Page;
