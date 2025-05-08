const express = require('express');
const uuid = require('uuid');    // import the uuid module

let fakeTodos = [{    // change const to let as this can be modified now
    id: 123,
    text: 'Go to the grocery store',
    isComplete: false, 
}, {
    id: 234,
    text: 'Learn full-stack development',
    isComplete: true, 
}];

const app=express();
app.use(express.json());

app.get('/todos', (req, res) => {
    res.json(fakeTodos);    // also res.send(fakeTodos); the same effect
});

app.post('/todos', (req, res) => {
    const newTodoText = req.body.newTodoText;   // Add .newTodoTest - missed it earlier
    const newTodo = {
        id: uuid.v4(),    // Generate
        text: newTodoText,
        isCompleted: false,
    }
    fakeTodos.push(newTodo); // push new JSON item. Later will be DATABASE operation
    res.json(newTodo); // respond with a new JSON object - good to do
});

app.delete('/todos/:todoId', () => {
    const todoId = req.params.todoId;
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
