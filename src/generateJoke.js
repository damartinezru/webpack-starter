import axios from 'axios';

function generateJoke() {
    const config = {
        headers: {  
            Accept: 'application/json',
        }
    }
    axios.get('https://icanhazdadjoke.com', config)
        .then(response => {
            const jokeElement = document.getElementById("joke");
            jokeElement.innerHTML = response.data.joke;
        })
        .catch(error => {   
            console.error("Error fetching joke:", error);
            const jokeElement = document.getElementById("joke");
            jokeElement.innerHTML = "Failed to fetch a joke. Please try again later.";
        });
}

export default generateJoke;