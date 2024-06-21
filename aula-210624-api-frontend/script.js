const dados = [
    {descricao: "Batata", quantidade: 10, valor: 5},
    {descricao: "Feijão", quantidade: 4, valor: 14},
    {descricao: "Cebola", quantidade: 1, valor: 1},
    {descricao: "Bola", quantidade: 1, valor: 51},
];

const listaDeItens = document.getElementById('lista');

// for (let index = 0; index < dados.length; index++) {
//     const listaItem = document.createElement('li');
//     listaItem.textContent = `${dados[index].descricao} - ${dados[index].quantidade} - R$ ${dados[index].valor}`;
//     listaDeItens.appendChild(listaItem);   
// }

dados.forEach(item => {
    const listaItem = document.createElement('li');
    listaItem.textContent = `${item.descricao} - ${item.quantidade} - R$ ${item.valor}`
    listaDeItens.appendChild(listaItem);  
})


