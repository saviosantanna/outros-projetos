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

    atualizarDados(frase);
})

function atualizarDados(frase) {
    
        var res = window.document.getElementById('resultado')
        res.innerHTML += `<div class="consulta">
    <span>${frase.texto} - realizada às ${frase.horario}</span>
    <ion-icon name="trash-bin-outline" class="lixeira"></ion-icon>
</div>`
    

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

}





