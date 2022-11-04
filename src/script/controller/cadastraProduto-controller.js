import { produtoService } from "../service/produtos-service.js"; 

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault()
    try {
        const produto = evento.target.querySelector("[data-produto]").value
        const quantidade = evento.target.querySelector("[data-quantidade]").value
        const unidade = evento.target.querySelector("[data-unidade]").value
        
        await produtoService.novoProduto(produto, quantidade, unidade)
        window.location.href = "../pages/index.html"
    }
    catch(erro){
        console.log(erro)
        // window.location.href = "../telas/erro.html"
    }
})