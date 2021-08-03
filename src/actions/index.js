import {
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  EDIT_TASK,
} from "../actions_names";

const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

const toggleTaskCompleted = (id) => {
  return {
    type: TOGGLE_TASK,
    id,
  };
};

const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};

const editTask = (id, text) => {
  return {
    type: EDIT_TASK,
    id,
    text
  };
};
export { addTask, toggleTaskCompleted, removeTask, editTask };
