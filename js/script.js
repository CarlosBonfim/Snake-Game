let canvas = document.getElementById("snake"); // html
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas
let box = 32; // o tamanho de cada quadrado
let snake = []; // array da cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box,
};
// vetor de objetos da cobrinha

let direction = "right"; //variavel da direção da cobrinha
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box 
}

function criarBG() {
    context.fillStyle = "lightgreen"; //vai retornar uma cor
    context.fillRect(0, 0, 16 * box, 16 * box); //coloca e dar tamanho
}

//função que vai criar a cobrinha
function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box)
}

//Vai receber um evento e passar a função update como arg
document.addEventListener("keydown", update);

//recebe o acionamento da tecla e define a direção
function update(event) {
    if (event.keyCode == 40 && direction != "up") direction = "down";
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
}
function iniciarJogo() {
    //Caso chegue aos limites da area de jogo
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG(); // vai chamar a função do jogo
    criarCobrinha();
    drawFood()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box; // Orientado plano cartesiano
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box; // ???????
    if (direction == "down") snakeY += box; // ???????

    snake.pop();

    //cabeça da cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY,
    };
    //vai inserir a cabeça da cobrinha  nas posições
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //Intervalo de 100 milisegundos para inciar o jogo
