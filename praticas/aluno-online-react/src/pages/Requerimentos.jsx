import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TableRequerimentos from '../components/TableRequerimento';
import { listarRequerimentos } from '../services/requerimentoService';
import './Requerimentos.css';

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarRequerimentos() {
      try {
        const dados = await listarRequerimentos();
        setRequerimentos(dados);
        setErro('');
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarRequerimentos();
  }, []);

  return (
    <section className="requerimentos-content">
      <div className="requerimentos-header">
        <h2>Fa&ccedil;a a solicita&ccedil;&atilde;o online para a secretaria</h2>
        <Link className="novo-requerimento-link" to="/requerimentos/novo">
          + Novo Requerimento
        </Link>
      </div>

      {carregando && <p className="requerimentos-feedback">Carregando requerimentos...</p>}
      {erro && <p className="requerimentos-error">{erro}</p>}
      {!carregando && !erro && <TableRequerimentos requerimentos={requerimentos} />}
    </section>
  );
}

export default Requerimentos;
