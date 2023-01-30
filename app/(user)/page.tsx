import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";
import animateElementsOnScroll from "@/lib/animateElementsOnScroll";

import { SiMinutemailer } from "react-icons/si";
import { League_Spartan } from "@next/font/google";

const leagueSpartan = League_Spartan({
	subsets: ["latin"],
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
			<main className="mx-auto scroll-mt-52" id="top">
				{/* <video
					src="https://www.youtube.com/watch?v=gLpjV3drv1I&list=PLxQXZEx3Eq__Zw_8jiaKqmvPKSU13f3Se"
					autoPlay
					muted
					className=""
				></video> */}
				<div className="relative overflow-hidden w-full h-0 pb-[75%] md-pb[56.25%] mb-40">
					<iframe
						width="1280"
						height="720"
						src="https://www.youtube.com/embed/gLpjV3drv1I?controls=0&mute=1&loop=1&playlist=gLpjV3drv1I&autoplay=1&modestbranding=1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="absolute top-0 left-0 w-full h-full m-auto"
					></iframe>
				</div>

				<div className="flex flex-col place-items-end">
					<Image
						className="image animate-image"
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
						<div className="flex flex-row gap-2 ">
							<Image
								className="w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
								src={urlFor(bio.image).url()}
								alt="julie gautier bio image"
								width="2000"
								height="2000"
							/>
							<h2
								className={`title vertical text-center tracking-tighter ${leagueSpartan.className}`}
							>
								BIO
							</h2>
						</div>

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
						<div className="flex flex-row gap-2 ">
							<Image
								className="z-10 w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
								src={urlFor(work.image).url()}
								alt="julie gautier work image"
								width="1334"
								height="2000"
							/>
							<h2
								className={`title vertical text-center tracking-tighter ${leagueSpartan.className}`}
							>
								WORK
							</h2>
						</div>
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
						<div className="flex flex-row items-center gap-2 ">
							<Image
								className="z-10 w-1/2 lg:w-2/5 rounded-lg object-cover object-center"
								src={urlFor(contactImage.image).url()}
								alt="julie gautier contact image"
								width="467"
								height="640"
							/>
							<SiMinutemailer className="text-6xl" />
						</div>
						<ContactForm />
					</article>
				</div>
			</main>
		</>
	);
}
