import { useState } from "react";
import garbageIcon from "../assets/garbageIcon.svg";
import "./Task.css";

export type taskType = {
  id: string;
  content: string;
  checked: boolean;
};

type taskProps = {
  task: taskType;
  onDelete: () => void;
  onChange: () => void;
};

export default function Task({ task, onDelete, onChange }: taskProps) {
  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <div className="container">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => {
            setTaskCompleted(!taskCompleted);
            onChange();
          }}
        />
        <p
          style={
            taskCompleted
              ? { textDecoration: "line-through", opacity: 0.3 }
              : {}
          }
        >
          {task.content}
        </p>
      </div>

      <img src={garbageIcon} alt="Delete task" onClick={onDelete} />
    </div>
  );
}
