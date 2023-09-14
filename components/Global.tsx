import { globeItem } from "@constants";
import { map } from "@public";
import Image from "next/image";

const Global: React.FC = () => {
	return (
		<section
			className="w-full py-16"
			id="features">
			<div className="flex justify-center flex-col mb-8">
				<h1 className="text-[#0B132A] md:text-center font-medium leading-[3.125rem] mb-4 lg:text-[3rem] md:text-[2.4rem] text-[2rem]">
					Huge Global Network <br /> of Fast VPN
				</h1>
				<p className="text-[#4F5665] text-[1rem] font-normal leading-7 mb-4 md:text-center">
					See{" "}
					<span className="text-[#4F5665] text-[1rem] font-medium leading-7">
						LaslesVPN
					</span>{" "}
					everywhere to make it easier for you when you move
					<br />
					locations.
				</p>
			</div>
			<div className="md:w-[70%] w-full mx-auto my-12">
				<Image
					src={map}
					alt="map"
					width={400}
					height={80}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="w-full flex items-center flex-wrap gap-10 justify-evenly mt-8">
				{globeItem.map((item) => (
					<Image
						key={item.id}
						src={item.img}
						alt="map"
						width={400}
						height={80}
						className="md:w-[200px] w-[100px] object-cover"
					/>
				))}
			</div>
		</section>
	);
};

export default Global;
