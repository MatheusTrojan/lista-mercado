import { produtoService } from "../service/produtos-service.js"; 

const criaNovaLinha = (produto, quantidade, unidade, id) => {
    const linhaNovoProduto = document.createElement("tr");
    const conteudoNovaLinha = `
        <td class="td" data-td>${produto}</td>
        <td>${quantidade}</td>
        <td>${unidade}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../pages/edita_produto.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
        `
    
        linhaNovoProduto.innerHTML = conteudoNovaLinha;
        linhaNovoProduto.dataset.id = id

        return linhaNovoProduto
}

const tabela = document.querySelector("[data-tabela]") 

tabela.addEventListener("click", async(evento) => {
    let botaoDeletar = evento.target.className == "botao-simples botao-simples--excluir"
    if(botaoDeletar) {
        try {
            const linhaProduto = evento.target.closest("[data-id]") //método closest para encontrar o elemento do DOM mais próximo ao que queremos remover
            let id = linhaProduto.dataset.id
            
            await produtoService.removeProduto(id)
            
            linhaProduto.remove()
        }
        catch(erro){
            console.log(erro)
            // window.location.href = "../telas/erro.html"
        }

    }
})


const render = async() => {
    try {
        const listaProdutos = await produtoService.listaProdutos() 
        listaProdutos.forEach(elemento => { 
            tabela.appendChild(criaNovaLinha(elemento.produto, elemento.quantidade, elemento.unidade, elemento.id))
        })
    }
    catch(erro){
        console.log(erro)
        // window.location.href = "../telas/erro.html"
    }
}

render()