
//btn mobile

const menuMobile = document.getElementById('menu-mobile')
const btn = document.getElementById('btn-menu')
const clickFora = document.getElementById('menu-mobile')

function animar(){
    btn.classList.toggle('ativar')
    menuMobile.style.cssText = `visibility:visible`
}

clickFora.addEventListener("click", function(){
    menuMobile.style.cssText = ` visibility:hidden; `
    /*menuMobile.classList.add('esconder')*/
    btn.classList.toggle('ativar')
})

btn.addEventListener('click',function(){
    menuMobile.classList.toggle('abrir')
})

//Tema claro Escuro Mobile

const chkMobile = document.getElementById('chk-mobile')

chkMobile.addEventListener('click',() => {
    document.body.classList.toggle('dark')
})

//Esconder Senha

function alternar(){
    var inputSenha = document.getElementById('senha')
    var btnSenha = document.getElementById('btn-senha')

    if(inputSenha.type === 'password'){
        inputSenha.setAttribute('type','text')
        btnSenha.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputSenha.setAttribute('type','password')
        btnSenha.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}



