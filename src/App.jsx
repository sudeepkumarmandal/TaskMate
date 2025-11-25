import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask.jsx";
import Header from "./Components/Header.jsx";
import ShowTask from "./Components/ShowTask.jsx";
const App = () => {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);

  const [task, setTask] = useState({});
  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(taskList))
  },[taskList])
  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
     
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
};

export default App;
