const selectCategoria = document.querySelector("#categoria_alterar")
const inputDescricao = document.querySelector("#descricao_alterar")

function fetchBuscar(id) {
    fetch(`buscar/${id}`)
        .then(response => {
            if (!response.ok) {
                let msg = `${response.status} - ${response.statusText}`;
                throw new Error(msg);
            }
            return response.json()
        })
        .then(data => {
            const categoria = data.categoria;
            const postDescricao = data.post_descricao;
            montarForm(categoria, postDescricao)
        })
        .catch(error => console.error(error));
}

function montarForm(categoria, post) {
    for (let i in categoria) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = categoria[i];
        selectCategoria.appendChild(option);
    }
    inputDescricao.value = post;
};