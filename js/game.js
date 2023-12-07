class Game{
    constructor() {
        this.startScreen=document.getElementById('game-intro');
        this.gameScreen=document.getElementById('game-screen');
        this.endScreen=document.getElementById('game-end')
        this.gameResultElement = document.getElementById('game-result');
        this.gameAudio = document.getElementById('game-audio');

        this.height=600
        this.width=1500
        this.animateId = null
    }

    start(){
        this.startScreen.style.display='none'
        this.endScreen.style.display='none'
        this.gameScreen.style.display='block'


        this.gameScreen.style.height=`${this.height}px`
        this.gameScreen.style.width=`${this.width}px`

        this.player=new Player(this.gameScreen)
        this.ball=new Ball(this.gameScreen, this.player)

        this.playBackgroundAudio();
        this.gameLoop()
    }

    playBackgroundAudio() {
        this.gameAudio.play();
    }

    pauseBackgroundAudio() {
        this.gameAudio.pause();
    }

    gameLoop() { 
        this.player.move()
        this.ball.move()


        if (this.ball.isGameOver){
        this.gameScreen.style.display='none'
        this.endScreen.style.display='block'
        this.gameResultElement.innerText = 'You lost.';
        this.pauseBackgroundAudio();
    }

        if (this.player.width === 0) {
            this.gameScreen.style.display='none'
            this.endScreen.style.display='block'
            this.gameResultElement.innerText = 'Congratulations! You won!';
        
        }
            this.animateId = requestAnimationFrame(() => this.gameLoop())
        
    
}
}
/* if (this.ball.top>=600){
    this.gameScreen.style.display='none'
    this.endScreen.style.display='block'
} */


/* gameLoop() { 
    if (this.ball.isGameOver){
    this.gameScreen.style.display='none'
    this.endScreen.style.display='block'
    cancelAnimationFrame(this.animateId);
    } else {
        this.player.move()
        this.ball.move()
        this.animateId = requestAnimationFrame(() => this.gameLoop())
    }

} */


/* gameLoop() { 
    this.player.move()
    this.ball.move()

    if (this.ball.isGameOver){
    this.gameScreen.style.display='none'
    this.endScreen.style.display='block'
    
    } else{
    this.animateId = requestAnimationFrame(() => this.gameLoop())

    }
       
  } */