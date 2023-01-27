import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";

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
	const fourthImage = images.find((element) => element.title === "fourth")!;
	const contactImage = images.find((element) => element.title === "contact")!;
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
			{/* <div className="scroll-tracker h-4 bg-lime-600 fixed inset-44"></div> */}
			<main
				className="mx-auto scroll-mt-52"
				id="top"
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

					<article className="info" id="bio">
						<Image
							className="w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
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

					<article className="info mb-6" id="work">
						<Image
							className="z-10 w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
							src={urlFor(work.image).url()}
							alt="julie gautier work image"
							width="1334"
							height="2000"
						/>
						<p className="text">{work.body}</p>
					</article>

					<Slider data={data} />

					<Image
						className="image"
						src={urlFor(fourthImage.image).url()}
						alt={fourthImage.alt}
						width="2000"
						height="1333"
					/>

					<article className="info" id="contact">
						<Image
							className="z-10 w-1/2 lg:w-2/5 rounded-lg object-cover object-center"
							src={urlFor(contactImage.image).url()}
							alt="julie gautier contact image"
							width="467"
							height="640"
						/>
						<ContactForm />
					</article>
				</div>
			</main>
		</>
	);
}
