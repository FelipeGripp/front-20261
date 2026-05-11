import Sidebar from '../components/Sidebar'
import TableFaltas from '../components/TableFaltas';
import Topbar from '../components/Topbar'

function Faltas() {
    return (
   <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Minhas Faltas" />

    <h2> Histórico de Faltas por semestre </h2>

    <TableFaltas />    
    </main>
    </div>
    )
}

export default Faltas;