// código do ator

let xAtor = 85;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);  
}

function movimentaAtor() {
    if (keyIsDown(87)) {
      yAtor -= 3;
    }
    if (keyIsDown(83)) {
        if (podeSeMover()) {
            yAtor += 3;
        }    
    }  
}

function colisao() {
    for (let i = 0; i < imagemCarros.length; i ++) {
        if (xCarros[i] < xAtor + comprimentoAtor &&
            yCarros[i] < yAtor + alturaAtor &&
            xCarros[i] + comprimentoCarro > xAtor &&
            yCarros[i] + alturaCarro > yAtor) {
                yAtor = 366;
                somDaColisao.play();
            if (pontosMaiorQueZero()) {
                    meusPontos -= 1;
                }
            }
    }
}


function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240 , 60));
    text(meusPontos, width / 5, 27);
}

function marcaPonto() {
    if (yAtor < 15) {
        meusPontos += 1;
        somDoPonto.play();
        yAtor = 366;
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0;
}

function podeSeMover() {
    return yAtor < 366;
}