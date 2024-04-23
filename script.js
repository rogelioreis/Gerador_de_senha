let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containderPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for(let i = 0; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containderPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha " + novaSenha + " copiada com sucesso!")
}