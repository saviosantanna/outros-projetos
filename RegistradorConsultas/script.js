var consultas = []

/* CAPTURAR ELEMENTOS DO HTML */

var nomeForm = window.document.getElementById('formulario')
nomeForm.addEventListener("submit", function (e) {
    texto = e.target[0].value;

    if (texto == ".") {
        alert("Favor preencher a consulta");
    }
    else {
        var date = new Date()
        let ano = date.getFullYear();
        let mes = date.getMonth() + 1;
        let dia = date.getDate();
        let hora = date.getHours();
        let min = date.getMinutes();

        horario = `${dia}/${mes}/${ano} às ${hora}h${min}`;


        //console.log(texto)
        e.preventDefault();

        e.target[0].value = "";
        
        var edit = "";
        consulta = { texto, horario, edit }
        consultas = [...consultas, consulta]
        
        atualizarDados(consulta);
        console.log(consulta)
    }

})

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
    //console.log(consultas);
}

/* EDITAR CONSULTA */
function editarDado(i){
    consultas[i].texto = "TEXTO EDITADO";
    consultas[i].edit = " (editado)";
    atualizarDados(consultas);
}


