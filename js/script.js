let canvas = document.getElementById("snake") // html 
let context = canvas.getContext("2d") //renderiza o desenho dentro do canvas
let box = 32; // o tamanho de cada quadrado
let snake = [];// array da cobrinha
snake[0] = { 
    x: 8 * box,
    y: 8 * box
}
// ?????????????????????

function criarBG(){
    context.fillStyle = "lightgreen" //vai retornar uma cor
    context.fillRect(0,0, 16 * box, 16 * box)//coloca e dar tamanho
}

function criarCobrinha(){
    for( i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();// vai chamar a função do jogo
criarCobrinha();