const title = document.getElementById("title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    
    //contains은 true 아니면 false를 준다
    /*const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else{
        title.classList.remove(CLICKED_CLASS);
    }*/
}

function init(){
    title.addEventListener("click", handleClick);
}
init();



//함수에()는 함수를 바로 호출하고 괄호없이 함수명만 적는다면 바로 호출하지 않고 해당할 때 호출됨
