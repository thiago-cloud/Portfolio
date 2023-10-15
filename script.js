

function ativarLetra(e){
    const arrTexto = e.innerHTML.split('');//Faz a função de separação
    e.innerHTML ='';
    arrTexto.forEach((letra,i)=>{
        setTimeout(()=>{
            e.innerHTML += letra;
        },75 * i);
    })
}

const titulo = document.querySelector('.digitando');
ativarLetra(titulo);

//btn mobile

const menuMobile = document.getElementById('menu-mobile')
const btn = document.getElementById('btn-menu')
const clickFora = document.getElementById('menu-mobile')

function animar(){
    btn.classList.toggle('ativar')
    /*menuMobile.style.cssText = `visibility:visible`*/
}

/*clickFora.addEventListener("click", function(){
    menuMobile.style.cssText = ` visibility:hidden;  `
    menuMobile.classList.add('esconder')
    btn.classList.toggle('ativar')
})*/

btn.addEventListener('click',function(){
    menuMobile.classList.toggle('abrir')
})

//Esconder senha

function alternar(){
    var inputSenha = document.getElementById('senha')
    var btnSenha = document.getElementById('btn-senha')

    if(inputSenha.type === 'password'){
        inputSenha.setAttribute('type','text')
        btnSenha.classList.replace('fa-eye','fa-eye-slash')
    }else{
        inputSenha.setAttribute('type','password')
        btnSenha.classList.replace('fa-eye-slash','fa-eye')
    }
}

//Tema claro Escuro

const chk = document.getElementById('chk')

chk.addEventListener('click',() => {
    document.body.classList.toggle('dark')
})

//Tema claro Escuro Mobile

const chkMobile = document.getElementById('chk-mobile')

chkMobile.addEventListener('click',() => {
    document.body.classList.toggle('dark')
})

