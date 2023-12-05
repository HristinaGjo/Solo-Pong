window.addEventListener('load', ()=>{
    const startButton=document.getElementById('start-button');
    const restartButton=document.getElementById('restart-button')

    
let game

function startGame(){
    console.log('Button clicked')
    console.log('start game')
    game=new Game()
    game.start()

}

startButton.addEventListener('click', function (){ 
    startGame()
})

restartButton.addEventListener('click', function () {
    // startGame()
    location.reload()
  })


document.addEventListener('keydown', event => {
    if(event.code==='ArrowLeft'){
    console.log('go left')
        game.player.directionX=-2
    }
    if(event.code==='ArrowRight'){
        console.log('go right')
        game.player.directionX=2
    }
})

document.addEventListener('keyup',event=>{
    if(event.code==='ArrowLeft' || event.code==='ArrowRight'){
        console.log('stop moving on X')
        game.player.directionX=0;

    }
})

})

