import Sidebar from '../components/Sidebar'
import Tabela from '../components/Tabela';
import Topbar from '../components/Topbar';


function Notas() {
    const colunas = [
        "Disciplina",
        "A1",
        "A2",
        "A3",
        "Menção"
    ]
    const notas = [
    [
        ["BI e Data Warehousing", "", "", "", "SR"],
        ["Construção de FrontEnd", "", "", "", "SR"],
        ["Devops", "", "", "", "SR"],
    ],
    [
        ["Estrutura de Dados", "5.5", "5.5", "", "MM"],
        ["Construção de Backend", "0.0", "6.0", "4.0", "MM"],
        ["Gerenciamento de Projetos", "8.0", "9.0", "", "MS"],
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
       
        <Topbar titulo="Minhas Notas" />
    <h2> Histórico de notas por semestre </h2>


    <Tabela titulo="2026.1" colunas={colunas} dados={notas[0]}/>
    <Tabela titulo="2025.2" colunas={colunas} dados={notas[1]}/>
    <Tabela titulo="2025.1" colunas={colunas} dados={notas[2]}/>
    
    </main>
    </div>
    );
}

export default Notas;