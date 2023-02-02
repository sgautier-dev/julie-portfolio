import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";
import Picture from "../components/Picture";

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
  image, alt, title, _id
}
`;

const queryInfo = groq`
  *[_type=='julieInfo'] {
  image, body, title
}`;

const YOUTUBE_CHANNEL_LIST_API =
	"https://www.googleapis.com/youtube/v3/playlistItems";

export default async function Home() {
	const images: JuliePics[] = await client.fetch(queryPics);
	// console.log("images", images);
	const infos: JulieInfo[] = await client.fetch(queryInfo);

	// const firstImage = images.find((element) => element.title === "first")!;
	// console.log("firstImage", firstImage);
	const contactImage = images.find((element) => element.title === "contact")!;
	// const bio = infos.find((element) => element.title === "Bio")!;
	const work = infos.find((element) => element.title === "Work")!;

	const res = await fetch(
		`${YOUTUBE_CHANNEL_LIST_API}?part=snippet&playlistId=PLxQXZEx3Eq__Zw_8jiaKqmvPKSU13f3Se&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
	);
	const data = await res.json();

	return (
		<>
			{/* <div className="scroll-tracker h-4 bg-lime-600 fixed inset-44"></div> */}
			<main className="mx-auto scroll-mt-52" id="top">
				<div className="relative overflow-hidden w-full h-0 pb-[75%] md:pb-[56.25%] mb-36 md:mb-44 lg:mb-56">
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

				<div className="flex flex-col place-items-end scroll-mt-40" id="julie">
					<div className="layout text mb-10 m-auto">
						<h2
							className={`text-3xl md:text-4xl lg:text-5xl text-center ${leagueSpartan.className}`}
						>
							LET YOURSELF BE ENCHANTED
						</h2>
						<p className="text-center">
							The wonders of under water storytelling by Julie Gautier will take
							your breath away.
						</p>
					</div>
					<Slider data={data} />
					<p className="layout text">
						By bringing a fascinating and innovating approach to filming under
						water, Julie has single handedly revamped and reshaped underwater
						storytelling. Not only is she in apnea when she is behind the camera
						filming, but here are no special effects. Just pure creativity in
						camera: camera angles, perspective and lighting all make up Julie’s
						unique approach to delivering deep, thought provoking and
						imaginative perspective to the water world. Julie’s vision is to
						enchant us by capturing the minutiae of life so that we take care of
						the world we live in.
					</p>

					<div className="layout grid grid-cols-1 lg:grid-cols-2 gap-10">
						<Picture images={images} />
					</div>

					{/* <article className="info" id="bio">
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
					</article> */}
					<article className="info" id="work">
						<Image
							className="z-10 w-3/4 lg:w-1/2 rounded-lg object-cover object-center"
							src={urlFor(work.image).url()}
							alt="julie gautier work image"
							width="1334"
							height="2000"
						/>
						{/* <h2
								className={`title vertical text-center tracking-tighter ${leagueSpartan.className}`}
							>
								WORK
							</h2> */}
						<p className="text">
							<strong>
								“Touch the heart as when we love something we want to naturally
								look after it”
							</strong>
							<br /> She is committed to creating unforgettable awe inspiring
							artwork to invite people today and for generations to come into
							taking action for a better world. Underwater Cinematographer,
							Julie also choreographs and danses under water in her films and
							for others.
						</p>
					</article>

					<article className="info" id="contact">
						<Image
							className="z-10 w-1/2 lg:w-2/5 rounded-lg object-cover object-center"
							src={urlFor(contactImage.image).url()}
							alt="julie gautier contact image"
							width="467"
							height="640"
						/>
						{/* <SiMinutemailer className="text-6xl" /> */}
						<ContactForm />
					</article>
				</div>
			</main>
		</>
	);
}
