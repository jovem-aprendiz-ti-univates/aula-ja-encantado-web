async function listarBebidas() {
    const response = await fetch(`http://localhost:3000/bebidas`);
    const dados = await response.json();

    const listaDeItens = document.getElementById('lista');

    dados.forEach(item => {
        const listaItem = document.createElement('li');
        listaItem.textContent = `${item._id} - ${item._cor} - ${item._temperatura} 
    - ${item._quantidade} - ${item._teorAlcool} - ${item._nome}`
        listaDeItens.appendChild(listaItem);  
    });
    // const listaItem = document.createElement('li');
    // listaItem.textContent = `${dados._id} - ${dados._cor} - ${dados._temperatura} 
    // - ${dados._quantidade} - ${dados._teorAlcool} - ${dados._nome}`
    // listaDeItens.appendChild(listaItem);
}

listarBebidas();