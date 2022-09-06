const jogadaPC = () => {
    const opcoes = [
        'pedra',
        'papel',
        'tesoura'
    ]

    const randomInt = Math.floor(Math.random() * opcoes.length);
    return opcoes[randomInt]
}

const quemVenceu = (playerPlay,pc) => {
    let vencedor = 'Empatou'

    if(playerPlay === 'pedra'){
     if (pc === 'tesoura')
        vencedor = 'player';
       else if(pc === 'papel'){
        vencedor = 'pc';
        }   
           
       
    } else if (playerPlay === 'papel'){
        if (pc === 'pedra'){
            vencedor = 'player';
        } else if (pc === 'tesoura'){
            vencedor = 'pc';
        }

    } else if(playerPlay === 'tesoura'){
        if(pc === 'papel'){
            vencedor = 'player';
        } else if (pc === 'pedra'){
            vencedor = 'pc';
        }
    }
    return vencedor;
    
}

const showResult = (vencedor) => {
    const spanResult = document.getElementById('result')
    spanResult.innerText = `O vencedor é: ${vencedor}`;
}

const showChoices = (jogador,pc) => {
    const playerSpan = document.getElementById('playerChoice');
    const pcSpan = document.getElementById ('pcChoice');

    playerSpan.innerText = `Jogador: ${jogador}`;
    pcSpan.innerText = `Computador: ${pc}`;
}

//const disableButtons = (buttons) => 

const main = (evt) => {
    let playerPlay = evt.target.id
    let pcPlay = jogadaPC()
    let vencedor = quemVenceu(playerPlay, pcPlay)
    showChoices(playerPlay, pcPlay)
    showResult(vencedor)
    
}

const buttons = document.querySelectorAll('img')
buttons.forEach((img) => img.addEventListener('click', main))

//ADICIONANDO MUSICA A PAGINA
const player = document.getElementById('audio');
const button = document.getElementById('musica');
function play() {
    player.play()
}
 function pause() {
    player.pause();
 }
  button.addEventListener('click', function(){
         if(player.paused){
             play();
         }else{pause();}
});