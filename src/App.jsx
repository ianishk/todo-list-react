import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import AllTasks from './components/AllTasks';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  
  const [inputDatabase, setInputDatabase] = useState([]);

  return (
    <div>
      <h3 style={{textAlign: 'center', marginTop: '20px'}}>Todo List</h3>
      <Form inputDatabase = {inputDatabase} setInputDatabase = {setInputDatabase}/>
      <AllTasks inputDatabase = {inputDatabase} setInputDatabase = {setInputDatabase} ></AllTasks>
    </div>
  );
}

export default App;
