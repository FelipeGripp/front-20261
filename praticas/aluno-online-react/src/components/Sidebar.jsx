import './Sidebar.css'
import Menu from "./Menu"

function Sidebar() {
    return (
        <div class= 'sidebar'>
        <header>
          <img src="../src/assets/learn.svg" alt="Icone do Capelo"/>
          <h3>Aluno Online</h3>
        </header>

        <Menu />
        </div>
    )
}

export default Sidebar;