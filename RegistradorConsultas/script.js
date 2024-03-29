var consultas = []
/* CAPTURAR ELEMENTOS DO HTML */

var nomeForm = window.document.getElementById('formulario')
nomeForm.addEventListener("submit", function (e) {
    texto = e.target[0].value;

    if (texto == ".") {
        console.log(consultas);
    }
    else {
        let horario = definirHorario();

        e.preventDefault();

        e.target[0].value = "";

        var edit = "";
        consulta = { texto, horario, edit }
        consultas = [...consultas, consulta]

        atualizarDados(consulta);
        console.log(consulta)
    }
    

})

function alertaCampoEmBranco(){
    console.log("Favor preencher a consulta");
    console.log(consulta);
}

function definirHorario() {
    var date = new Date()
    let ano = date.getFullYear();
    let mes = date.getMonth() + 1;
    let dia = date.getDate();
    let hora = date.getHours();
    let min = date.getMinutes();

    horario = `${dia}/${mes}/${ano} às ${hora}h${min}`;

    return horario;
}

/* ATUALIZAR LISTA DAS CONSULTAS */

function atualizarDados(consulta) {

    var res = window.document.getElementById('resultado')

    res.innerHTML = "";

    for (i = 0; i < consultas.length; i++) {
        res.innerHTML += `<div class="consulta">
    <span>${consultas[i].texto} - realizada às ${consultas[i].horario}${consultas[i].edit}</span>
    <div class="botoes">
    <ion-icon name="pencil-outline" class="editar"></ion-icon>
    <ion-icon name="trash-bin-outline" class="lixeira"></ion-icon>
    </div>
</div>`
    }

    //console.log(consultas)

    var lixo = window.document.getElementsByClassName('lixeira')
    for (let i = 0; i < consultas.length; i++) {
        lixo[i].addEventListener("click", function () {
            removerDado(i);
        })
    }

    var lapis = window.document.getElementsByClassName('editar')
    for (let i = 0; i < consultas.length; i++) {
        lapis[i].addEventListener("click", function () {
            editarDado(i);
        })
    }

}


/* REMOVER CONSULTA */

function removerDado(i) {
    consultas.splice(i, 1);
    atualizarDados();
}

/* EDITAR CONSULTA */
function editarDado(i) {
    var edicao = window.document.getElementsByClassName('consulta');
    atualizarDados(consultas);
    edicao[i].innerHTML = `<input type="text" class="inputEdit" value="${consultas[i].texto}">
    <div class="botoes">
    <ion-icon name="checkmark-circle-outline" class="confirmar"></ion-icon>
    <ion-icon name="close-circle-outline" class="cancelar"></ion-icon>
    </div>`

    //Confirmação da edição do texto.
    var confirmarEdicao = window.document.getElementsByClassName('confirmar')

    confirmarEdicao[0].addEventListener("click", function () {
        let textoEditado = window.document.querySelectorAll('input')[2].value;
        consultas[i].texto = textoEditado;
        consultas[i].horario = definirHorario()+ " (editado)";
        atualizarDados(consultas)

    })

    var cancelarEdicao = window.document.getElementsByClassName('cancelar')

    cancelarEdicao[0].addEventListener('click', function () {
        atualizarDados()
    })
}