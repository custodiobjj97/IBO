export default function outsideClick(element,callback){
    const html = document.documentElement;
    const outside="data-outside";
    const events=['click','touchstart'];




    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            events.forEach((userEvent)=>{html.removeEventListener(userEvent, handleOutsideClick)})
            element.removeAttribute(outside)
            callback()
        }
    }


    if(!element.hasAttribute(outside)){
        element.setAttribute(outside,'');
        setTimeout(()=>{events.forEach((userEvent)=>{html.addEventListener(userEvent,handleOutsideClick)})})
    }
}