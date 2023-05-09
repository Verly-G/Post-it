let id;

$(".btn-fechar-jquery-alterar").click(function () {
    $("#modal-formulario-alterar").modal({ backdrop: 'static' });
    $("#modal-formulario-alterar").modal('hide');
});

const formAlterar = document.querySelector("#form-alterar");

function alterarPost(element) {
    $("#modal-formulario-alterar").modal({ backdrop: 'static' });
    $("#modal-formulario-alterar").modal('show');
    id = element.dataset.id

    fetchBuscar(id)
}

formAlterar.addEventListener("submit", e => {
    e.preventDefault();
    fetchAlterar(id, inputDescricao.value, selectCategoria.value)
})

function fetchAlterar(id, descricao, categoriaId) {
    const configfMethod = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': "0UtbOx8l1ldex2PhOEoldCEHaHjgokQh0QDceqZuCsy8V93NPUeUpGvnahgnubEG",
        },
        body: JSON.stringify({
            id: id,
            descricao: descricao,
            categoria_id: categoriaId
        })
    }
    fetch(`alterar/${id}`, configfMethod)
        .then(response => {
            if (!response.ok) {
                let msg = `${response.status} - ${response.statusText}`;
                throw new Error(msg);
            }
            window.location = `index.html`;
        })
        .catch(error => console.error(error));
}