let canvas = document.getElementById("snake"); // html
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas
let box = 32; // o tamanho de cada quadrado
let snake = []; // array da cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box,
};
// ?????????????????????

let direction = "right"; //variavel da direção da cobrinha

function criarBG() {
    context.fillStyle = "lightgreen"; //vai retornar uma cor
    context.fillRect(0, 0, 16 * box, 16 * box); //coloca e dar tamanho
}

function criarCobrinha() {
    //função que vai criar a cobrinha
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG(); // vai chamar a função do jogo
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; // Orientado plano cartesiano
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box; // ???????
    if(direction == "down") snakeY += box; // ???????

    snake.pop()

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
 }

let jogo = setInterval(iniciarJogo, 100);//Intervalo de 100 milisegundos para inciar o jogo