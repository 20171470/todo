const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';
let toDos = [];

function saveToDos(){
    //자바스크립트는 로컬에 있는 데이터를 string으로 저장한다
    //그래서 우리 오브젝트를 스트링이 되도록 바꿔야 한다.JSON으로
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}



function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li"); //li생성
    const delBtn = document.createElement("button"); //버튼 생성
    const newId = toDos.length + 1  //비어있을 때도 id값을 주기 위해서 +1을 한다.
    const span = document.createElement("span");

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;  //내가 입력한 텍스트를 삽입한다
    //span을 li에 넣고 버튼도 li에 넣는다.
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);   //방금만든 li를 투두리스트로 넣는다
    const toDoObj = {
        text: text,
        id: newId  
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } 
}

    function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init(); 