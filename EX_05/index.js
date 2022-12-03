function Calcular(){
    let qnt = document.getElementById('Quantidade').value;
    let val = document.getElementById('unidade').value;
    let desc
    qnt = Number(qnt);
    val = Number(val);

    let total = (qnt * val);

    if(qnt <=5){
        desc = total * 0.02;
    }
    if(qnt>5 && qnt<=10){
        desc = total *0.03;
    }
    if(qnt>10){
        desc = total * 0.05;
    }
    let total_desc = total - desc;

    let total_pagar = document.getElementById('total');
    total_pagar.innerHTML=total_desc;

    /*Calcule e apresente o total (total = quantidade
adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total -
desconto), sabendo-se que:
a. Se quantidade <= 5 o desconto será de 2%;
b. Se quantidade > 5 e quantidade <=10 o desconto será de 3%;
c. Se quantidade > 10 o desconto será de 5%.*/

}