function Validar(){
    let user = document.getElementById('nome').value;
    let pass = document.getElementById('senha').value;
    let confirma = document.getElementById('confirma');
    let confirma_senha = document.getElementById('confirma_senha');
    let valid;
    let valid_senha;

    
    if (user != "1234"){
        valid = "Usuario Inválido!";
        confirma.innerHTML = valid;
    } 
    if (user == "1234"){
        valid = "";
        confirma.innerHTML = valid;
    } 

    if (pass != "9999"){
        valid_senha = "Senha incorreta!";
        confirma_senha.innerHTML = valid_senha;
    }
    if (pass == "9999"){
        valid_senha = "";
        confirma_senha.innerHTML = valid_senha;
    }
    if (pass == "9999" && user == "1234"){
        valid_senha = "Acesso permitido";
        confirma_senha.innerHTML = valid_senha;
    }
    
    
}
function limpar(){
    
    document.getElementById('nome').value = "";
    document.getElementById('senha').value = "";
   document.getElementById('confirma').textContent = "";
   document.getElementById('confirma_senha').textContent = "";
}