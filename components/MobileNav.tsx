"use client";
import { motion } from "framer-motion";
import { navLinks } from "@constants";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center md:hidden text-white">
			<CgMenuRight
				onClick={() => setToggle(true)}
				className="text-3xl cursor-pointer text-black"
			/>
			{toggle && (
				<motion.div
					whileInView={{ x: [300, 0] }}
					transition={{ duration: 0.85, ease: "easeOut" }}
					className="fixed top-0 bottom-0 right-0 z-50 p-10 w-full h-screen flex justify-end items-end 
                            flex-col shadow-md bg-[#F53855]">
					<IoMdClose
						onClick={() => setToggle(false)}
						className="text-3xl cursor-pointer text-black"
					/>
					<ul className="h-full w-full flex justify-center items-center text-left flex-col gap-y-12">
						{navLinks.map((item) => (
							<Link
								href={`#${item.link}`}
								key={item.link}
								onClick={(toggle) => setToggle(!toggle)}
								className="text-[25px] uppercase font-bold font-poppins">
								{item.title}
							</Link>
						))}
					</ul>
				</motion.div>
			)}
		</div>
	);
};

export default MobileNav;
