
function excluirPost (e){
 let id = e.dataset.id

 let configMetodo = {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {'Content-Type':'application/json;charset=UTF-8'}
 }
 fetch(`remover/${id}`, configMetodo)
    .then(resposta =>{
        if(!resposta.ok === true){
            let msg = resposta.status + " - " + resposta.statusText
            throw new Error(msg)
        }
        else
            excluirHTMLPostIt(id);
    })
    .catch(error =>{
        console.log(error);
    })
}

const excluirHTMLPostIt = id => {}