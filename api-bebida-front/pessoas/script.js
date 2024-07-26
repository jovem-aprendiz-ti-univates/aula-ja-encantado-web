async function listarPessoas() {
    const response = await fetch(`http://localhost:3000/pessoas`);
    const dados = await response.json();
    const corpoTabela = document.getElementById('corpo-tabela');

    dados.forEach(item => {
        const linha = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = item._id;
        linha.appendChild(tdId);

        const tdNome = document.createElement('td');
        tdNome.textContent = item._nome;
        linha.appendChild(tdNome);

        const tdDataNascimento = document.createElement('td');
        tdDataNascimento.textContent = item._dataNascimento;
        linha.appendChild(tdDataNascimento);

        const tdAltura = document.createElement('td');
        tdAltura.textContent = item._altura;
        linha.appendChild(tdAltura);

        const tdPeso = document.createElement('td');
        tdPeso.textContent = item._peso;
        linha.appendChild(tdPeso);

        corpoTabela.appendChild(linha);
    });

}

listarPessoas();