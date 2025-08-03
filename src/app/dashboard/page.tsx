import React from "react";

export default function Dashboard() {
	return (
		<div>
			<h1 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="bg-gray-900 border border-gray-600 p-6 rounded-lg shadow-lg">
					<h3 className="text-lg font-semibold text-white mb-2">Total Users</h3>
					<p className="text-3xl font-bold text-blue-400">1,234</p>
					<p className="text-gray-400 text-sm">+12% from last month</p>
				</div>
				<div className="bg-gray-900 border border-gray-600 p-6 rounded-lg shadow-lg">
					<h3 className="text-lg font-semibold text-white mb-2">Revenue</h3>
					<p className="text-3xl font-bold text-green-400">$45,678</p>
					<p className="text-gray-400 text-sm">+8% from last month</p>
				</div>
				<div className="bg-gray-900 border border-gray-600 p-6 rounded-lg shadow-lg">
					<h3 className="text-lg font-semibold text-white mb-2">Orders</h3>
					<p className="text-3xl font-bold text-purple-400">890</p>
					<p className="text-gray-400 text-sm">+15% from last month</p>
				</div>
			</div>

			<div className="mt-8">
				<h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
				<div className="bg-gray-900 border border-gray-600 rounded-lg shadow-lg">
					<div className="p-6">
						<div className="space-y-4">
							<div className="flex items-center justify-between border-b border-gray-600 pb-4">
								<div>
									<p className="text-white font-medium">New user registered</p>
									<p className="text-gray-400 text-sm">2 minutes ago</p>
								</div>
								<span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
									New
								</span>
							</div>
							<div className="flex items-center justify-between border-b border-gray-600 pb-4">
								<div>
									<p className="text-white font-medium">
										Order #1234 completed
									</p>
									<p className="text-gray-400 text-sm">5 minutes ago</p>
								</div>
								<span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
									Complete
								</span>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<p className="text-white font-medium">Payment received</p>
									<p className="text-gray-400 text-sm">10 minutes ago</p>
								</div>
								<span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
									Success
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
