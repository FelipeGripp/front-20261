import Card from '../components/Card';
import './Dashboard.css';

function Dashboard() {
    return (
        <section className="dashboard-grid">
            <Card title="Notas" value="8.5" />
            <Card title="Frequência" value="92%" />
            {}
        </section>
    );
}

export default Dashboard;