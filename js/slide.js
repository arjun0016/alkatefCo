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








//expand
function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters =/^[a-zA-Z\s]*$/; 
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
       
  
    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
  
    if(e == "" || e == null ){
          document.getElementById('emailLabel').innerHTML = ('Please enter your email');
          document.getElementById('email').style.borderColor = "red";
          return false;
      }
  
    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
  
    if(s == "" || s == null ){
          document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
          document.getElementById('subject').style.borderColor = "red";
          return false;
      }
  
    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }
  
    if(m == "" || m == null){
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    }
  
    else{
          return true;
      }
      
}




