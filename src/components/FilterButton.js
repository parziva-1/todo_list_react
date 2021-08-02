import React from "react";

export default function FilterButton({ name, isPressed, setFilter }) {

  return (
    <button type="button" className="btn toggle-btn" aria-pressed={isPressed} onClick={() => setFilter(name)}>
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}


      // key={name}
      // name={name}
      // isPressed={name === filter}
      // setFilter={setFilter}