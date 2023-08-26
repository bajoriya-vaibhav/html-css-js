const todolist = [];
function addtodo() {
  const input = document.querySelector('.todo-1').children[1];
  todolist.push(input.value);
  for(let x in todolist){
    console.log(todolist[x]);
  }
}

const todolist2 = [];

function render(){
  let str = '';
  for(let x in todolist2){
    str+=`<p>${todolist2[x]}<button onclick='todolist2.splice(${x},1);render();'>Delete</button></p>`;
  }
  document.querySelector('.display').innerHTML=str;
}

function addtodo2() {
  const input = document.querySelector('.todo-2').children[1];
  todolist2.push(input.value);
  input.value='';
  render();
}


