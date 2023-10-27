const images = ["./image/char.png", "./image/char2.png","./image/char3.png"];
const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsam veniam sunt voluptates quidem esse similique ",
    "Lorem ipsum dolor sit amet,  adipisicing elit. Minima ipsam veniam sunt voluptates quidem esse similique voluptas,",
    "Lorem ipsum dolor sit amet, consectetur adipisicing . Minima ipsam veniam sunt voluptates quidem esse similique voluptas,"
];
const name = [
    "olivia Scott","Matthew Brown","jhon Smith"
]

const imgElement = document.querySelector(".png");
const paragraphElement = document.querySelector(".color-div p");
const nameElement = document.querySelector(".name");

const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
let slideInterval;

function showSlide() {
    imgElement.src = images[currentIndex];
    paragraphElement.textContent = paragraphs[currentIndex];
    nameElement.textContent = name[currentIndex];
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
