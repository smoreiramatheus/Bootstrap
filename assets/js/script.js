let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    
    if (nome.value.length <3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color ="green"
    }    
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")

    if(mensagem.value.length < 2) {
        txtMensagem.innerHTML ="Atenção: prencher com no mínimo 2 caracteres."
        txtMensagem.innerHTML.color = "red"        
   
    }
    else {
        txtMensagem.innerHTML = "Mensagem válida"
        txtMensagem.style.color = "green"
    }
}