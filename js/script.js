let canvas = document.getElementById("snake") // html 
let context = canvas.getContext("2d") //renderiza o desenho dentro do canvas
let box = 32; // o tamanho de cada quadrado

function criarBG(){
    context.fillStyle = "lightgreen" //vai retornar uma cor
    context.fillRect(0,0, 16 * box, 16 * box)//coloca e dar tamanho
}
criarBG();