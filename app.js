const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const todo = input.value;
    let todoEl = document.createElement('li');
    todoEl.innerHTML = todo;

    deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';

    todoEl.appendChild(deleteBtn)
    todos.appendChild(todoEl);

    deleteBtn.addEventListener('click', function() {
        todoEl.remove()
    });




    input.value = '';

});