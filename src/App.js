import './App.css';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Task from './components/Task';

var taskList = [{task:"wash the car",
description:"written by bob"},{task:"Task with droppen menu",
description:"written by bob"},
{task:"Badge on the right task",
description:"written by bob"},
{task:"Go grocerry shopping",
description:"written by jony"}
]
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <div className='c1'>
           <Task taskList={taskList}/>
            <Chat/>
      </div>

    </div>
  );
}

export default App;
