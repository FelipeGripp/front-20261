function Tabela(props) {
    return (
        <>
            {props.titulo && <h3>{props.titulo}</h3>}

            <table>
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
                            {props.colunas.map((coluna, j) => (
                                <td key={j}>{linha[coluna]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Tabela;