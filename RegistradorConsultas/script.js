var consultas = []



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

    consulta = { texto, horario }
    consultas = [...consultas, consulta]

    atualizarDados(consulta);
})

function atualizarDados(consulta) {

    var res = window.document.getElementById('resultado')

    res.innerHTML = "";

    for (i = 0; i < consultas.length; i++) {
        res.innerHTML += `<div class="consulta">
    <span>${consultas[i].texto} - realizada às ${consultas[i].horario}</span>
    <ion-icon name="trash-bin-outline" class="lixeira"></ion-icon>
</div>`
    }

    console.log(consultas)

    var lixo = window.document.getElementsByClassName('lixeira')
    for (let i = 0; i < consultas.length; i++) {
        lixo[i].addEventListener("click", function (teste) {
            teste.target.style.color = 'yellow'
            console.log(i);
            removerDado(i);
        })
    }
}

function removerDado(i){
    console.log("remover indice "+i)
    consultas.splice(i,1);
    atualizarDados();
    console.log(consultas);
}



/*


    var excluir = window.document.getElementsByClassName('consulta')
    var lixo = window.document.getElementsByClassName('lixeira')

    for (let i = 0; i < lixo.length; i++) {
        lixo[i].addEventListener("click", function (teste) {

            //teste.target.style.color = "green";
            console.log(teste.target)

            excluir[i].remove();
            console.log(lixo.length)
            teste.target.removeEventListener()

        })

    }

*/
