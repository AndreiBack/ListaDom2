function salario(){
    let hora= document.getElementById('hr').value;
    let sl= document.getElementById('sal').value;
    let calc;

    hora = Number(hora);
    sl = Number(sl);
    
    
  if(hora<=160){
     calc = hora * sl;
  }

    if(hora>160){
        let extra =(sl*0.5);
     calc = (160*sl) + ((hora - 160) * sl) + extra ;

    }

    let total= document.getElementById('sal_t');

    

    total.innerHTML = calc; 
    
}