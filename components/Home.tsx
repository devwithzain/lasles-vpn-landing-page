import Image from "next/image";
import Navbar from "./Navbar";
import { curve, illustration1 } from "@public";
import Button from "./Button";
import { homeIcons } from "@constants";

const Home: React.FC = () => {
	return (
		<div className="w-full min-h-screen pb-16">
			<Navbar />
			<div className="flex md:flex-row flex-col items-center justify-between gap-16 md:py-[5rem] lg:py-[8rem] sm:pt-5">
				<div className="flex-1">
					<h1 className="text-[#0B132A] lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-medium leading-[4rem] md:mb-8 mb-4">
						Want anything to <br className="flex md:hidden" /> be{" "}
						<br className="lg:flex hidden" /> easy with{" "}
						<span className="text-[#0B132A] text-[3rem] md:text-[2.4rem] font-bold leading-[4rem]">
							LaslesVPN.
						</span>
					</h1>
					<p className="text-[#4F5665] text-[1rem] font-normal leading-[2rem] md:mb-8 mb-4">
						Provide a network for all your needs with ease and fun using{" "}
						<span className="text-[#4F5665] text-[1rem] font-medium leading-[2rem]">
							LaslesVPN.
						</span>
						<br className="lg:flex hidden" />
						discover interesting features from us.
					</p>
					<Button
						href={"/"}
						title={"Get started"}
						className={
							"text-[#fff] text-[1rem] font-bold leading-6 bg-[#F53838] py-3 px-8  rounded-[0.625rem]"
						}
					/>
				</div>
				<div className="flex-1 w-full">
					<Image
						src={illustration1}
						alt="illustration"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			<div className="w-full md:flex flex-wrap items-center justify-evenly shadow-lg py-8 hidden">
				{homeIcons.map((item, i) => (
					<>
						<div
							key={item.id}
							className="p-2 w-[250px] flex items-center justify-center  gap-4">
							<div className="bg-[#FFECEC] w-[100px] h-[100px] rounded-full flex items-center justify-center">
								<Image
									src={item.img}
									alt={item.title}
									className="w-full h-[50px]"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h4 className="text-[#0b132a] text-[1.5rem] font-bold leading-7">
									{item.title}
								</h4>
								<p className="text-[#4f5665] text-[1.25rem] font-normal leading-7">
									{item.para}
								</p>
							</div>
						</div>
						{i < 2 && (
							<Image
								src={curve}
								alt="curve"
							/>
						)}
					</>
				))}
			</div>
		</div>
	);
};

export default Home;
