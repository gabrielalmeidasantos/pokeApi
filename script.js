const form1 = document.querySelector("#formulario1");
const form2 = document.querySelector("#formulario2");
const busca = document.querySelector("#busca");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const pokemon = busca1.value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      competidor1.innerHTML = `
          <div class="box"><img src="${
            data.sprites.front_default
          }" alt="Imagem do ${data.name}"></div>
          <div class="btn">Nome: ${data.name}</div>
          <div class="btn">Altura: ${data.height / 10}m</div>
          <div class="btn">Peso: ${data.weight / 10}kg</div>
          `;
    });
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const pokemon = busca2.value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      competidor2.innerHTML = `
          <div class="box"><img src="${
            data.sprites.front_default
          }" alt="Imagem do ${data.name}"></div>
          <div class="btn">Nome: ${data.name}</div>
          <div class="btn">Altura: ${data.height / 10}m</div>
          <div class="btn">Peso: ${data.weight / 10}kg</div>
          `;
    });
});
