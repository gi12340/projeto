//Declara uma váriavel chamada mouseEvent e a inicializa com o valor "empty". Essa variável será usada para cotrolar o estado do mouse.

var mouseEvent = "empty";

//Declara duas variáveis chamadas em atribuir um valor inicial.

var last_position_of_x, last_position_of_y

//Obtém a referência para o elemento HTML com o ID "myCanvas" e armazena-o na variavél.

canvas = document.getElementById("myCanvas");

//Obtém o contexto 2D do canvas, que permite desenhas nele, e armazena-o na variável ctx. A partir de agora, podemos usar ctx para realizar de desenho no canvas.

ctx = canvas.getContext("2D")

ctx.beginPath()
ctx.strokeStyle= "red"
ctx.lineWidth= 5;
ctx.arc(150,143,430,200 *Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle= "blue"
ctx.lineWidth= 5;
ctx.arc(250,210,40,0,2 *Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle= "black"
ctx.lineWidth= 5;
ctx.arc(350,210,40,0, 2 *Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle= "orange"
ctx.lineWidth= 5;
ctx.arc(300,250,40,0, 2 *Math.PI);
ctx.stroke();