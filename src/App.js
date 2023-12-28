import "./styles.css";
import Task from "./Task/Task";
import Header from "./Header/Header";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ]);

  return (
    <div className="App">
      <Header />

      {taskList.map((task, index) => (
        <Task task={task} key={index} />
      ))}
      <br />

      <button
        onClick={() => {
          setTaskList([...taskList, "New Task"]);
        }}
      >
        Regular Button
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          console.log(taskList);
          setTaskList([...taskList, "Additional Task"]);
          console.log(taskList);
        }}
      >
        Add Tasks
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setTaskList([]);
          console.log("Nothing to do buddy. Sleep!");
        }}
      >
        Empty Tasks
      </button>
    </div>
  );
}
