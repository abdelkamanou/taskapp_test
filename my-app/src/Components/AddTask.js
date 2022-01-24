import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { ADD } from "../redux/action";

const AddTask = () => {
  const item = useSelector(state => state.items)

  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD,
      payload: {
        id:item.length+1,
        description: task,
        isDone: false,
      },
    });
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group ">
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
          aria-describedby="button"
          placeholder="Add your task "
        />
        <button className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
};

export default AddTask;