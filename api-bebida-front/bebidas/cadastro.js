const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const salvar = document.getElementById('salvar');
const nomeCampo = document.getElementById('nome');
const corCampo = document.getElementById('cor');
const temperaturaCampo = document.getElementById('temperatura');
const teorAlcoolCampo = document.getElementById('teoralcool');
const quantidadeCampo = document.getElementById('quantidade');

async function buscarDados() {
    let resultado = await fetch(`http://localhost:3000/bebidas/${id}`);
    if (resultado.ok) {
        let bebida = await resultado.json();
        console.log(bebida);
        nomeCampo.value = bebida.nome;
        corCampo.value = bebida.cor;
        temperaturaCampo.value = bebida.temperatura;
        teorAlcoolCampo.value = bebida.teorAlcool;
        quantidadeCampo.value = bebida.quantidade;
    } else {
        window.alert('Ops! Algo deu errado!');
    }
}

// Está editando, preenche os dados
if (id) {
    buscarDados();
}


async function salvarDados(dados) {
    let url = 'http://localhost:3000/bebidas';
    let metodo = 'POST';
    if (id) { // editando
        url += '/' + id;
        metodo = 'PUT';
    }

    const resultado = await fetch(url, {
        method: metodo,
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    if (resultado.ok) {
        window.location.href = 'index.html';
    } else {
        window.alert('Ops! Algo deu errado!');
    }
}

salvar.addEventListener('click', () => {
    const nome = nomeCampo.value;
    const cor = corCampo.value;
    const temperatura = temperaturaCampo.value;
    const teorAlcool = teorAlcoolCampo.value;
    const quantidade = quantidadeCampo.value;

    const dados = {
        nome: nome,
        cor: cor,
        temperatura: temperatura,
        teorAlcool: teorAlcool,
        quantidade: quantidade
    }

    salvarDados(dados);
});