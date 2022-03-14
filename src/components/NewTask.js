import React from "react";

const NewTask = ({ handleSubmit, handleInputChange, newTask }) => {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="newItem">Add to the todo list</label>
      <input
        type="text"
        id="newItem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
};

export default NewTask;
