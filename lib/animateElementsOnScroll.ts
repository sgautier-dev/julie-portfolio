import isInViewport from "./isInViewPort";

export default function animateElementsOnScroll(): void {
	const images = document.querySelectorAll<HTMLImageElement>(".animate-image");
	const texts = document.querySelectorAll(".animate-text");

	const handleScroll = (): void => {
		images.forEach((image) => {
			if (isInViewport(image)) {
				image.classList.add("animate-image-visible");
			}
		});

		texts.forEach((text) => {
			if (isInViewport(text)) {
				text.classList.add("animate-text-visible");
			}
		});
	};

	window.addEventListener("scroll", handleScroll);
}
