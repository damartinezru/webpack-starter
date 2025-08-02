import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";  

const laughingImage = document.getElementById("laughImg");
laughingImage.src = laughing;

const jokeButton = document.getElementById("jokeBtn");
jokeButton.addEventListener("click", generateJoke);
generateJoke(); // Initial joke generation on page load