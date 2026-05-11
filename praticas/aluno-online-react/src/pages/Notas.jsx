import Sidebar from '../components/Sidebar'
import TableNotas from '../components/TableNotas';
import Topbar from '../components/Topbar'

function Notas() {
    return (
       <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Minhas Notas" />

    <h2> Histórico de Pagamentos </h2>

    <TableNotas />  
    </main>
    </div>
    );
}

export default Notas;