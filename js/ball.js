class Ball{
    constructor(gameScreen, player){
        this.gameScreen=gameScreen
        this.player=player
        this.width=25
        this.height=25
        this.left=360
        this.top=500
        this.directionX=2;
        this.directionY=-2;

        



        this.element=document.createElement('img')
        this.element.src='./images/Ball.png'
        this.element.style.position='absolute'
        


        this.element.style.width=`${this.width}px`
        this.element.style.height=`${this.height}px`

        this.element.style.left=`${this.left}px`
        this.element.style.top=`${this.top}px`

        this.gameScreen.appendChild(this.element)

        console.log('this ball position',this.left)

    }

    move(){

        this.top+=this.directionY
        this.left+=this.directionX

        if(this.top<=105){
            this.directionY =(this.directionY)*(-1)
        }  if(this.left===1150){
            this.directionX=(this.directionX)*(-1)
        }  if (this.left===300){
            this.directionX=(this.directionX)*(-1)
        }  if((this.left<(this.player.left+this.player.width)) && (this.left>this.player.left) && (this.top===(this.player.top-this.player.height))){
            this.directionY=(this.directionY)*(-1)
        }  
        
        
        /* if (this.top==600) {
            this.top+=this.directionY
            this.left+=this.directionX
        } */


        console.log('this player position',this.player.left,this.player.top,this.player.width)
 

        this.updatePosition();

    }
    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
     
}

/*if(this.left<=1125 && this.top>=105){
            this.left+=2
            this.top-=2
        }else{
            this.left=1125
            this.top=400
        }*/