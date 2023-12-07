class Ball{

    constructor(gameScreen, player){
        this.gameScreen=gameScreen
        this.player=player
        this.width=25
        this.height=25
        this.left=360
        this.top=500
        this.directionX=3;
        this.directionY=-3;
        this.score=0
        this.lives=3
        this.isGameOver = false
           
        this.element=document.createElement('img')
        this.element.src='./images/ball.png'
        this.element.style.position='absolute'
        this.element.style.boxShadow=' #2980b9'
        

        this.element.style.width=`${this.width}px`
        this.element.style.height=`${this.height}px`

        this.element.style.left=`${this.left}px`
        this.element.style.top=`${this.top}px`

        this.gameScreen.appendChild(this.element)

       /* console.log('this ball position',this.left) */
    }

    move(){

        this.top+=this.directionY
        this.left+=this.directionX 
        if(this.top<=105){
            this.directionY =(this.directionY)*(-1)
        }  if(this.left>=1150){
            this.directionX=(this.directionX)*(-1)
        }  if (this.left<=300){
            this.directionX=(this.directionX)*(-1)
        }  if((this.left<(this.player.left+this.player.width)) && (this.left>=this.player.left) && (this.top===(this.player.top-this.player.height))){
            this.directionY=(this.directionY)*(-1) 
            this.score+=10     
            
            /*console.log('Before width reduction:', this.player.width);*/
            this.player.width -= 10; 
           if (this.player.width < 0) {
            this.player.width = 0;      
         }

    /*console.log('After width reduction:', this.player.width);*/
        }  if (this.top>=600){
            this.lives-=1
            this.left=700
            this.top=200

           /* console.log('Lives decremented', this.lives); */

        }  if (this.lives <= 0) {
            this.isGameOver = true
            /* console.log('Game over! Lives:', this.lives); */
          }

        document.getElementById('score').innerText = this.score
        document.getElementById('lives').innerText = this.lives

        /* console.log('this player position',this.player.left,this.player.top,this.player.width)*/
 
        this.player.updateWidth()
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


         /* if (this.top==600) {
            this.top+=this.directionY
            this.left+=this.directionX
        } */



       /* move(){

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
                this.score+=10       
            }  if (this.top>=600){
                this.lives-=1
                this.left=700
                this.top=200
    
               console.log('Lives decremented', this.lives); */
    
          