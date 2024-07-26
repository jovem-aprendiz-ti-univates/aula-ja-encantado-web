const salvar = document.getElementById('salvar');
const nomeCampo = document.getElementById('nome');
const corCampo = document.getElementById('cor');
const temperaturaCampo = document.getElementById('temperatura');
const teorAlcoolCampo = document.getElementById('teoralcool');
const quantidadeCampo = document.getElementById('quantidade');

async function salvarDados(dados){
    const resultado = await fetch('http://localhost:3000/bebidas', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });

    console.log(resultado);
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

    nomeCampo.value = "";
    corCampo.value = "";
    temperaturaCampo.value = "";
    teorAlcoolCampo.value = "";
    quantidadeCampo.value = "";
});