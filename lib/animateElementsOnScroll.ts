import isInViewport from "./isInViewPort";

export default function animateElementsOnScroll(): void {
  console.log('animateElementsOnScroll')
	const images = document.querySelectorAll(".scroll-animation");
	const texts = document.querySelectorAll(".animate-text");

	const handleScroll = (): void => {
    console.log('handleScroll')
		images.forEach((image) => {
			if (isInViewport(image)) {
        console.log('is in view port')
        image.classList.remove("invisible");
				image.classList.add("animate-image-visible");
        
			}
		});

		texts.forEach((text) => {
			if (isInViewport(text)) {
				text.classList.add("text-visible");
			}
		});
	};

	window.addEventListener("scroll", handleScroll);
}
