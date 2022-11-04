const listaProdutos = () => {
    return fetch (`http://localhost:3000/profile`) // método global > por padrão, a fetch já faz o GET e devolve uma promise
    .then(resposta => { //após o fetch, basta retornar a resposta transformada em json
        if (resposta.ok){
            return resposta.json();
        }
        throw new Error("Não foi possível listar os clientes");  
    })
}

const novoProduto = (produto, quantidade, unidade) => {
    return  fetch (`http://localhost:3000/profile`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            produto: produto,
            quantidade: quantidade,
            unidade: unidade
        })
    })
    .then( resposta => {
        if (resposta.ok){
            return resposta.body;
        }
        throw new Error("Não foi possível cadastrar o produto");
    })
}

const removeProduto = (id) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    })
    .then( resposta => {
        if (!resposta.ok) {
            throw new Error("Não foi possível remover o produto")  
        }
    })
}

const detalhaProduto = (id) => {
    return fetch (`http://localhost:3000/profile/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível detalhar o produto")  
    })
}

const atualizaProduto = (id, produto, quantidade, unidade) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            produto: produto,
            quantidade: quantidade,
            unidade: unidade
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível atualizar o produto") 
    })
}

export const produtoService = {
    listaProdutos,
    novoProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}