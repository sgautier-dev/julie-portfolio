import Image from "next/image";
import Link from "next/link";
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

const YOUTUBE_CHANNEL_LIST_API =
	"https://www.googleapis.com/youtube/v3/playlistItems";

export default async function Home() {
	const images: JuliePics[] = await client.fetch(queryPics);
	// console.log('images', images)
	const infos: JulieInfo[] = await client.fetch(queryInfo);

	const firstImage = images.find((element) => element.title === "first")!;
	const secondImage = images.find((element) => element.title === "second")!;
	const thirdImage = images.find((element) => element.title === "third")!;
	// console.log("third image", thirdImage);
	const bio = infos.find((element) => element.title === "Bio")!;
	// console.log("bio", bio);
	const work = infos.find((element) => element.title === "Work")!;
	// console.log("work", work);

	const res = await fetch(
		`${YOUTUBE_CHANNEL_LIST_API}?part=snippet&playlistId=PLxQXZEx3Eq__Zw_8jiaKqmvPKSU13f3Se&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
	);
	const data = await res.json();
	// console.log("playlistID", data);

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

					<article className="info">
						<Image
							className="z-10 w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
							src={urlFor(bio.image).url()}
							alt="julie gautier bio image"
							width="2000"
							height="2000"
						/>
						<p className="text">{bio.body}</p>
					</article>

					<Image
						className="image"
						src={urlFor(thirdImage.image).url()}
						alt={thirdImage.alt}
						width="4134"
						height="2757"
					/>
					<article className="info">
						<Image
							className="z-10 w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
							src={urlFor(work.image).url()}
							alt="julie gautier work image"
							width="1334"
							height="2000"
						/>
						<p className="text">{work.body}</p>
					</article>

					<div className="relative flex items-center">
						<div
							id="slider"
							className="w-full h-full overflow-x-scroll scroll whitespace-nowrap"
						>
							{data.items.map((item: any) => {
								const { id, snippet = {} } = item;
								const { title, thumbnails = {}, resourceId } = snippet;
								const { medium = {} } = thumbnails;
								return (
									<>
										<Link
											href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
											target="_blank"
											className="inline-block p-2 hover:scale-105 ease-in-out duration-300"
										>
											<Image
												className="z-10 rounded-lg object-cover object-center"
												src={medium.url}
												alt={title}
												width={medium.width}
												height={medium.height}
											/>
										</Link>

										<p>{title}</p>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
