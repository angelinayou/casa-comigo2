const no = document.getElementById("no");

const frases = [
  "Tem certeza?",
  "Sério?",
  "Pensa bem...",
  "😭",
  "Última chance",
  "Não faz isso",
  "O SIM é mais bonito 💜"
];

let index = 0;

function fugir() {

  const x =
    Math.random() *
    (window.innerWidth - 220);

  const y =
    Math.random() *
    (window.innerHeight - 120);

  no.style.position = "fixed";
  no.style.left = x + "px";
  no.style.top = y + "px";

  no.innerText =
    frases[index % frases.length];

  index++;
}

/* PC */

document.addEventListener("mousemove", e => {

  const rect = no.getBoundingClientRect();

  const centerX =
    rect.left + rect.width / 2;

  const centerY =
    rect.top + rect.height / 2;

  const dist = Math.hypot(
    e.clientX - centerX,
    e.clientY - centerY
  );

  if(dist < 120){
    fugir();
  }

});

/* CELULAR */

no.addEventListener("touchstart", e => {
  e.preventDefault();
  fugir();
});

/* BOTÃO SIM */

document
.getElementById("yes")
.addEventListener("click", () => {

document.body.innerHTML = `

<div class="final">

<h1>Olha só... </h1>

<div class="love-letter">

Eu sei que às vezes posso ser um pouquinho implicante, ciumenta, aleatória e até meio desajeitada, mas quero que você nunca se esqueça de uma coisa: eu amo muito você.

<br><br>

Isso era para ter sido um presente de Dia dos Namorados, mas acho que me atrasei só um pouquinho... 😝

<br><br>

Mesmo assim, cada palavra aqui carrega todo o carinho que sinto por você.

Obrigada por estar ao meu lado, por me aguentar nos meus momentos mais doidinhos e por fazer meus dias mais felizes.

<br><br>

Você é muito especial para mim e eu espero que saiba o quanto é amado.

<br><br>

 Com amor, Angelina.

</div>

</div>
`;

for(let i = 0; i < 300; i++){

  setTimeout(() => {

    const heart =
      document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
      Math.random() > .5
      ? "💜"
      : "⭐";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.fontSize =
      (20 + Math.random() * 40) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);

  }, i * 25);

}

});