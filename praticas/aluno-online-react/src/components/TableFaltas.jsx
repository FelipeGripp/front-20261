import './Faltas.css'

function TableFaltas() {
  return (
  <>
      <table>
       <thead>
       <caption>2026.1</caption> 
          <tr>
            <th>Disciplina</th>
            <th>Faltas</th>
            <th>Presença</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>BI e Data Warehousing</td>
            <td>0</td>
            <td>100%</td>
          </tr>

          <tr>
            <td>Construção de Frontend</td>
            <td>0</td>
            <td>100%</td>
          </tr>

          <tr>
            <td>Manutenção de Software e Devops</td>
            <td>0</td>
            <td>100%</td>
          </tr>

        </tbody>
      </table>

      <table>
       <thead>
       <caption>2025.2</caption> 
          <tr>
            <th>Disciplina</th>
            <th>Faltas</th>
            <th>Presença</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Gerenciamento de Projetos</td>
            <td>27</td>
            <td>87.5%</td>
          </tr>

          <tr>
            <td>Estrutura de Dados </td>
            <td>9</td>
            <td>85%</td>
          </tr>

          <tr>
            <td>Construção de Backend</td>
            <td>10.5</td>
            <td>82.5%</td>
          </tr>

        </tbody>
      </table>
</>
  );
}

export default TableFaltas;