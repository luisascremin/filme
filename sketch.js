let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(700, 300);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoTerror = createCheckbox("Gosta de terror?");
  campoRomance = createCheckbox("Gosta de romance?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeRomance = campoRomance.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeRomance);

  fill(color(80, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Divertida Mente ";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Enola Holmes";          
        } else{
         return "Extraordinário";
        }
      } else {
        if (gostaDeFantasia) {
          return "Família Addams";
        } else {
          return "Matilda: O Musical";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Paranorman ";
    } else {
      return "A Casa Monstro ";
    }
  }
}