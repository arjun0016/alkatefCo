const images = ["./image/char.png", "./image/char2.png","./image/char3.png"];
const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsam veniam sunt voluptates quidem esse similique voluptas, iste optio aliquam labore laboriosam officia in consequatur?",
    "Lorem ipsum dolor sit amet,  adipisicing elit. Minima ipsam veniam sunt voluptates quidem esse similique voluptas, iste optio aliquam labore laboriosam officia in consequatur",
    "Lorem ipsum dolor sit amet, consectetur adipisicing . Minima ipsam veniam sunt voluptates quidem esse similique voluptas, iste optio aliquam labore laboriosam officia in consequatur"
];

const imgElement = document.querySelector(".png");
const paragraphElement = document.querySelector(".color-div p");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
let slideInterval;

function showSlide() {
    imgElement.src = images[currentIndex];
    paragraphElement.textContent = paragraphs[currentIndex];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide();
}

nextButton.addEventListener("click", nextSlide);

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slides every 3 seconds (adjust as needed)
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

showSlide(); // Display the initial slide
startAutoSlide(); // Start automatic slideshow

// You can also add logic to stop the auto slide when the user interacts with the slideshow, e.g., when clicking the next button
nextButton.addEventListener("click", () => {
    stopAutoSlide();
});
