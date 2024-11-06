let currentImage = 0;
const images = document.querySelectorAll(".slider img");

function showNextImage() {
  images[currentImage].style.display = "none";
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = "block";
}

setInterval(showNextImage, 10000); // 10초 간격으로 이미지 전환
