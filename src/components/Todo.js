import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleTaskCompleted, editTask } from "../actions";

const Todo = ({ name, completed, id }) => {
  //suscrito a la store cada cambio que pase en ella va a ejecutar el useEffect
  //para guardar el estado actual en el localStorage
  const store = useSelector((state) => state);

  useEffect(
    () => window.localStorage.setItem("tasks", JSON.stringify(store)),
    [store]
  );

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = React.useState(false);
  const [text, setText] = React.useState(name);

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      dispatch(editTask(id, text));
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <li className="todo stack-small">
      <div className={isEdit ? "" : "c-cb"}>
        {isEdit ? (
          ""
        ) : (
          <input
            id={id}
            type="checkbox"
            defaultChecked={completed}
            onChange={() => dispatch(toggleTaskCompleted(id))}
          />
        )}
        <label className="todo-label" htmlFor={id}>
          {isEdit ? (
            <input
              className="todo-text"
              id={id}
              onChange={handleChange}
              placeholder={name}
            />
          ) : (
            name
          )}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className={isEdit ? "btn btn__primary todo-edit" : "btn"}
          onClick={handleIsEdit}
        >
          {isEdit ? "Save" : "Edit"}{" "}
          <span className="visually-hidden">{name}</span>
        </button>
        {isEdit ? (
          <button
            type="button"
            className="btn todo-cancel"
            onClick={() => setIsEdit(false)}
          >
            Cancel
            <span className="visually-hidden">renaming {name}</span>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => dispatch(removeTask(id))}
          >
            Delete <span className="visually-hidden">{name}</span>
          </button>
        )}
      </div>
    </li>
  );
};

export default Todo;
