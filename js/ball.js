class Ball{
    constructor(gameScreen){
        this.gameScreen=gameScreen
        this.width=25
        this.height=25
        this.left=360
        this.top=500



        this.element=document.createElement('img')
        this.element.src='../images/Ball.png'
        this.element.style.position='absolute'
        


        this.element.style.width=`${this.width}px`
        this.element.style.height=`${this.height}px`

        this.element.style.left=`${this.left}px`
        this.element.style.top=`${this.top}px`

        this.gameScreen.appendChild(this.element)

    }

    move(){

        if(this.left<=1125 && this.top>=105){
            this.left+=2
            this.top-=2
        }else{
            this.left=1125
            this.top=350
        }

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