import { footerItem, footerLogo } from "@constants";
import { logo } from "@public";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Footer = () => {
	return (
		<section
			className="w-full py-16"
			id="help">
			<div className="w-full flex items-center flex-wrap gap-8 justify-between py-6 md:px-12 p-0 rounded-[0.625rem] shadow-lg mb-20">
				<div className="">
					<h1 className="text-[#0B132A] text-[2.185rem] font-medium leading-snug mb-2">
						Subscribe Now for <br className="md:flex hidden" />
						Get Special Features!
					</h1>
					<p className="text-[#4F5665] text-[1rem] font-normal leading-8">
						Let&apos;s subscribe with us and find the fun.
					</p>
				</div>
				<div className="">
					<Button
						title={"Subscribe Now"}
						className={
							"text-[#fff] text-[1rem] font-bold leading-6 bg-[#F53838] py-3 px-12 rounded-[0.625rem] hover:shadow-xl transition-shadow"
						}
						href={"/"}
					/>
				</div>
			</div>
			<div className="w-full flex justify-between md:flex-row flex-col gap-8">
				<div className="flex-1 w-full">
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
					<p className="text-[#4F5665] text-[1rem] font-normal leading-[2rem] my-8">
						<span className="text-[#4F5665] text-[1rem] font-medium leading-[2rem]">
							LaslesVPN{" "}
						</span>
						is a private virtual network that <br />
						has unique features and has high security.
					</p>
					<div className="">
						<div className="flex">
							{footerLogo.map((item) => (
								<Link
									href={item.link}
									key={item.id}
									className="">
									<Image
										src={item.img}
										alt={item.img}
										className="w-[50px] h-[50px] object-cover"
									/>
								</Link>
							))}
						</div>
						<div className="">
							<p className="text-[#AFB5C0] text-[1rem] font-normal leading-8">
								©2020Lasles
								<span className="text-[#AFB5C0] text-[1rem] font-normal leading-8">
									VPN
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-1 justify-between flex-wrap">
					{footerItem.map((item) => (
						<div
							className="flex flex-col"
							key={item.id}>
							<h1 className="text-[#0B132A] text-[1.125rem] font-medium leading-8 mb-3">
								{item.title}
							</h1>
							{item.links.map((item, index) => (
								<Link
									key={index}
									className="text-[#4F5665] text-[1rem] font-normal leading-8 my-2"
									href={item.link}>
									{item.link}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
