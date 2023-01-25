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
          <input type="text" />
          <button>
            <p>Criar</p>
            <img src={plus} alt="" />
          </button>
        </div>

        <div className="innerInputContainerHeader">
          <div>
            <p>Tarefas criadas</p>
            <p>0</p>
          </div>
          <div>
            <p>Concluídas</p>
            <p>0</p>
          </div>
        </div>

      </div>

      <img src={Clipboard} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Cria tarefas e organize seus itens a fazer</p>
    </>
  );
}

export default App;
