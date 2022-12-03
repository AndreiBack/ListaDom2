function calcular(){

let vtn = document.getElementById('nulo').value;
let vtb = document.getElementById('branco').value;
let vtv = document.getElementById('valido').value;

vtn = Number(vtn);
vtb = Number(vtb);
vtv = Number(vtv);

let total = vtn + vtb + vtv;
let tn = vtn * (100/total);
let tb = vtb * (100/total);
let tv = vtv * (100/total);

let t = document.getElementById('t');
let n = document.getElementById('n');
let b = document.getElementById('b');
let v = document.getElementById('v');

t.innerHTML = total;
n.innerHTML = tn;
b.innerHTML = tb;
v.innerHTML = tv;
}