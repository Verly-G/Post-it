
function excluirPost (e){
 let id = e.dataset.id

 let configMetodo = {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {'Content-Type':'application/json;charset=UTF-8',
                'X-CSRFToken': 'hndwTvTJi51jfoM2Oe6SkkqxjMcsCrkyHhL3jLobLB1IyWv006gsfwq4L79TaCDE'
            }
 }
 fetch(`remover/${id}`, configMetodo)
    .then(resposta =>{
        if(!resposta.ok === true){
            let msg = resposta.status + " - " + resposta.statusText
            throw new Error(msg)
        }
        else
            e.parentNode.remove()
    })
    .catch(error =>{
        console.log(error);
    })
}
