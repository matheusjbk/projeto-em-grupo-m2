//Declaração de variáveis
let nome=document.querySelector('#name');
let sobrenome=document.querySelector('#lastName');
let rg=document.querySelector('#rg');
let email=document.querySelector('#email');
let senha=document.querySelector('#senha');
let senha2=document.querySelector('#senha2');
let cep=document.querySelector('#cep');
let numero=document.querySelector('#numero');
let btn=document.querySelector('#btnCadastro');
let error=document.querySelector('#error');

//Função para limpar o formulário em caso de preenchimento errado
const limparForm=()=>{
    document.querySelector('#uf').value='';
    document.querySelector('#localidade').value='';
    document.querySelector('#bairro').value='';
    document.querySelector('#logradouro').value='';
}

//Função para fazer validação do CEP
const cepValido=(cep)=>cep.value.length==9;

//Função para preencher o formulário assim que confirmado o CEP
const preencherForm=(result)=>{
    for(const campo in result){
        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value=result[campo];
        }
    }
}

//Função para encontrar os dados do CEP na API
cep.addEventListener('focusout', async()=>{
    limparForm();

    const search=cep.value.replace('-', '');

    if(cepValido(cep)){
        const response=await fetch(`https://viacep.com.br/ws/${search}/json/`);
        const dados=await response.json();
        if(dados.hasOwnProperty('erro')){
            alert('Erro! CEP não encontrado.');
        }else{
            preencherForm(dados);
        }
    }else{
        alert('CEP digitado incorretamente!');
    }

});

//Função para fazer validação das funções
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let nomeValue=nome.value;
    let sobrenomeValue=sobrenome.value;
    let rgValue=rg.value;
    let emailValue=email.value;
    let senhaValue=senha.value;
    let senha2Value=senha2.value;
    let numeroValue=numero.value;

    if(nomeValue=='' || sobrenomeValue=='' || rgValue=='' || emailValue=='' || senhaValue=='' || senha2Value=='' || numeroValue==''){
        error.innerHTML='Por favor, preencha todos os campos!';
    }else{
        alert('Cadastro feito com sucesso!');
        nomeValue='';
        sobrenomeValue='';
        rgValue='';
        emailValue='';
        senhaValue='';
        senha2Value='';
        numeroValue='';
        document.querySelector('#cep').value='';
        document.querySelector('#uf').value='';
        document.querySelector('#localidade').value='';
        document.querySelector('#bairro').value='';
        document.querySelector('#logradouro').value='';
        document.querySelector('#complemento').value='';
        window.location.href="./login.html";
    }
});

//Máscaras para dados
$("#rg").mask("99.999.999-9");

$('#cep').mask('99999-999');
