import Image from "next/image"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import urlFor from "../../lib/urlFor"
import Slider from "../components/Slider"
import ContactForm from "../components/ContactForm"
import Picture from "../components/Picture"
import "../../lib/scrollAnimations"
// import { SiMinutemailer } from "react-icons/si";
import { League_Spartan } from "next/font/google"

const leagueSpartan = League_Spartan({
	subsets: ["latin"],
})

const queryPics = groq`
  *[_type=='juliePics'] {
  image, alt, title, _id
}
`

const queryInfo = groq`
  *[_type=='julieInfo'] {
  image, body, title
}`

const YOUTUBE_CHANNEL_LIST_API =
	"https://www.googleapis.com/youtube/v3/playlistItems"

const fetchVideos = async () => {
	const res = await fetch(
		`${YOUTUBE_CHANNEL_LIST_API}?part=snippet&playlistId=PLxQXZEx3Eq__Zw_8jiaKqmvPKSU13f3Se&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
	)
	const data = await res.json()

	// Filter out videos with a title indicating they are private
	const publicVideos = data.items.filter(
		(item: any) => item.snippet.title.toLowerCase() !== "private video"
	)

	return publicVideos
}

export default async function Home() {
	const imagesData: Promise<JuliePics[]> = client.fetch(queryPics)
	const infosData: Promise<JulieInfo[]> = client.fetch(queryInfo)

	const [images, infos] = await Promise.all([imagesData, infosData])

	const contactImage = images.find((element) => element.title === "contact")!
	// const bio = infos.find((element) => element.title === "Bio")!;
	const work = infos.find((element) => element.title === "Work")!

	// const res = await fetch(
	// 	`${YOUTUBE_CHANNEL_LIST_API}?part=snippet&playlistId=PLxQXZEx3Eq__Zw_8jiaKqmvPKSU13f3Se&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
	// )

	const data = await fetchVideos()

	return (
		<>
			<main className="mx-auto scroll-mt-52 font-quicksand" id="top">
				<div className="relative overflow-hidden w-full h-0 pb-[75%] md:pb-[56.25%] mb-36">
					<iframe
						width="1280"
						height="720"
						src="https://www.youtube.com/embed/gLpjV3drv1I?controls=0&mute=1&loop=1&playlist=gLpjV3drv1I&autoplay=1&modestbranding=1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="absolute top-0 left-0 w-full h-full m-auto"
					></iframe>
				</div>

				<div className="flex flex-col scroll-mt-40" id="julie">
					<div className="layout text mb-20 ">
						<h2 className={`title text-center  ${leagueSpartan.className}`}>
							Freediver • Film Director • Choreographer • Underwater Dancer
						</h2>
						<p className="text-left">
							Julie Gautier, from Réunion Island, is a leading figure in the
							world of freediving, dance and film. She began by learning to
							dance, before taking up freediving and then film-making. After
							setting two French freediving records, she left the world of sport
							for the world of creation, describing herself as an
							&quot;underwater storyteller&quot;, and gained international
							recognition as a director with Beyoncé&apos;s &quot;Runnin&quot;
							video, which has amassed more than 447 million views. Gautier also
							directed &quot;Free Fall&quot;, a film featuring Guillaume Nery
							diving into Dean&apos;s Blue Hole in the Bahamas, a video which
							has reached 29 million views.
						</p>
					</div>
					<article
						className="layout flex flex-col xl:flex-row gap-2"
						id="conteuse"
					>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/8uR3SMZ7oDY?si=NBOfJwQl3qJcKjlh?modestbranding=1"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="w-full aspect-video rounded-lg z-10"
						></iframe>
						<div className="text">
							<h2 className={`title text-center ${leagueSpartan.className}`}>
								Julie Gautier: an underwater storyteller
							</h2>
							<p className="">
								<br /> In this video from Arte, an European TV channel, discover
								an interview that captures the essence of my journey between two
								worlds - dance and freediving. It&apos;s an expression of my
								heart and my passion, where every gesture underwater becomes
								part of my personal story. This video lets you glimpse a piece
								of my soul, a dance in the silence of the deep, where I feel
								most at home…
							</p>
						</div>
					</article>
					<div className="layout text mb-10 m-auto animate-text">
						<h2
							className={`text-3xl md:text-4xl lg:text-5xl text-center  ${leagueSpartan.className}`}
						>
							LET YOURSELF BE INSPIRED
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
								className={`title vertical text-center ${leagueSpartan.className}`}
							>
								BIO
							</h2>
						</div>

						<p className="text">{bio.body}</p>
					</article> */}
					<article className="info" id="work">
						<Image
							className="w-3/4 lg:w-1/2 image"
							src={urlFor(work.image).width(680).height(1020).url()}
							alt="julie gautier work image"
							width="680"
							height="1020"
						/>
						{/* <h2
								className={`title vertical text-center ${leagueSpartan.className}`}
							>
								WORK
							</h2> */}
						<p className="text animate-text">
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
							className="w-1/2 lg:w-2/5 image"
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
	)
}
