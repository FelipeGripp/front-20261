import Card from '../components/Card.jsx';
import Main from '../components/Main.jsx';
import Sidebar from '../components/Sidebar.jsx';


function Dashboard() {
    const avisos = [
        "Eleição para representante de turma",
        "Inscrição para o projeto de extensão"
    ]

    const datas = [
        "27/04 - Avaliação A1"
    ]

    const disciplinas = [
        "Construção de FrontEnd",
        "Devops",
        "Business Intelligence"
    ]

    return (
        <>
            <Sidebar />
            <Main titulo="Olá, Aluno" subtitulo="Bem-vindo ao portal do aluno">
                <Card titulo="Mural do Aluno" itens={avisos}/>
                <Card titulo="Calendário Acadêmico" itens={datas}/>
                <Card titulo="Minhas Disciplinas" itens={disciplinas}/>
            </Main>
        </>
    );
}

export default Dashboard;