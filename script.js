const catGifContainer = document.getElementById("catGifContainer");
const catGif = document.getElementById("catGif");
const showCatButton = document.getElementById("showCatButton");

const catGifFiles = [
  "cat1.gif",
  "cat2.gif",
  "cat4.gif",
  "cat5.gif",
  "cat6.gif",
  "cat7.gif"
];



showCatButton.addEventListener("click", function () {

  const randomIndex = Math.floor(Math.random() * catGifFiles.length);
  
  const randomCatGif = catGifFiles[randomIndex];
  
  catGif.src = "assets/" + randomCatGif;
  catGifContainer.style.display = "block";
});
