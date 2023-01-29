import garbageIcon from "../assets/garbageIcon.svg";
import "./Task.css";


export default function Task({content, checked, onDelete}: any) {
  return (
    <div className="container">
      <div>
        <input type="checkbox" value={checked}/>
        <p>
          {content}
        </p>
      </div>

      <img src={garbageIcon} alt="Delete task" onClick={onDelete} />
    </div>
  );
}
