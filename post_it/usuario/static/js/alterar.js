
$(".btn-fechar-jquery-alterar").click(function(){
    $("#modal-formulario-alterar").modal({ backdrop: 'static' });
    $("#modal-formulario-alterar").modal('hide');
});

const formAlterar = document.querySelector("#form-alterar");

function alterarPost(element){
    $("#modal-formulario-alterar").modal({ backdrop: 'static' });
    $("#modal-formulario-alterar").modal('show'); 
    let id = element.dataset.id 
    fetchBuscar(id)
}