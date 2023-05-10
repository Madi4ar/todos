import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';


function App() {

  const savedTodos = JSON.parse(localStorage.getItem('todo') || '[]');
  const [todo, setTodo] = useState(savedTodos);
    
  useEffect(() => {
      localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);
  
   
  return (
    <div className="App">
     <Header />
     <AddTodo todo={todo} setTodo={setTodo}/>  
     <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
