import { testimonialsItem } from "@constants";
import { arrowback, arrowforward, star } from "@public";
import Image from "next/image";

const Testimonials = () => {
	return (
		<section
			className="w-full py-16"
			id="testimonials">
			<div className="flex items-center justify-center flex-col mb-5">
				<h1 className="text-[#0B132A]  md:text-center leading-[3.125rem] mb-4 lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-medium ">
					Trusted by Thousands of <br className="md:flex hidden" />
					Happy Customer
				</h1>
				<p className="text-[#4F5665] text-[1rem] font-normal leading-7 mb-4 md:text-center">
					These are the stories of our customers who have joined us with great{" "}
					<br className="md:flex hidden" />
					pleasure when using this crazy feature.
				</p>
			</div>
			<div className="w-full flex items-center justify-evenly my-6 gap-5 flex-wrap md:flex-nowrap">
				{testimonialsItem.map((item) => (
					<div
						className="flex flex-col rounded-[0.625rem] border-2 gap-y-6 border-[#F53838] p-8 w-[500px] h-[250px]"
						key={item.id}>
						<div className="flex items-center justify-between">
							<div className="flex gap-x-4 items-center justify-center">
								<Image
									src={item.img}
									alt={item.title}
								/>
								<div className="flex items-center justify-between gap-x-16">
									<div className="">
										<h4 className="">{item.name}</h4>
										<p>{item.title}</p>
									</div>
								</div>
							</div>
							<div className="flex gap-x-4 items-center justify-center">
								<Image
									src={star}
									alt="star"
								/>
								<p>{item.rating}</p>
							</div>
						</div>
						<div className="flex flex-col">
							<p className="">{item.para}</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex items-center justify-between py-4">
				<div className="flex items-center justify-center gap-x-2">
					<div className="w-10 bg-[#F53838] rounded-lg h-3" />
					<div className="w-4 bg-[#DDE0E4] rounded-full h-3" />
					<div className="w-4 bg-[#DDE0E4] rounded-full h-3" />
					<div className="w-4 bg-[#DDE0E4] rounded-full h-3" />
				</div>
				<div className="flex items-center justify-center gap-x-4">
					<div className="p-2 rounded-full border-2 border-[#f53838]">
						<Image
							src={arrowback}
							alt="back"
							className="w-[20px]"
						/>
					</div>
					<div className="bg-[#F53838] p-2 rounded-full border-2 border-[#f53838]">
						<Image
							src={arrowforward}
							alt="forward"
							className="w-[20px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
