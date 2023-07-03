const generateBtn = document.getElementById("generate-btn");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const imageContainer = document.querySelector(".image-container");
const theImages = [
  {
    src: "https://i.pinimg.com/564x/c6/be/a3/c6bea3433fa5d69f1c9b1880fe0e82d8.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/564x/5f/27/6e/5f276e07b8e932a057d21c2d5136c435.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/564x/f8/ce/09/f8ce09785d46ab9e90e317a5f5e61947.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/736x/ea/1b/73/ea1b73e4e1b922aef76714b717a2b4af.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/564x/38/05/59/38055948175bae7f27355ad928f2054c.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/564x/1a/0a/a7/1a0aa727bffdcbe9d94ee1cff745b90b.jpg",
    width: "300",
    height: "300",
  },
];

generateBtn.addEventListener("click", () => {
  imageContainer.style.display = "flex";
  const random1 = Math.floor(Math.random() * theImages.length);
  const random2 = Math.floor(Math.random() * theImages.length);
  const random3 = Math.floor(Math.random() * theImages.length);

  image1.src = theImages[random1].src;
  image1.width = theImages[random1].width;
  image1.height = theImages[random1].height;

  image2.src = theImages[random2].src;
  image2.width = theImages[random2].width;
  image2.height = theImages[random2].height;

  image3.src = theImages[random3].src;
  image3.width = theImages[random3].width;
  image3.height = theImages[random3].height;
});
