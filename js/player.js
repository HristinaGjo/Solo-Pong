class Player {
    constructor(gameScreen){
        this.gameScreen=gameScreen
        this.left=700
        this.top=580
        this.height=20
        this.width=100
        this.directionX = 0
        


        this.element=document.createElement('img')
        this.element.src='../images/Block.png'
        this.element.style.position='absolute'

        this.element.style.height=`${this.height}px`
        this.element.style.width=`${this.width}px`

        this.element.style.left=`${this.left}px`
        this.element.style.top=`${this.top}px`

        this.gameScreen.appendChild(this.element)

       

    }

    


    move(){
        if(this.left <=1050){
            this.left+=this.directionX
        } else {
            this.left=1050
        }

        if(this.left>=350){
            this.left+=this.directionX
        } else{
            this.left=350
        }
        
        /*console.log(this.directionX)*/
        this.updatePosition();
        /*console.log(this.left)*/
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
      }

}