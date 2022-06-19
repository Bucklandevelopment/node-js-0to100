/**
 * Simple object with list of todos with name and description
 */
const crypto = require('crypto');
const uuid = crypto.randomUUID;

const todoList = {
    todos: [
        {
            id: uuid(),
            name: 'Learn JavaScript',
            description: 'Learn JavaScript and make it awesome'
        },
        {
            id: uuid(),
            name: 'Learn React',
            description: 'Learn React and make it awesome'
        }
    ]
}

console.table(todoList.todos);
