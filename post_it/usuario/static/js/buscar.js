function fetchBuscar(id){   
    fetch(`buscar/${id}`)
        .then(resposta => {
            if(!resposta.ok){
                let msg = `${resposta.status} - ${resposta.statusText}`
                throw new Error(msg)
            }
            else
                resposta.json()
        })
        .then(respostaJSON =>{
            montarForm(respostaJSON)
        })
        .catch(erro => {
            console.error(erro)
        })
}

function montarForm(dados){
    let inputCategoria = document.querySelector("#categoria_alterar")
    let inputDescricao = document.querySelector("#descricao_alterar")
    console.log(dados);
    // montarSelectCategoria(inputCategoria, dados.categoria)

}

// function montarSelectCategoria(input){

// }