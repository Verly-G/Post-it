const getCookie = name => {
    let cookieValue = null;//Define inicialmente o valor do cookie.
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');//Criação de um arranjo constante o qual guarda todos os cookies da página.
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));//Nesse caso, a variável cookie receberá o valor do corte do nome do cookie mais =, ou seja, o conteúdo do cookie desejado, o qual será decodado.
                break;
            }//O bloco de comando só será executado quando for verificado se o nome do cookie mais = é igual ao ínicio até o = dos cookies de cada indíce do arranjo. 
        }//Esse laço permite uma interação sobre todos os cookies encontrados e separados no arranjo cookies.
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

const deletePost = element => {
    let id = element.dataset.id;
    let configMetodo = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'X-CSRFToken': csrftoken
        }
    }
    fetch(`remover/${id}`, configMetodo)
        .then(resposta => {
            if(!resposta.ok) {
                let msg = `${resposta.status} - ${resposta.statusText}`;
                throw new Error(msg)
            }
            element.parentNode.remove()
        })
        .catch(error => {
            console.log(error);
        })
};


