const todoIn = document.querySelector('#todoIn');
const add = document.querySelector('#addBtn');
const listTodo = document.querySelector('.list-todo');
let check = true;
let  arr = [];



class todoSchema {
    constructor(id,todoText,check){
        this.id = id;
        this.todoText = todoText;
        this.check = check
    }
}
function randomId(){
    id = Math.random().toString().split('.')[1]
    return id
}
addEventListener('load',show)


add.addEventListener('click',createTodo);

function createTodo(){
    let test = document.createElement('li');
    let Dlt = document.createElement('button');
    let update = document.createElement('button');
    let check = document.createElement('button');
    let todoText = document.createElement('input');
    let todoObject = new todoSchema(randomId(),todoIn.value,true);
    Dlt.setAttribute('data-id',`${todoObject.id}`)
    Dlt.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    update.innerHTML = `<i class="fa-solid fa-file-pen"></i>`;
    check.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    todoText.value = todoIn.value;
    todoText.setAttribute('readonly','readonly')
    test.appendChild(todoText)
    test.appendChild(Dlt);
    test.appendChild(update);
    test.appendChild(check);
    listTodo.appendChild(test);
   
    saveLocal(todoObject)
    
}
function saveLocal(arg){
    if(localStorage.getItem('todo')==null){
         arr.push(arg);
         localStorage.setItem('todo',JSON.stringify(arr))
    }else{
        let localArr =  JSON.parse( localStorage.getItem('todo'))
        localArr.push(arg);
        localStorage.setItem('todo',JSON.stringify(localArr))

    }

}

function show(){
    let localArr =  JSON.parse( localStorage.getItem('todo'))
    console.log(localArr)
    localArr.forEach(element => {
        let test = document.createElement('li');
        let Dlt = document.createElement('button');
        let update = document.createElement('button');
        let check = document.createElement('button');
        let todoText = document.createElement('input');
        Dlt.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        update.innerHTML = `<i class="fa-solid fa-file-pen"></i>`;
        check.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
        todoText.value = element.todoText;
        todoText.setAttribute('readonly','readonly')
        test.appendChild(todoText)
        test.appendChild(Dlt);
        test.appendChild(update);
        test.appendChild(check);
        listTodo.appendChild(test);
    });
}



listTodo.addEventListener('click',(e)=>{
    let elTarget = e.target;
    if(elTarget.className === "fa-solid fa-trash"){
        let parentEl = elTarget.parentElement
        let deleteId = parentEl.dataset.id;
        let deleteEl = parentEl.parentElement
        deleteEl.remove();
        let localArr =  JSON.parse( localStorage.getItem('todo'))
        let newarr = localArr.filter((element)=>{
            return element.id != deleteId
        })
        console.log(newarr)
        localStorage.setItem('todo',JSON.stringify(newarr))

    }
})
listTodo.addEventListener('click',(e)=>{
    let elTarget = e.target;
   
    if(elTarget.className === "fa-solid fa-file-pen"){
   
        if(!check){
            let parentEl = elTarget.parentElement
            let editparent = parentEl.parentElement
            let editEl = editparent.children[0];
            editEl.setAttribute("readonly","readonly");
            check=true;
        }else  {
            let parentEl = elTarget.parentElement
            let editparent = parentEl.parentElement
            let editEl = editparent.children[0];
            editEl.removeAttribute('readonly');
            check = false;
        }
    }
    
})
listTodo.addEventListener('click',(e)=>{
    let elTarget = e.target;
    if(elTarget.className === "fa-solid fa-square-check"){
        let parentEl = elTarget.parentElement
        let editparent = parentEl.parentElement
        let editEl = editparent.children[0];
        editEl.classList.toggle('check');
    }
})









