var frase = []



var nomeForm = window.document.getElementById('formulario')
nomeForm.addEventListener("submit", function (e) {

    var date = new Date()
    let ano = date.getFullYear();
    let mes = date.getMonth() + 1;
    let dia = date.getDate();
    let hora = date.getHours();
    let min = date.getMinutes();

    horario = `${dia}/${mes}/${ano} às ${hora}h${min}`;

    texto = e.target[0].value;
    e.preventDefault();

    e.target[0].value = "";

    frase = { texto, horario }

    atualizarDados(frase, true);
})

function atualizarDados(frase, add) {
    if (add) {
        var res = window.document.getElementById('resultado')
        res.innerHTML += `<div class="consulta">
    <span>${frase.texto} - realizada às ${frase.horario}</span>
    <ion-icon name="trash-bin-outline" class="lixeira"></ion-icon>
</div>`
    }

    var excluir = window.document.getElementsByClassName('consulta')
    var excluirForm = window.document.querySelectorAll('.lixeira')
    for (let i = 0; i < excluirForm.length; i++) {
        excluir[i].addEventListener("click", function (r) {
          
            console.log(excluir)
            console.log(excluir[i])
            /*
            console.log(excluir.length);
            */excluir[i].remove();
            /*console.log(excluir);
            console.log(excluir[i])*/
        
        })
        
    }

}





