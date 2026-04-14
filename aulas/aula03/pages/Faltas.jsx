import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Faltas() {
    return (
        <>
            <Sidebar />
            <Main titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
                <Tabela titulo="2026.1"/>
                <Tabela titulo="2025.2"/>
                <Tabela titulo="2025.1"/>
            </Main>
        </>
    );
}

export default Faltas;