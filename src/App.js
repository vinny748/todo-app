import Todocount from './components/Todocount';
import Todolist from './components/Todolist';
import Addtodo from './components/Addtodo';
import './App.css';
import { useState } from 'react'

function App() {
  let [todolist, setTodolist] = useState([])
  return (
    <div className="container text-center">
      <div className='row'>
        <div className='col-sm-4'>
          <Addtodo setTodolist={setTodolist} todolist={todolist} />
        </div>
        <div className='col-sm-4'>
          <Todolist todolist={todolist} />
        </div>
        <div className='col-sm-4'>
          <Todocount todolist={todolist} />
        </div>
      </div>
    </div >
  );
}

export default App;
