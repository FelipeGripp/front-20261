import './Requerimento.css'
function Requerimentos() {
  return (
    <table>
      <thead>
        <tr>
          <th>Tipo de Requerimento</th>
          <th>Data de Solicitação</th>
          <th> Situação</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Revisão de Menção</td>
          <td>15/12/2025</td>
           <td>Indeferido</td>
        </tr>

        <tr>
          <td>Dispensa de Disciplina</td>
          <td>12/06/2025</td>
           <td>Indeferido</td>
        </tr>

        <tr>
          <td>Trancamento de Matricula</td>
          <td>05/01/2024</td>
           <td>Deferido</td>
        </tr>

        <tr>
          <td>Mudança de Turno</td>
          <td>10/10/2023</td>
            <td>Deferido</td>
        </tr>

        <tr>
          <td>Renovação de Matricula</td>
          <td>20/02/2023</td>
           <td>Deferido</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Requerimentos;