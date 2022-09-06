//ARRAY DE PALAVRAS DO JOGO
const palavras = ['comensal','murta','weasley','azkaban','horcrux','nimbus',
'dobby', 'hagrid', 'potter','malfoy','rony','draco', 'severus', 'sirius',
'corvinal','harry','minerva','neville','edwiges']
//ADICIONADO TODAS AS ALTERAÇÕES A TABLEA
const cells = document.querySelectorAll('td');
//GERADOR DE LETRAS ALEATORIAS NA TABELA
function geradorDeLetra(){
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
}
//FUNÇÃO QUE ESCOLHE 1 PALAVRA ALEATORIA DENTRO DO ARRAY DE PALAVRAS 
function geradorDePalavra(){
    let result = [];
    for(let i = 0; i < 1; i++){
    result.push(palavras[aleatorio0a19()])
    }
    return result.join("")
}
//FUNÇÃO QUE ADICIONA AS LETRAS ALEATORIAS NA TABELA
function adicionaLetras(){
    for (let i=0; i<cells.length; i++ ){  
    cells[i].innerText = geradorDeLetra()
    }
}
adicionaLetras()
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 0 A 10
function aleatorio1a10() {
let ramdom =  Math.floor(Math.random(1, 10)* 10 + 1);   
    return ramdom;
}
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 0 19
function aleatorio0a19() {
    return Math.floor(Math.random()* 19 + 1);   
}
//ESCOLHE UMA COLUNA DENTRO DO ARRAY DE COLUNAS
const coluna = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
const coluna2 = [2, 12, 22, 32, 42, 52, 62, 72, 82, 92];
const colunaramdom = coluna[aleatorio1a10()];
const colunarandom2 = coluna2[aleatorio1a10()];
//FUNCAO QUE JOGA A PRIMEIRA PALAVRAS DE FORMA VERTICAL 
const palavra = geradorDePalavra();
let arrayLetraClicada = []
let arrayPalavraAleatoriaInserida = [];
function vertical(){
    let j = 0;
    for (let i = aleatorio1a10(); i<cells.length; i+=10){        
        if ( palavra[j] === undefined ){
           break;
        }else{
            cells[i].innerText = palavra[j];
            console.log(palavra[j]);
            arrayPalavraAleatoriaInserida.push(cells[i].id)    
            j+=1;
        }
    }
}
//FUNCAO QUE JOGA A SEGUNDA PALAVRA DE FORMA HORIZONTAL
let palavra2 = geradorDePalavra();
let arrayPalavraAleatoriaInserida2 = []
function horizontal1(){
    j = 0;
    for (let i = colunaramdom; i<cells.length; i++){        
        if ( palavra2[j] === undefined){
            break;
        }else{
            cells[i].innerText = palavra2[j];
            console.log(palavra2[j]);
            arrayPalavraAleatoriaInserida2.push(cells[i].id)    
            j+=1;
        }
    }
}
//FUNCAO QUE JOGA A TERCEIRA PALAVRA DE FORMA HORIZONTAL
let palavra3 = geradorDePalavra();
let arrayPalavraAleatoriaInserida3 = []
function horizontal2(){
    j = 0;
    for (let i = colunarandom2; i<cells.length; i++){        
        if ( palavra3[j] === undefined){
            break;
        }else{
            cells[i].innerText = palavra3[j];
            console.log(palavra3[j]);
            arrayPalavraAleatoriaInserida3.push(cells[i].id)    
            j+=1;
        }
    }
}
vertical()
horizontal1()
horizontal2()
//FUNÇÃO QUE VERIFICA A COLISÃO DE PALAVRAS
    let maior; 
if (palavra.length > palavra2.length){
    maior = palavra;
}else{
    maior = palavra2;
}
function colisao(){
  for (let i=0; i<maior.length; i++){
     for (let j = 0; j<maior.length; j++){
     if (arrayPalavraAleatoriaInserida[i] === arrayPalavraAleatoriaInserida2[j] 
        || palavra == palavra2 || palavra == "" || palavra2 == ""){
      
    location.reload();
}
}}
}
colisao()
//FUNÇÃO QUE CAPTURA O ID DAS LETRAS
function ClickTabela(){
    const cell = event.target.id;
    arrayLetraClicada.push(cell);
}
console.log(arrayPalavraAleatoriaInserida)
console.log(arrayPalavraAleatoriaInserida2)
//FUNÇÃO QUE VERIFICA A VITORIA
function validacaoDeDados(){
    let verificaoLetra1 = [];
    let verificaoLetra2 = [];
    
    for(let i = 0; i<maior.length; i++){
       
        if (arrayPalavraAleatoriaInserida[i] == arrayLetraClicada[i]){
            verificaoLetra1.push(arrayLetraClicada[i])
        }

        if (arrayPalavraAleatoriaInserida2[i] == arrayLetraClicada[i]){
            verificaoLetra2.push(arrayLetraClicada[i])
        }
    } 
    

    if (arrayPalavraAleatoriaInserida == verificaoLetra1){
        let string1 = arrayLetraClicada.join("");
        let string2 = arrayPalavraAleatoriaInserida.join("");
       
        
        if (string1 == string2){
            alert("Acertou a palavra!");
            arrayLetraClicada = [];
        }else{
            alert("Errou a palavra!");
           
        }
    }
    if (arrayPalavraAleatoriaInserida2 == verificaoLetra2){
        let string1 = arrayLetraClicada.join("");
        let string3 = arrayPalavraAleatoriaInserida2.join("");
        
        if (string1 == string3){
            alert("Acertou a palavra!");
            arrayLetraClicada = [];
        }else{
            alert("Errou a palavra!");
            arrayLetraClicada = [];
        }
    }
    
}

//EVENTOS DE CLICK SENDO ESPERADOS
for (let i=0; i<cells.length; i++ ){
    cells[i].addEventListener('click', ClickTabela);
    cells[i].addEventListener('click', validacaoDeDados);  
    cells[i].addEventListener('click', color);  
    //cells[i].addEventListener('click', function(){
      //  if(clicks){
        //    click();
       // }
       
//});
function color(){
    cells[i].classList = "blue";
}
}
//ADICIONANDO MUSICA A PAGINA
const clicks = document.getElementById('click');
const player = document.getElementById('audio');

const button = document.getElementById('musica');
function play() {
    player.play();
   
   
    
}
function click(){
    clicks.play();
}
 function pause() {
    player.pause();
 }
  button.addEventListener('click', function(){
         if(player.paused){
             play();
         }else{pause();}
});

//MOSTRANDO PALAVRAS QUE VAO SER GERADAS    
const p1 = document.getElementById("palavra")
const p2 = document.getElementById("palavra2")
const p2 = document.getElementById("palavra3")

p1.innerText = palavra
p2.innerText = palavra2
p3.innerText = palavra3

  




  


