import './Requerimento.css';

function TableRequerimentos({ requerimentos = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tipo de Requerimento</th>
          <th>Data de Solicita&ccedil;&atilde;o</th>
          <th>Situa&ccedil;&atilde;o</th>
        </tr>
      </thead>

      <tbody>
        {requerimentos.map((requerimento) => (
          <tr key={requerimento.id}>
            <td>{requerimento.tipo}</td>
            <td>{requerimento.dataRequerimento}</td>
            <td>{requerimento.situacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableRequerimentos;
