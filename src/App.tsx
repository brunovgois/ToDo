import "./App.css";
import Logo from "./assets/Logo.svg";
import plus from "./assets/plus.png";
import Clipboard from "./assets/Clipboard.png";

function App() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo for the ToDo App" />
      </header>

      <div className="inputContainer">
        <div className="innerInputContainer">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            <p>Criar</p>
            <img src={plus} alt="" />
          </button>
        </div>

        <div className="innerInputContainerHeader">
          <div>
            <p className={`label purple`}>Tarefas criadas</p>
            <p className="counter">0</p>
          </div>
          <div>
            <p className={`label blue`}>Concluídas</p>
            <p className="counter">0</p>
          </div>
        </div>
      </div>

      <div className="noTasksContainer">
        <img src={Clipboard} alt="" />
        <p className="noTasksText">Você ainda não tem tarefas cadastradas</p>
        <p className="noTasksText">Cria tarefas e organize seus itens a fazer</p>
      </div>
    </>
  );
}

export default App;
