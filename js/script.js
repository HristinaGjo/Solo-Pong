window.addEventListener('load', ()=>{
    const startButton=document.getElementById('start-button');
    const restartButton=document.getElementById('restart-button');
    
let game

function startGame(){
    console.log('Button clicked')
    console.log('start game')
    game=new Game()
    game.start()

}

startButton.addEventListener('click', ()=> startGame())





})

