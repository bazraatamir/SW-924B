const todoIn = document.querySelector('#todoIn');
const add = document.querySelector('#addBtn');
const listTodo = document.querySelector('.list-todo');
let check = true;
let  arr = [];
addEventListener('load',show);


  let todoSchema = class{
        constructor(id,todoText){
            this.id=id,
            this.todoText = todoText;
            this.check = false
        }
  }
function id(){
let Id = Math.random().toString().split(".")[1]
return Id
}

add.addEventListener('click',createTodo);

function createTodo(){
    let test = document.createElement('li');
    let Dlt = document.createElement('button');
    let update = document.createElement('button');
    let check = document.createElement('button');
    let todoText = document.createElement('input');
    let todoObject = new todoSchema(id(),todoIn.value);
    Dlt.setAttribute('data-id',`${todoObject.id}`)
    update.setAttribute('data-id',`${todoObject.id}`)
    check.setAttribute('data-id',`${todoObject.id}`)
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
    saveLocal(todoObject);;
}

function saveLocal(arg){
    if(localStorage.getItem('Todo')===null){
    arr.push(arg)
    localStorage.setItem('Todo',JSON.stringify(arr));

    }else{
        let newarr = JSON.parse(localStorage.getItem('Todo'));
        newarr.push(arg);
         localStorage.setItem('Todo',JSON.stringify(newarr));

    }
   
}

function show(){
    let newArr = JSON.parse(localStorage.getItem('Todo'));
    newArr.forEach(element => {
        let test = document.createElement('li');
        let Dlt = document.createElement('button');
        let update = document.createElement('button');
        let check = document.createElement('button');
        let todoText = document.createElement('input');
        Dlt.setAttribute('data-id',`${element.id}`);
        update.setAttribute('data-id',`${element.id}`)
        check.setAttribute('data-id',`${element.id}`)
        Dlt.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        update.innerHTML = `<i class="fa-solid fa-file-pen"></i>`;
        check.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
        todoText.value = element.todoText;
        if(element.check==true){
            todoText.classList.add('check')
        }
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
    let deleteArr = JSON.parse(localStorage.getItem('Todo'));
    let deletedarr = deleteArr.filter((el)=>{
        return el.id != deleteId
    })
    localStorage.setItem('Todo',JSON.stringify(deletedarr))
        
    }
});
listTodo.addEventListener('click',(e)=>{
    let elTarget = e.target;
    if(elTarget.className === "fa-solid fa-file-pen"){
        if(!check){
            let parentEl = elTarget.parentElement
            let editparent = parentEl.parentElement
            let editId = parentEl.dataset.id;
            let editEl = editparent.children[0];
            editEl.setAttribute("readonly","readonly");
            let editArr = JSON.parse(localStorage.getItem('Todo'));
            let editArrId = editArr.findIndex(element=>{
                return editId === element.id
            })
            editArr[editArrId].todoText=editEl.value;
            localStorage.setItem('Todo',JSON.stringify(editArr))
            check=true;
        }else  {
            let parentEl = elTarget.parentElement
            let editparent = parentEl.parentElement
            let editEl = editparent.children[0];
            editEl.removeAttribute('readonly');
            
            check = false;
        }
    }
    
});

listTodo.addEventListener('click',(e)=>{
    let elTarget = e.target;
    if(elTarget.className === "fa-solid fa-square-check"){
        let parentEl = elTarget.parentElement
        let editId = parentEl.dataset.id;
        let editparent = parentEl.parentElement
        let editEl = editparent.children[0];
        editEl.classList.toggle('check');
        if(editEl.className=='check'){
            let editArr = JSON.parse(localStorage.getItem('Todo'));
            let editArrId = editArr.findIndex(element=>{
                return editId === element.id
            })
            editArr[editArrId].check=true;
            localStorage.setItem('Todo',JSON.stringify(editArr))
        }
    }
});









