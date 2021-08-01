import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import { useStickyState } from "./lib";

function App() {
  const [task, setTask] = useStickyState([], "tasks");

  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid(), name, completed: false };
    //let newArr = [newTask].concat(task)
    
    //setTask(newArr);
    setTask([newTask, ...task]);
  };

  const toggleTaskCompleted = (id) => {
    task.forEach((elemento, i) =>{
      if(elemento.id === id) {
        task[i].completed = !task[i].completed
        setTask([...task])
      } 
    });
  };

  const removeTask = (id) => {
    setTask(task.filter((tasks) => id !== tasks.id));
  };

  const edditTask = (id, newContent) => {
    console.log(id, newContent);
    task.forEach((elemento, i) =>{
      if(elemento.id === id) {

        task[i].name = newContent
        console.log(task[i].name);
        setTask([...task])
      } 
    });
  };

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton type="All" pressed={true} />
        <FilterButton type="Active" pressed={false} />
        <FilterButton type="Completed" pressed={false} />
      </div>
      <h2 id="list-heading">
        {task.length > 0
          ? task.length === 1
            ? task.length + " task remaining"
            : task.length + " tasks remaining"
          : ""}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {task.map((task) => (
          <Todo
            key={task.id}
            name={task.name}
            completed={task.completed}
            id={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            removeTask={removeTask}
            edditTask={edditTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
