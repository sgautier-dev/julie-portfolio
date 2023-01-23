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
	console.log("infos", infos);
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
						className="images"
						src={urlFor(firstImage.image).url()}
						alt={firstImage.alt}
						width="2000"
						height="1334"
					/>
					<Image
						className="images"
						src={urlFor(secondImage.image).url()}
						alt={secondImage.alt}
						width="2000"
						height="1334"
					/>

					<div className="images border-solid border-3 border-yellow-600 flex flex-col gap-2 lg:flex-row">
						<Image
							className="z-10 w-3/4 lg:w-1/3 rounded-lg"
							src={urlFor(bio.image).url()}
							alt="julie gautier bio image"
							width="2000"
							height="2000"
						/>
						<p className="z-10 bg-slate-50">{bio.body}</p>
					</div>

					<Image
						className="images"
						src={urlFor(thirdImage.image).url()}
						alt={thirdImage.alt}
						width="4134"
						height="2757"
					/>
					<div className="images border-solid border-3 border-yellow-600 flex flex-col gap-2 lg:flex-row">
						<Image
							className="z-10 w-3/4 lg:w-1/3 rounded-lg"
							src={urlFor(work.image).url()}
							alt="julie gautier work image"
							width="1334"
							height="2000"
						/>
						<p className="z-10 bg-slate-50">{work.body}</p>
					</div>
				</div>
			</main>
		</>
	);
}
