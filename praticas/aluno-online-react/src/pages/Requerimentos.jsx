import TableRequerimentos from '../components/TableRequerimento';
import Topbar from '../components/Topbar'

function Requerimentos() {
    return (
        <section className="requerimentos-content">
            <h2> Faça a solicitação online para a secretaria </h2>
            <TableRequerimentos />    
        </section>
    );
}

export default Requerimentos;