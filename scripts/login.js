let email=document.querySelector('#e-mail');
let senha=document.querySelector('#password');
let btnLogin=document.querySelector('#btnLogin');

btnLogin.addEventListener('click', (event)=>{
    event.preventDefault();
    let emailValue=email.value;
    let senhaValue=senha.value;
    let padraoEmail=/^(\w|\.|-){3,20}@\w+\.(com(\.br)?|net)$/gi;
    const emailValido=padraoEmail.test(emailValue);

    const login=(emailValido)&&(senhaValue)?window.location.href="./index.html":false;
    return login;
});