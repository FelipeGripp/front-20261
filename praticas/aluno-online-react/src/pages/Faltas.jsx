import Sidebar from '../components/Sidebar'
import Tabela from '../components/Tabela';
import Topbar from '../components/Topbar';


function Faltas() {
    const colunas = [
        "Disciplina",
        "Faltas",
        "Presença"
    ]
    const faltas = [
    [
        ["BI e Data Warehousing", "0", "100%"],
        ["Construção de FrontEnd", "0", "100%"],
        ["Devops", "0", "100%"],
        ["Manutenção de Software e Devops", "0", "100%"],
    ],
    [
        ["Estrutura de Dados", "5.5", "5.5", "", "MM"],
        ["Construção de Backend", "0.0", "6.0", "4.0", "MM"],
        ["Gerenciamento de Projetos", "27","87.5%"],
    ],
    [
        ["Engenharia de Software", "5.5", "5.5", "", "MM"],
        ["Dispositivos Moveis", "0.0", "6.0", "4.0", "MM"],
        ["Estaística", "8.0", "9.0", "", "MS"],
    ],
]
    return (
   <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Minhas Faltas" />

    <h2> Histórico de Faltas por semestre </h2>

    <Tabela titulo="2026.1" colunas={colunas} dados={faltas[0]}/>
    <Tabela titulo="2025.2" colunas={colunas} dados={faltas[1]}/>
    <Tabela titulo="2025.1" colunas={colunas} dados={faltas[2]}/>

    </main>
    </div>
    )
}

export default Faltas;