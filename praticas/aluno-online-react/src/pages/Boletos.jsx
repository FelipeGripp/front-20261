import './Boletos.css'
import Sidebar from '../components/Sidebar'
import TableBoletos from '../components/TableBoletos';
import Topbar from '../components/Topbar'

function Boletos () {
return (
    <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Meus boletos" />

    <h2> Histórico de Pagamentos </h2>

    <TableBoletos />    
    </main>
    </div>
)
}

export default Boletos;