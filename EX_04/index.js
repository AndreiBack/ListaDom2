function Calcular(){
    let die = document.getElementById('Diego').value;
    let gb = document.getElementById('Gabriel').value;
    let gz = document.getElementById('Grazi').value;
    let am = document.getElementById('Amanda').value;
    let total_s
    let total_p
    die = Number(die);
    gb = Number(gb);
    gz = Number(gz);
    am = Number(am);

    
    let soma = Math.max(die, gb) + Math.min(gz, am);
    let produto = Math.min(die, gb) * Math.max(gz,am);
    
    let soma_r = document.getElementById('soma_hm');
    let produto_r = document.getElementById('produto_hm');
    
    soma_r.innerHTML = soma
    produto_r.innerHTML = produto
    /*Calcule e apresente a soma das idades do homem
mais velho com a mulher mais nova, e o produto das idades do homem mais novo
com a mulher mais velha.
a. Obs: considere que as idades dos homens serão sempre diferentes entre si,
bem como as das mulheres.*/

}