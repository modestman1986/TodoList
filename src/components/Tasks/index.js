import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";
import Task from "./Task";

function Tasks({ data, setTaskState,removeTaskInState }) {
  return (
    <ul className="list">
      {data.map((task) => (
        <Task  
          key={task.id}
          removeTaskInState={removeTaskInState}
          setTaskState={setTaskState}
          {...task}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })).isRequired,
  removeTaskInState: PropTypes.any,
  setTaskState: PropTypes.func.isRequired
}

export default React.memo(Tasks);
