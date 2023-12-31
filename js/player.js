class Player {
    constructor(gameScreen){
        this.gameScreen=gameScreen
        this.left=700
        this.top=580
        this.height=20
        this.width=100
        this.directionX = 0
        

        this.element=document.createElement('img')
        this.element.src='./images/block.png'
        this.element.style.position='absolute'
        this.element.style.borderRadius='8px'
        this.element.style.boxShadow='0 0 5px 5px #2980b9'
        

        this.element.style.height=`${this.height}px`
        this.element.style.width=`${this.width}px`

        this.element.style.left=`${this.left}px`
        this.element.style.top=`${this.top}px`

        this.gameScreen.appendChild(this.element)

    }

    
    move(){
        if(this.left <=1075+(100-this.width)){
            this.left+=this.directionX
        } else {
            this.left=1075+(100-this.width)
        }

        if(this.left>=325){
            this.left+=this.directionX
        } else{
            this.left=325
        }
        
        /*console.log(this.directionX)*/
        this.updatePosition();
        /*console.log(this.left)*/
    }

    updateWidth() {
        this.element.style.width = `${this.width}px`; 
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
      }

}