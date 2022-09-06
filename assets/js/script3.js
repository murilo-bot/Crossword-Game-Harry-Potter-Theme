// Capturando nome do player 
const buttonAdd = document.getElementById('add'); 
function capturaDeNome(){ const valueList = document.getElementById("valueList"); 
const namePlayer = valueList.value; 
console.log(namePlayer);
 } 

buttonAdd.addEventListener('click', capturaDeNome);