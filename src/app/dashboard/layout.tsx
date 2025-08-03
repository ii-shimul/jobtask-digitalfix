import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen bg-gray-800">
			<Topbar />
			<div className="flex">
				<Sidebar />
				<main className="flex-1 p-6 bg-gray-800 text-gray-100">{children}</main>
			</div>
		</div>
	);
}
