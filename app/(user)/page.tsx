import Image from "next/image"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import urlFor from "../../lib/urlFor"
import Slider from "../components/Slider"
import ContactForm from "../components/ContactForm"
import Picture from "../components/Picture"
import "../../lib/scrollAnimations"
import nikonZ8 from "@/images/NikonZ8.png"
import nikon from "@/images/nikon.ico"
// import { SiMinutemailer } from "react-icons/si";
import { League_Spartan } from "next/font/google"
import HeroVideo from "../components/HeroVideo"

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
					<HeroVideo />
				</div>

				<div className="flex flex-col scroll-mt-40" id="julie">
					<div className="layout text mb-20 animate-text">
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
							src="https://www.youtube.com/embed/GPZEcGRseMU?si=DVEH3_SlA-tP3xKF?modestbranding=1"
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
								<br /> In this video from Sea Art, a documentary directed by
								Maud Baignères, discover an interview that captures the essence
								of my journey between two worlds - dance and freediving.
								It&apos;s an expression of my heart and my passion, where every
								gesture underwater becomes part of my personal story. This video
								lets you glimpse a piece of my soul, a dance in the silence of
								the deep, where I feel most at home…
							</p>
						</div>
					</article>
					<div className="layout text mb-10 m-auto animate-text">
						<h2 className={`title text-center  ${leagueSpartan.className}`}>
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
					<article id="work">
						<div className="info mb-0">
							<Image
								className="w-3/4 lg:w-1/2 image"
								src={nikonZ8}
								alt="Nikon Z8"
							/>

							<p className="text animate-text">
								<strong>Nikon Creator</strong>
								<Image
									src={nikon}
									alt="Nikon Icon"
									className="inline-block ml-2 w-6 h-6 lg:w-8 lg:h-8"
								/>
								<br /> I am fortunate to be part of the Nikon Creator community.
								The Nikon brand supports me in my underwater adventures and
								creations. I appreciate the efficiency and robustness of their
								various equipment. Their advanced technology has allowed me to
								capture the images I desired, even in extreme conditions. The{" "}
								<a
									href="https://www.nikon.fr/fr_FR/product/cameras/z-8"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 underline"
								>
									Nikon Z8
								</a>{" "}
								has become an indispensable tool in my creations.
							</p>
						</div>

						<p className="text layout">
							I appreciate several aspects of the Nikon Z8, particularly the
							quality of its 45.7-megapixel stacked CMOS sensor and especially
							its responsive and ultra-precise autofocus. I find that this
							camera provides exceptional image quality, offering unmatched
							detail and clarity. Its low-light capabilities are particularly
							useful for underwater shoots where natural light is often limited.
							<br />
							<br />
							I have also had the opportunity to test the Nikon Z7. It is ideal
							for harsh environments and extreme conditions that I often
							encounter during my dives.
							<br /> Each of these models has specific strengths that cater to
							different needs.
							<br />
							<br /> The Z7 is lightweight and relatively compact. Its autofocus
							is fast and accurate, perfect for most situations. It is a
							versatile camera, ideal for those who prioritize portability.
							<br /> The Z8, on the other hand, is my preferred tool for more
							demanding situations. It is more robust and designed for
							high-level performance. It captures images as detailed as the Z7
							but excels in speed, with bursts of up to 20 frames per second. It
							is also impressive in video, capable of filming in 8K, which is
							ideal for advanced video projects. Its autofocus is even more
							powerful, making it my choice for action or wildlife photography.
							<br />
							<br />{" "}
							<a
								href="https://www.nikon.fr/fr_FR/products/lenses"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								Nikon&apos;s extensive range of lenses
							</a>{" "}
							allows me to capture every detail with clarity and depth, whether
							it&apos;s close-ups of marine species or vast underwater
							landscapes. <br />
							<br />
							<strong>Nikon’s Values</strong>
							<br /> I am fortunate to be part of the Nikon Creator community.
							The Nikon brand supports me in my underwater adventures and
							creations. I appreciate the efficiency and robustness of their
							various equipment. Their advanced technology has allowed me to
							capture the images I desired, even in extreme conditions. The
							Nikon Z8 has become an indispensable tool in my creations.
						</p>
					</article>
				</div>
			</main>
		</>
	)
}
