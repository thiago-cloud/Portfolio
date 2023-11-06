
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
}

btn.addEventListener('click',function(){
    menuMobile.classList.toggle('abrir')
})


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

