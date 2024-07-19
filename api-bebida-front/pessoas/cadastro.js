const salvar = document.getElementById('salvar');
const nomeCampo = document.getElementById('nome');
const dataNascimentoCampo = document.getElementById('dataNascimento');
const alturaCampo = document.getElementById('altura');
const pesoCampo = document.getElementById('peso');

async function salvarDados(dados) {
    const resultado = await fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    console.log(resultado);
}

salvar.addEventListener('click', () => {
    const nome = nomeCampo.value;
    const dataNascimento = dataNascimentoCampo.value;
    const altura = alturaCampo.value;
    const peso = pesoCampo.value;


    const dados = {
        nome: nome,
        dataNascimento: dataNascimento,
        altura: altura,
        peso: peso,
    }

    salvarDados(dados);

    nomeCampo.value = "";
    dataNascimentoCampo.value = "";
    alturaCampo.value = "";
    pesoCampo.value = "";

});