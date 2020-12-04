/*
Por Tag: getElementByTagName()
Por Id: getElementById()
Por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome (){
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }

    else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = 'true'
    }
}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.length < 3 || email.value.indexOf('@')== -1 || email.value.indexOf('.com') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }

    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = 'true'
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#assunto')

    if (assunto.value.length >= 200) {
        txtAssunto.innerHTML = 'Texto muito longo. Reduza sua mensagem para que ela fique com no máximo 200 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }

    else {
        txtAssunto.style.display = 'ok'
        txtAssunto.style.color = 'black'
        assuntoOk = 'true'
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == 'true'){
        alert ('Formulário enviado com sucesso!')
    }
    else {
        alert ('Preencha os campos corretamente antes de enviar.')
    }
}

function mapaZoom () { 
    mapa.style.width = '600px'
    mapa.style.height = '500px'
}

function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}