// TODO: Contador
const botaoMais = document.getElementById("mais");
const botaoMenos = document.getElementById("menos");
const contador = document.getElementById("contador");

let valor = 0;

botaoMais.addEventListener('click', function(){
    valor++
    contador.textContent = valor;
});

botaoMenos.addEventListener('click', function(){
    valor--;
    contador.textContent = valor;
});