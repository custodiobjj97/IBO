export default class scrollAnimation{
    constructor(elements){
        this.elements=document.querySelectorAll(elements);
        this.activeClass="visible";
        this.handleScroll = this.handleScroll.bind(this);
    };

    handleScroll(){
       this.elements.forEach((element)=>{
         const top = element.getBoundingClientRect().top;
         const halfHeight = window.innerHeight * 0.6;
         const isVisible = (top - halfHeight) < 0
         if(isVisible){
            element.classList.add(this.activeClass)
         }
       });
    }


    eventScroll(){
        window.addEventListener('scroll', this.handleScroll);
    };


    start(){
        if(this.elements.length){
            this.handleScroll();
            this.eventScroll()
        }
    }

}