const images = ["./images/img1.jpg", "./images/img2.png", "./images/img3.png"];
let index = 0;

// Add your code here
// Task 1
const imageContainer = document.querySelector(".img-container");
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");

backBtn.addEventListener("click", function () {
  // Add your code here
  // Task 3.1
  index--;
  if (index < 0) {
    index = 0;
  }
  renderImage();
});

nextBtn.addEventListener("click", function () {
  // Add your code here
  // Task 3.2
  index++;
  if (index >= images.length) {
    index = images.length - 1;
  }
  renderImage();
});

// Add your code here
// Task 2
const renderImage = () => {
  imageContainer.innerHTML = `<img src="${images[index]}" alt="Image ${index}">`;
};

renderImage();
