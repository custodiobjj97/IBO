export default class ScrollSmooth{
    constructor(links){
        this.links=document.querySelectorAll(links);
        this.handleScroll= this.handleScroll.bind(this)
    }


    handleScroll(event){
            event.preventDefault()
            const href= event.target.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: "smooth", block: "start"})
        
    }


    event(){
        this.links.forEach((element)=>{
            element.addEventListener('click', this.handleScroll)
            
        })
    }


    start(){
        if(this.links.length){
            this.event()
        }
    }
}