import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState([]);

  // Fetch the initial to-do list from the server
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:5000/todos');
        setTodoList(response.data);
      } catch (error) {
        console.error("Error fetching the to-do list:", error);
      }
    })();
  }, []);

  // Callback to add a new todo
  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post("http://localhost:5000/todos", newTodo, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTodoList([...todoList, response.data]);
    } catch (error) {
      console.error("Error adding a new to-do:", error);
    }
  };

  // Callback to update a todo in the local state
  const updateTodo = async (updatedTodo) => {
    try {
      await axios.put(`http://localhost:5000/todos/${updatedTodo.id}`, updatedTodo);
      setTodoList((prevList) =>
        prevList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("Error updating the to-do:", error);
    }
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      {
        todoList.map((item) => (
          <TodoList key={item.id} todoItem={item} updateTodo={updateTodo} />
        ))
      }
    </>
  );
}

export default App;
