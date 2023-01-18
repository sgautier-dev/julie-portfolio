import Image from "next/image";
import { Inter } from "@next/font/google";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import urlFor from "../lib/urlFor";

const inter = Inter({ subsets: ["latin"] });

// const query = groq`
//   *[_type=='juliePics'] {
//   ...
// } | order(_createdAt desc)
// `
const query = groq`
  *[_type=='juliePics'] {
  image, alt, title
}
`;

export default async function Home() {
	const images: JuliePics[] = await client.fetch(query);
	// console.log('images', images)
	const firstImage = images.find((element) => element.title === "first")!;
	console.log("first image", firstImage);
	const secondImage = images.find((element) => element.title === "second")!;
	console.log("second image", secondImage);
  const thirdImage = images.find((element) => element.title === "third")!;
	console.log("third image", thirdImage);

	return (
		<>
			<header className="sticky top-0 z-0">
				<h1 className="text-8xl lg:text-9xl">
					Julie <br /> Gautier
				</h1>
			</header>

			<div className="bg-orange-500 z-10">
				<Image
					className="z-10 w-2/3 lg:w-2/3 float-right mr-10 lg:mr-60 mb-20 lg:mb-30 rounded-lg"
					src={urlFor(firstImage.image).url()}
					alt={firstImage.alt}
					width="2000"
					height="1334"
				/>
				<Image
					className="w-2/3 lg:w-2/3 float-right mr-10 lg:mr-60 mb-20 lg:mb-30 rounded-lg"
					src={urlFor(secondImage.image).url()}
					alt={secondImage.alt}
					width="2000"
					height="1334"
				/>
        <Image
					className="w-2/3 lg:w-2/3 float-right mr-10 lg:mr-60 mb-20 lg:mb-30 rounded-lg"
					src={urlFor(thirdImage.image).url()}
					alt={thirdImage.alt}
					width="4134"
					height="2757"
				/>
			</div>
		</>
	);
}
