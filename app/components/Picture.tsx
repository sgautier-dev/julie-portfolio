"use client";
import React from "react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";


function Picture({ images }: any) {

	return (
		<>
			{images.map((image: any) => {
				if (image.title !== "contact") {
					return (
						<Image
							key={image._id}
							className="image animate-photo transition ease-out duration-700"
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
