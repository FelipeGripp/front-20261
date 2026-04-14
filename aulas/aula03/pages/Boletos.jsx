import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Boletos() {
    return (
        <>
            <Sidebar />
            <Main titulo="Meus Boletos" subtitulo="Histórico de Pagamentos">
                <Tabela />
            </Main>
        </>
    );
}

export default Boletos;