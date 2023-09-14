import { navLinks } from "@constants";
import { logo } from "@public";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";

const Navbar = () => {
	return (
		<div className="w-full py-6">
			<div className="w-full flex items-center justify-between">
				<Link href={"/"}>
					<div className="flex items-center gap-x-2">
						<Image
							src={logo}
							width={32}
							height={32}
							alt="lasles-vpn"
						/>
						<h4 className="text-[#0B132A] text-2xl">LaslesVPN</h4>
					</div>
				</Link>
				<nav className="md:flex hidden">
					<ul className="flex items-center justify-center gap-x-4">
						{navLinks.map((item) => (
							<Link
								key={item.id}
								href={`#${item.link}`}
								className="text-[#4F5665] text-[1rem] font-[400]">
								{item.title}
							</Link>
						))}
					</ul>
				</nav>
				<div className="items-center gap-x-4 md:flex hidden">
					<h4 className="text-[#4F5665] text-[1rem] font-[500]">Sign In</h4>
					<Button
						href={"/"}
						title={"Sign Up"}
						className={
							"px-8 py-2 rounded-[3rem] border-[#F53855] border-[1px] text-[#F53855] font-[500] text-[1rem]"
						}
					/>
				</div>
				<MobileNav />
			</div>
		</div>
	);
};

export default Navbar;
