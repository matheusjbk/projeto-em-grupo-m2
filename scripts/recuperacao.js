let email=document.querySelector('#email');
let btnRec=document.querySelector('#btnRec');

btnRec.addEventListener('click', (event)=>{
    event.preventDefault();
    let emailValue=email.value;
    let padraoEmail=/^(\w|\.|-){3,20}@\w+\.(com(\.br)?|net)$/gi;

    const emailValido=padraoEmail.test(emailValue)?alert('E-mail enviado, verifique sua caixa de entrada!'): alert('Digite um e-mail válido.');

    window.location.href="./login.html";
    return emailValido;
});