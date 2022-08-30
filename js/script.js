let canvas = document.getElementById("snake"); // html
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas
let box = 32; // o tamanho de cada quadrado
let snake = []; // array da cobrinha
let pontuacao = 0;

snake[0] = {
    x: 8 * box,
    y: 8 * box,
};
// vetor de objetos da cobrinha

let direction = "right"; //variavel da direção inicial da cobrinha

//variavel com a geração da comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
};

function criarBG() {
    context.fillStyle = "lightgreen"; //vai retornar uma cor
    context.fillRect(0, 0, 16 * box, 16 * box); //coloca e dar tamanho
}

//função que vai criar a cobrinhat
function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
//função que vai gerar a comida
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
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

function gameOver(){
    clearInterval(jogo);
    alert("Gamer Over: :(");
}

function iniciarJogo() {

    //Caso chegue aos limites da area de jogo
    // if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    // if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    // if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    // if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    //Se a cobrinha bater na parede
    if(snake[0].x > 15 * box) gameOver()
    if(snake[0].x < 0 ) gameOver()
    if(snake[0].y > 15 * box) gameOver()
    if(snake[0].y < 0 ) gameOver()


    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            gameOver();
        }
    }

    criarBG(); // vai chamar a função do jogo
    criarCobrinha();
    drawFood();

    //variaveis que vao receber as cordenadas da cabeça
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    //Ações ao receber o acionamento das teclas
    if (direction == "right") snakeX += box; // Orientado plano cartesiano
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box; // ???????
    if (direction == "down") snakeY += box; // ???????

    //se a cobrinha nao comer snake.pop
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        pontuacao++
        console.log(pontuacao);
    }
    document.getElementById("pont").innerHTML = pontuacao;
    //cabeça da cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY,
    };
    //vai inserir a cabeça da cobrinha  nas posições
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //Intervalo de 100 milisegundos para inciar o jogo
// function jogo(){
//     setInterval(iniciarJogo, 100);
// }
// document.getElementyById("botao").innerHTML = jogo();
