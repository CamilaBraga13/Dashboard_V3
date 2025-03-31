
// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// function ChartLine({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data); // Verifica como os dados chegam
    
//             // Pegando as chaves disponíveis no primeiro objeto para entender a estrutura
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0])); //
//             }
    
//             const formattedData = data.map(row => [ 
//                 parseFloat(row["Hora"]),  
//                 parseFloat(row["Speed"])    
//             ]).filter(row => !isNaN(row[0]) && !isNaN(row[1])); 
    
//             console.log("Dados formatados para o gráfico:", formattedData);
//             setChartData(formattedData);
//         }
//     }, [data]);
    

//     const options = {
//         chart: {
//             type: 'line',
//             zoomType: 'x',
//         },
//         title: {
//             text: "Speed x Hours",
//         },
//         colors: ['#1368f0'],
//         yAxis: {
//             title: {
//                 text: 'Speed',
//             },
//         },
//         series: [{
//             name: 'Hours',
//             data: chartData,  // Passa os dados formatados (numero)
//         }],
//     };

//     return (
//         <div>
//             {chartData.length > 0 ? (
//                 <HighchartsReact highcharts={Highcharts} options={options} />
//             ) : (
//                 <p>Carregando gráfico...</p>
//             )}
//         </div>
//     );
// }

// export default ChartLine;

import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function ChartLine({ data }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data) {
            console.log("Recebendo data no Chart:", data); // Verifica como os dados chegam
    
            // Pegando as chaves disponíveis no primeiro objeto para entender a estrutura
            if (data.length > 0) {
                console.log("Chaves disponíveis:", Object.keys(data[0])); 
            }
    
            // const formattedData = data.map(row => [  // pega os valores obtidos e aloca em um novo vetor com as conds
            //     parseFloat(row["id"]),  // Transforma o valor em numeral, e apenas na coluna 'speed'
            //     parseFloat(row["ws100"]) // Transforma o valor em numeral, e apenas na coluna 'Direction'  
            // ]).filter(row => !isNaN(row[0]) && !isNaN(row[1])); // Valida as linha apenas com numeros ( "exclui" header)
    
            const formattedData = data.map(row => [ 
                parseFloat(row["wdir100"]),  // x
                parseFloat(row["ws100"])    // y
            ]).filter(row => !isNaN(row[0]) && !isNaN(row[1]));

            console.log("Dados formatados para o gráfico:", formattedData);
            setChartData(formattedData);
        }
    }, [data]);
    

    const options = {
        chart: {
            type: 'column',
            zoomType: 'x',
        },
        title: {
            text: "Direção x Velocidade",
        },
        colors: ['#0ad13c'],
        yAxis: {
            title: {
                text: 'Direction',
            },
        },
        series: [{
            name: 'Speed',
            data: chartData,  // Passa os dados formatados (Padrao CSV)
        }],
    };

    return (
        <div>
            {chartData.length > 0 ? ( // Verifica se o CSV não está vazio (errado)
                <HighchartsReact highcharts={Highcharts} options={options} /> // True
            ) : (
                <p>Carregando gráfico...</p> // False
            )}
        </div>
    );
}

export default ChartLine;
