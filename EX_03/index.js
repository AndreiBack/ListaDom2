function Calcular(){
    let sld = document.getElementById('saldo').value;
    let dbt = document.getElementById('debito').value;
    let cdt = document.getElementById('credito').value;
    let total;
    let alert;

    
    sld = Number(sld);
    dbt = Number(dbt);
    cdt = Number(cdt); 
    
     total = sld - dbt + cdt;

     if(total=>0){
        alert = "Saldo Positivo";
     }
     if(total<0){
        alert = "Saldo Negativo";
     }

    let sld_t = document.getElementById('saldo_t');
    let alerta = document.getElementById('alerta');
    sld_t.innerHTML = total;
    alerta.innerHTML = alert
    

  /*  a. Se o saldo atual for maior ou igual a zero escrever a mensagem 'Saldo
Positivo';
b. Se o saldo atual for menor que zero escrever a mensagem 'Saldo Negativo'*/

}