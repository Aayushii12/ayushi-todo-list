   function addtodo() {
   console.log("addtodo is working")
    var todoInput =document.getElementById("input1")
    var todo =todoInput.value
    console.log(todo)
   if(todo ==='') 
   {
    alert("please enter todo")
    return;
   }

   var todolist = document.getElementById("orderd-todo-list")
   var todoItem = document.createElement('li')
   todoItem.innerText = todo

   var deleteButton =document.createElement('button')
   deleteButton.innerText ='Delete'
   deleteButton.onclick =function () {
    todolist.removeChild(todoitem)
   }
   var editbutton =document.createElement('button')
   editbutton.innerText ='Edit'
   editbutton.onclick =function() {
    var newTodo =prompt('Enter new todo')
    console.log(newTodo)
    todoItem.innerText =newTodo
    todoItem.appendChild(deleteButton)
    todoItem.appendChild(editbutton)
   }



   todolist.appendChild(todoItem)
   todoItem.appendChild(deleteButton)
   todoItem.appendChild(editbutton)
   todoInput.value =''
}
 document.getElementById('input1').addEventListener('keypress',function(e){
    if(e.key ==='Enter'){
        console.log('enter key is pressed')
        addtodo();
        

    }

    
 })

    
    

