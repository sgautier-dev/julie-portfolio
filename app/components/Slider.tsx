"use client";

import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Slider({ data }: any) {
	const slideLeft = () => {
		const slider = document.getElementById("slider")!;
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		const slider = document.getElementById("slider")!;
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<div className="image mb-1 bg-slate-500 dark:bg-slate-400 h-[2px]"></div>

			<div className="relative image mb-1 flex items-center">
				<MdChevronLeft className="opacity-70 cursor-pointer hover:opacity-100" size={100} onClick={slideLeft} />
				<div
					id="slider"
					className="overflow-x-scroll whitespace-nowrap scroll-smooth flex items-center"
				>
					{data.items.map((item: any) => {
						const { id, snippet = {} } = item;
						const { title, thumbnails = {}, resourceId } = snippet;
						const { medium = {} } = thumbnails;
						return (
							<div key={id}>
								<Link
									href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
									target="_blank"
									className=" w-40 lg:w-52 inline-block p-2 hover:scale-105 ease-in-out duration-300"
								>
									<Image
										className="z-10 rounded-lg object-cover object-center"
										src={medium.url}
										alt={title}
										width={medium.width}
										height={medium.height}
									/>
									{/* <p>{title}</p> */}
								</Link>
							</div>
						);
					})}
				</div>
				<MdChevronRight className="opacity-70 cursor-pointer hover:opacity-100" size={100} onClick={slideRight} />
			</div>

			<div className="image bg-slate-500 dark:bg-slate-400 h-[2px]"></div>
		</>
	);
}
export default Slider;
