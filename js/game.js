class Game{
    constructor() {
        this.startScreen=document.getElementById('game-intro');
        this.gameScreen=document.getElementById('game-screen');
        this.endScreen=document.getElementById('game-end');
      
    }

    start(){
        this.startScreen.style.display='none'
        this.endScreen.style.display='none'
        this.gameScreen.style.display='block'
       
    }






}