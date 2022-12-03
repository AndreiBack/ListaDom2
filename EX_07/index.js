function Adicionar(nome, numb, salar){

    let tb = document.getElementById('tabela')
    var linha = tb.insertRow(qdtl);

    
    let cellNome = linha.insertCell(0);
    let cellNum = linha.insertCell(1);
    let cellSal = linha.insertCell(2);

    
    cellNome.innerHtml = nome;
    cellNum.innerHtml = numb;
    cellSal.innerHtml = salar;

}