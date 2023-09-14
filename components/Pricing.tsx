import { pricingItem } from "@constants";
import Image from "next/image";
import Button from "./Button";
const Pricing: React.FC = () => {
	return (
		<section
			className="w-full py-16"
			id="pricing">
			<div className="flex justify-center md:items-center flex-col mb-5">
				<h1 className="text-[#0B132A] lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-medium lg:leading-[5.125rem] md:leading-[3.5rem] mb-4">
					Choose Your Plan
				</h1>
				<p className="text-[#4F5665] text-[1rem] font-normal leading-7 mb-4 md:text-center">
					Let&apos;s choose the package that is best for you and explore it
					happily and <br /> cheerfully.
				</p>
			</div>
			<div className="w-full flex md:flex-row flex-col items-center justify-center gap-x-20 gap-y-10">
				{pricingItem.map((item) => (
					<div
						className="flex w-full items-center justify-center flex-col p-16 border-2 gap-8 border-[#DDDDDD] rounded-[0.625rem] h-[660px]"
						key={item.id}>
						<div className="">
							<Image
								src={item.img}
								className="w-[150px] h-[150px] object-cover"
								alt={item.title}
								width={400}
								height={800}
							/>

							<h1 className="text-center mt-5 text-[1.25rem] font-normal leading-8">
								{item.title}
							</h1>
						</div>
						<div className="mt-3">
							{item.titles?.map((item, i) => (
								<div
									className="flex justify-start items-center gap-x-2"
									key={i}>
									<Image
										src={item.img}
										alt={item.para}
										width={400}
										height={800}
										className="w-[30px] h-[30px]"
									/>
									<p className="text-[#4F5665] text-[0.875rem] font-normal leading-8 mt-2">
										{item.para}
									</p>
								</div>
							))}
						</div>
						<div className="mt-6">
							<h1 className="text-center mb-5 text-[#0B132A] text-2xl font-bold">
								{item.price}
								<span className="text-[#4F5665] font-normal">{item.month}</span>
							</h1>
							<Button
								href={"/"}
								title={"Select"}
								className={`${item.class} px-12`}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Pricing;
