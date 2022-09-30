function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop(0.1, 1, 0.3);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  colisao();
  incluiPontos();
  marcaPonto();
}