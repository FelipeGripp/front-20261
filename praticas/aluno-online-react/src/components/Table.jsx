import './Tabela.css'
function Tabela(props) {
    return <>
            
            <table>
{props.titulo && <caption>{props.titulo}</caption>}
                <thead>
                    <tr>
                        {props.colunas.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.dados.map((linha, i) => (
                        <tr key={i}>
                            {linha.map((coluna, j) => (
                                <td key={j}>{coluna}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    }
    
    export default Tabela;