import { Link } from 'react-router-dom';
import TableRequerimentos from '../components/TableRequerimento';
import './Requerimentos.css';

function Requerimentos() {
  return (
    <section className="requerimentos-content">
      <div className="requerimentos-header">
        <h2>Fa&ccedil;a a solicita&ccedil;&atilde;o online para a secretaria</h2>
        <Link className="novo-requerimento-link" to="/requerimentos/novo">
          + Novo Requerimento
        </Link>
      </div>
      <TableRequerimentos />
    </section>
  );
}

export default Requerimentos;
