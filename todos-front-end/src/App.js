import { useState, useEffect } from 'react';
import axios from 'axios';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get('/todos');
      setTodos(response.data);   // This won't run for one reason, exlained in text
      }
    
    loadTodos();
  }, []); // We want this effect only to be called when App component is first rendered, so we pass empty array as the 2nd argument

  const createTodo = async todoText => {
    const response = await axios.post('/todos', {newTodoText: todoText});    // Supply new text
    const newTodo = response.data;      // Obtain the JSON object that was returned
    setTodos(todos.concat(newTodo));    // Add the new JSON object to a current todos - change the state! 
  }

  const completeTodo = async todoID => {
    //...
  }

  const deleteTodo = async todoID => {
    //...
  }

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm onClickCreate={createTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
