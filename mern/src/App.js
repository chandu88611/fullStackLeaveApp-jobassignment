
import { useState } from 'react';
import './App.css';
 import LeaveForm from './components/LeaveForm';
import Content from './components/Content';
function App() {
  const [value,setValue]=useState(false)
  return (
    <div className="App">
   { value?<LeaveForm  value={setValue}/>
     :<Content value={setValue}/>}
    </div>
  );
}

export default App;
