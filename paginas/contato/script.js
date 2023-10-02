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


//Validação do formulario contato

const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();//Chamando a funcao check inputs
})


function checkInputs(){
    const nomeValue = nome.value//Guardar o valor que é preenchido no input
    const emailValue = email.value
    const msgValue = msg.value
    
   
    if(nomeValue === ""){
        setErrorFor(nome, "O nome de usuário é obrigatorio. ")
    }else{
        setSuccessFor(nome)
    }

    if(emailValue === ""){
        setErrorFor(email, "O email é obrigatorio.")
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor insira um email válido.")
    }else{
        setSuccessFor(email)
    }



    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every((formControl) =>{
        return (formControl.className === 'form-control success');
    })//Estamos verificando se todas as classes do form-control tem a classe 'form-control success'
    
    if(formIsValid){
        console.log("O formulário estar 100% valido")
    }//Se todas as classes forem validas mostre mensagem em console

}

function setErrorFor(input,message){
    const formControl = input.parentElement; //O parent Element pega o elemento pai do input
    const small = formControl.querySelector('small')

    //Adiciona a messagem de erro
    small.innerText = message;

    //Adiciona a classe de erro na tag input
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //Adiciona a classe de sucesso na tag input
    formControl.className = "form-control success";
}

//Checar se o email e valido Regex
function checkEmail(email){
    return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email)
    
    
}
