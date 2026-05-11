import './Sidebar.css';
import Menu from "./Menu";
import learnIcon from '../assets/learn.svg';

function Sidebar() {
    return (
        <div className='sidebar'>
            <header>
                <img src={learnIcon} alt="Icone do Capelo" />
                <h3>Aluno Online</h3>
            </header>

            <Menu />
        </div>
    );
}

export default Sidebar;