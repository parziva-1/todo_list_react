import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import { useStickyState } from "./lib";

function App() {
  const [filter, setFilter] = useState("All");
  const [task, setTask] = useStickyState([], "tasks");

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid(), name, completed: false };
    //let newArr = [newTask].concat(task)

    //setTask(newArr);
    setTask([newTask, ...task]);
  };

  const toggleTaskCompleted = (id) => {
    task.forEach((elemento, i) => {
      if (elemento.id === id) {
        task[i].completed = !task[i].completed;
        setTask([...task]);
      }
    });
  };

  const removeTask = (id) => {
    setTask(task.filter((tasks) => id !== tasks.id));
  };

  const edditTask = (id, newContent) => {
    console.log(id, newContent);
    task.forEach((elemento, i) => {
      if (elemento.id === id) {
        task[i].name = newContent;
        console.log(task[i].name);
        setTask([...task]);
      }
    });
  };

  const taskList = task
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        removeTask={removeTask}
        edditTask={edditTask}
      />
    ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">
        {task.length > 0
          ? task.length === 1
            ? filter === "Active" || filter === "Completed"
              ? taskList.length === 0
                ? filter === "Active"
                  ? "You no tasks active"
                  : "You have no completed tasks "
                : taskList.length + " task remaining"
              : task.length + " task remaining"
            : filter === "Active" || filter === "Completed"
            ? taskList.length === 0
              ? filter === "Active"
                ? "You no tasks active"
                : "You have no completed tasks "
              : taskList.length + " tasks remaining"
            : task.length + " tasks remaining"
          : "No tasks found, add one"}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
