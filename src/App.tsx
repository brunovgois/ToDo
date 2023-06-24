import "./App.css";
import Logo from "./assets/Logo.svg";
import plus from "./assets/plus.png";
import Clipboard from "./assets/Clipboard.png";
import Task, { taskType } from "./components/Task";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState<Array<taskType>>([]);
  const [taskName, setTaskName] = useState("");

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1;
    }
    return acc;
  }, 0);
  function createTask() {
    if (taskName) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          content: taskName,
          checked: false,
        },
      ]);
      setTaskName("");
    }
  }

  function handleDeleteTask(id: string) {
    if (tasks.find((task) => task.id === id)) {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    }
  }

  function handleChangeStatus(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task
    });

    setTasks(newTasks);
  }

  return (
    <>
      <header>
        <img src={Logo} alt="Logo for the ToDo App" />
      </header>

      <div className="inputContainer">
        <div className="innerInputContainer">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                createTask();
              }
            }}
          />
          <button onClick={createTask}>
            <p>Criar</p>
            <img src={plus} alt="" />
          </button>
        </div>

        <div className="innerInputContainerHeader">
          <div>
            <p className={`label purple`}>Tarefas criadas</p>
            <p className="counter">{tasks.length}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className={`label blue`}>Concluídas</p>
            <span className="counter">
              {completedTasks} de {tasks.length}
            </span>
          </div>
        </div>
      </div>

      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <Task
              task={task}
              onDelete={() => handleDeleteTask(task.id)}
              key={task.id}
              onChange={() => handleChangeStatus(task.id)}
            />
          ))}
        </div>
      ) : (
        <div className="noTasksContainer">
          <img src={Clipboard} alt="" />
          <p className="noTasksText">Você ainda não tem tarefas cadastradas</p>
          <p className="noTasksText">
            Cria tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  );
}

export default App;
