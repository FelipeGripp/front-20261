import './Boletos.css'
import Sidebar from '../components/Sidebar'
import Tabela from '../components/Tabela'
import Topbar from '../components/Topbar'

function Boletos () {
    const colunas = [
        "Vencimento",
        "Valor R$",
        "Situação"
    ]

    const boletos = [
        [
            ["19/01/2026","500,00","Pago"],
            ["19/02/2026","500,00","Em atraso"],
            ["19/03/2026","500,00","A Pagar"],
            ["19/04/2026","500,00","A Pagar"],
            ["19/05/2026","500,00","A Pagar"],
            ["19/06/2026","500,00","A Pagar"],
            ["19/07/2026","500,00","A Pagar"],
            ["19/08/2026","500,00","A Pagar"],
            ["19/09/2026","500,00","A Pagar"],
            ["19/10/2026","500,00","A Pagar"],
            ["19/11/2026","500,00","A Pagar"],
            ["19/12/2026","500,00","A Pagar"],
            ["19/03/2026","500,00","A Pagar"],
            ["19/01/2027","500,00","A Pagar"],
            ["19/02/2027","500,00","A Pagar"]
        ],
       
    
    ]
return (
    <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Meus boletos" />

    <h2> Histórico de Pagamentos </h2>

    <Tabela colunas={colunas} dados={boletos[0]}/>
    </main>
    </div>
)
}

export default Boletos;