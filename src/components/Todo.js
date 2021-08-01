import React from "react";

const Todo = ({
  name,
  completed,
  id,
  toggleTaskCompleted,
  removeTask,
  edditTask,
}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [text, setText] = React.useState(name);

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      edditTask(id, text);
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
            onChange={() => toggleTaskCompleted(id)}
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
            onClick={() => removeTask(id)}
          >
            Delete <span className="visually-hidden">{name}</span>
          </button>
        )}
      </div>
    </li>
  );
};

export default Todo;
