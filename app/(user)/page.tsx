import Image from "next/image";
import { Quicksand } from "@next/font/google";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";

const quicksand = Quicksand({
	subsets: ["latin"],
	// variable: '--font-title'
});

// const query = groq`
//   *[_type=='juliePics'] {
//   ...
// } | order(_createdAt desc)
// `
const queryPics = groq`
  *[_type=='juliePics'] {
  image, alt, title
}`;

const queryInfo = groq`
  *[_type=='julieInfo'] {
  image, body, title
}`;

export default async function Home() {
	const images: JuliePics[] = await client.fetch(queryPics);
	// console.log('images', images)
	const infos: JulieInfo[] = await client.fetch(queryInfo);

	const firstImage = images.find((element) => element.title === "first")!;
	const secondImage = images.find((element) => element.title === "second")!;
	const thirdImage = images.find((element) => element.title === "third")!;
	// console.log("third image", thirdImage);
	const bio = infos.find((element) => element.title === "Bio")!;
	console.log("bio", bio);
	const work = infos.find((element) => element.title === "Work")!;
	console.log("work", work);

	return (
		<>
			<main
				className={`mx-auto border-solid border-2 border-red-600 ${quicksand.className}`}
			>
				<div className="flex flex-col place-items-end">
					<Image
						className="image"
						src={urlFor(firstImage.image).url()}
						alt={firstImage.alt}
						width="2000"
						height="1334"
					/>
					<Image
						className="image"
						src={urlFor(secondImage.image).url()}
						alt={secondImage.alt}
						width="2000"
						height="1334"
					/>

					<div className="info">
						<Image
							className="z-10 w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
							src={urlFor(bio.image).url()}
							alt="julie gautier bio image"
							width="2000"
							height="2000"
						/>
						<p className="text">{bio.body}</p>
					</div>

					<Image
						className="image"
						src={urlFor(thirdImage.image).url()}
						alt={thirdImage.alt}
						width="4134"
						height="2757"
					/>
					<div className="info">
						
						<Image
							className="z-10 w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
							src={urlFor(work.image).url()}
							alt="julie gautier work image"
							width="1334"
							height="2000"
						/>
						<p className="text">{work.body}</p>
					</div>
				</div>
			</main>
		</>
	);
}
