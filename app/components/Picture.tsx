"use client";
import React from 'react'
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import animateElementsOnScroll from "@/lib/animateElementsOnScroll";



function Picture({ data, width, height }: any) {
	React.useEffect(() => {
		animateElementsOnScroll();
	  }, []);

	return (
		<Image
		// scroll-animation animate-image-visible
			className="image " 
			src={urlFor(data.image).url()}
			alt={data.alt}
			width={width}
			height={height}
		/>
	);
}
export default Picture;
