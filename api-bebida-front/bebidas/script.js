async function excluir(id) {
    await fetch(`http://localhost:3000/bebidas/${id}`, { 
        method: 'DELETE' 
    });
    window.location.reload();
}

async function listarBebidas() {
    const response = await fetch(`http://localhost:3000/bebidas`);
    const dados = await response.json();
    const corpoTabela = document.getElementById('corpo-tabela');

    dados.forEach(item => {
        const linha = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = item.id;
        linha.appendChild(tdId);

        const tdNome = document.createElement('td');
        tdNome.textContent = item.nome;
        linha.appendChild(tdNome);

        const tdCor = document.createElement('td');
        tdCor.textContent = item.cor;
        linha.appendChild(tdCor);

        const tdQuantidade = document.createElement('td');
        tdQuantidade.textContent = item.quantidade;
        linha.appendChild(tdQuantidade);

        const tdTeorAlcool = document.createElement('td');
        tdTeorAlcool.textContent = item.teorAlcool;
        linha.appendChild(tdTeorAlcool);

        const tdTemperatura = document.createElement('td');
        tdTemperatura.textContent = item.temperatura;
        linha.appendChild(tdTemperatura);

        const tdAcoes = document.createElement('td');
        tdAcoes.innerHTML = `<a href="cadastro.html?id=${item.id}">Editar</a>
      <button onclick="excluir(${item.id})">Excluir</button>`;
        linha.appendChild(tdAcoes);

        corpoTabela.appendChild(linha);
    });
}

listarBebidas();