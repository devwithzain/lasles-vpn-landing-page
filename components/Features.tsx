import Image from "next/image";
import { illustration2 } from "@public";
import { featuresItem } from "@constants";
const Features: React.FC = () => {
	return (
		<section
			className="w-full py-16"
			id="features">
			<div className="w-full flex items-center justify-center md:flex-row flex-col-reverse md:gap-40 gap-8">
				<div className="w-full flex-1">
					<Image
						src={illustration2}
						className="w-full h-full"
						alt="illustration"
						width={400}
						height={800}
					/>
				</div>
				<div className="w-full flex-1">
					<h1 className="text-[#0B132A] lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-medium lg:leading-[5.125rem] md:leading-[3.5rem] mb-4">
						We Provide Many <br /> Features You Can Use
					</h1>
					<p className="text-[#4F5665] text-[1rem] font-normal leading-7 mb-4">
						You can explore the features that we provide with fun
						<br className="md:flex hidden" /> and have their own functions each
						feature.
					</p>
					{featuresItem.map((item) => (
						<div
							className="flex items-center gap-x-3 mt-3"
							key={item.id}>
							<Image
								src={item.img}
								alt={item.title}
								width={400}
								height={800}
								className="w-[30px] h-[30px] object-cover"
							/>
							<p className="text-[#4F5665] text-[0.875rem] font-normal leading-8 mt-2    ">
								{item.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
