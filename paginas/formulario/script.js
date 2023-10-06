//Tema claro Escuro

const chk = document.getElementById('chk')

chk.addEventListener('click',() => {
    document.body.classList.toggle('dark')
})

//Validacao do formulario

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();//Chamando a funcao check inputs
})

function checkInputs(){
    const usernameValue = username.value//Guardar o valor que é preenchido no input
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value
   
    if(usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatorio. ")
    }else{
        setSuccessFor(username)
    }

    if(emailValue === ""){
        setErrorFor(email, "O email é obrigatorio.")
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor insira um email válido.")
    }else{
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "A senha é obrigatoria.")
    }else if(passwordValue.length < 7){
        setErrorFor(password, "A senha deve conter no minímo 7 caracteres. ")
    }else{
        setSuccessFor(password)
    }

    if(passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmation, "A senha de confirmação é obrigatoria.")
    }else if(passwordValue != passwordConfirmationValue){
        setErrorFor(passwordConfirmation, "As senhas não confere. ")
    }else{
        setSuccessFor(passwordConfirmation)
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

/*Modal*/

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})