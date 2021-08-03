import {
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  EDIT_TASK,
} from "../actions_names";
import { nanoid } from "nanoid";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: "todo-" + nanoid(),
        name: action.payload,
        completed: false,
      };
      return [newTask, ...state];
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);
    case EDIT_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, name: action.text };
        }
        return task;
      });
    default:
      return state;
  }
};

export default reducer;
