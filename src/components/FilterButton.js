import React from "react";

export default function FilterButton({ type, pressed }) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed={pressed}>
      <span className="visually-hidden">Show </span>
      <span>{type}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
