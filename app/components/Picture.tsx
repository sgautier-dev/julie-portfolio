"use client";
import React from "react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import animateElementsOnScroll from "@/lib/animateElementsOnScroll";


function Picture({ images }: any) {
	React.useEffect(() => {
		animateElementsOnScroll();
	}, []);

	return (
		<>
			{images.map((image: any) => {
				if (image.title !== "contact") {
					return (
						<Image
							// scroll-animation animate-image-visible
							key={image._id}
							className="image animate-photo"
							src={urlFor(image.image).width(1200).height(800).url()}
							alt={image.alt}
							width={1200}
							height={800}
						/>
					);
				}
			})}
		</>
	);
}
export default Picture;
