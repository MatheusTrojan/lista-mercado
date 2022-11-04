import { produtoService } from "../service/produtos-service.js"; 

(async ()=> {
    const pegaURL = new URL(window.location) 

    const id = pegaURL.searchParams.get("id") 

    const inputProduto = document.querySelector("[data-produto]")
    const inputQuantidade = document.querySelector("[data-quantidade]")
    const inputUnidade = document.querySelector("[data-unidade]")
    
    try {
        const dados = await produtoService.detalhaProduto(id)
        inputProduto.value = dados.produto
        inputQuantidade.value = dados.quantidade
        inputUnidade.value = dados.unidade
    }
    catch(erro){
        console.log(erro)
        // window.location.href = "../telas/erro.html"
    }

    
    const formulario = document.querySelector("[data-form]")
    
    formulario.addEventListener("submit", async(evento) => {
        evento.preventDefault()
    
        try {
            await produtoService.atualizaProduto(id, inputProduto.value, inputQuantidade.value, inputUnidade.value)
            
            window.location.href = "../pages/index.html"
        }
        catch(erro){
            console.log(erro)
            // window.location.href = "../telas/erro.html"
        }
    })
})()
