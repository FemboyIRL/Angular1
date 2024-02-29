import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss'
})
export class RandomComponent {
  const michiActualElement = document.getElementById("michiActual") as HTMLImageElement;
const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "live_dfGNjMQZcx86RTaaIckppVLtStZpwkP9Kfw6Z12H42hymKg9H6Rk8KbXRCpfnAER";
const spinner = document.getElementById("spinner") as HTMLElement;
const saltarButton = document.getElementById("Saltar") as HTMLButtonElement;
const likeButton = document.getElementById("Like") as HTMLButtonElement;
const dislikeButton = document.getElementById("Dislike") as HTMLButtonElement;
const contenedorLikeMichis = document.getElementById("contenedorLikeMichis") as HTMLElement;
const contenedorDislikeMichis = document.getElementById("contenedorDislikeMichis") as HTMLElement;
spinner.classList.add("escondido");

saltarButton.addEventListener("click", nuevoMichi);
likeButton.addEventListener("click", () => rankingMichis("+"));
dislikeButton.addEventListener("click", () => rankingMichis("-"));

function nuevoMichi() {
  spinner.classList.toggle("escondido", false);
  michiActualElement.classList.toggle("escondido", true);
  const url = `${API_URL}images/search`;

  fetch(url, { headers: { 'x-api-key': API_KEY } })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const res = data[0];
      michiActualElement.src = res.url;
      michiActualElement.classList.toggle("escondido", false);
      spinner.classList.toggle("escondido", true);
    });
}

function rankingMichis(ranking: string) {
  console.log(ranking);
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = michiActualElement.src;
  if (ranking === "+") {
    contenedorLikeMichis.appendChild(nuevaImagen);
  } else {
    contenedorDislikeMichis.appendChild(nuevaImagen);
  }
  nuevoMichi();
}

nuevoMichi();

}
