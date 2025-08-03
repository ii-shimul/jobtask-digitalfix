"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ className }: { className?: string }) => {
	const path = usePathname();
	const [active, setActive] = useState<string | null>(null);

	if (path === "/dashboard") {
		return;
	}

	return (
		<div
			className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href={"/"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Home"
					></MenuItem>
				</Link>
				<MenuItem setActive={setActive} active={active} item="Blog">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/blog">All Blogs</HoveredLink>
					</div>
				</MenuItem>
				<Link href={"/cart"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Cart"
					></MenuItem>
				</Link>
				<Link href={"/dashboard"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Dashboard"
					></MenuItem>
				</Link>
			</Menu>
		</div>
	);
};

export default Navbar;
