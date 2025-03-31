// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// function SerieSpeed({data}) {
//     const options = {
//         chart: {
//         type: 'line',
//         zoomType: 'x',
//         },
//         title: {
//         text: "Gráfico em Linha",
//         },
//         colors: ['red'],
//         yAxis: {
//         title: {
//             text: ' y',
//         },
//         },
//         series:[{
//             name: 'x',
//             data: data,
//         }],
//     };
//     return (
//         <div>
//         {/* <Graficos /> */}
//         <HighchartsReact
//             highcharts={Highcharts}
//             options={options}
//         />
//         </div>
//     )
// }
// export default Chart;

// working code 
// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// function Chart({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data); // Verifica como os dados chegam
    
//             // Pegando as chaves disponíveis no primeiro objeto para entender a estrutura
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0])); //
//             }
    
//             const formattedData = data.map(row => [  // pega os valores obtidos e aloca em um novo vetor com as conds
//                 parseFloat(row["Dia"]),  // Transforma o valor em numeral, e apenas na coluna 'speed'
//                 parseFloat(row["Speed"]) // Transforma o valor em numeral, e apenas na coluna 'Direction'  
//             ]).filter(row => !isNaN(row[0]) && !isNaN(row[1])); // Valida as linha apenas com numeros ( "exclui" header)
    
//             console.log("Dados formatados para o gráfico:", formattedData);
//             setChartData(formattedData);
//         }
//     }, [data]);
    

//     const options = {
//         chart: {
//             type: 'column',
//             zoomType: 'x',
//         },
//         title: {
//             text: "Direction x Speed",
//         },
//         colors: ['#0ad13c'],
//         yAxis: {
//             title: {
//                 text: 'Direction',
//             },
//         },
//         series: [{
//             name: 'Speed',
//             data: chartData,  // Passa os dados formatados (Padrao CSV)
//         }],
//     };

//     return (
//         <div>
//             {chartData.length > 0 ? ( // Verifica se o CSV não está vazio (errado)
//                 <HighchartsReact highcharts={Highcharts} options={options} /> // True
//             ) : (
//                 <p>Carregando gráfico...</p> // False
//             )}
//         </div>
//     );
// }

// export default Chart;



// --------------------- Funciona trazendo cada dia separado ------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// function Chart({ data }) {
//     const [chartSeries, setChartSeries] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data);

//             // Criar um objeto para armazenar os dados agrupados por dia
//             const groupedData = {};

//             data.forEach(row => {
//                 const day = row["Dia"];
//                 const hour = parseInt(row["Hora"], 10);
//                 const speed = parseFloat(row["Speed"]);

//                 if (!isNaN(hour) && !isNaN(speed)) {
//                     if (!groupedData[day]) {
//                         groupedData[day] = [];
//                     }
//                     groupedData[day].push([hour, speed]); // (X = Hora, Y = Speed)
//                 }
//             });

//             // Criar a estrutura de séries do Highcharts
//             const formattedSeries = Object.keys(groupedData).map(day => ({
//                 name: `Dia ${day}`,
//                 data: groupedData[day].sort((a, b) => a[0] - b[0]), // Ordena por hora
//             }));

//             console.log("Dados formatados para o gráfico:", formattedSeries);
//             setChartSeries(formattedSeries);
//         }
//     }, [data]);

//     const options = {
//         chart: {
//             type: 'line',
//             zoomType: 'x',
//         },
//         title: {
//             text: "Variação de Velocidade ao longo do dia",
//         },
//         xAxis: {
//             title: {
//                 text: 'Hora do dia',
//             },
//             allowDecimals: false,
//         },
//         yAxis: {
//             title: {
//                 text: 'Speed',
//             },
//         },
//         series: chartSeries, // Passa todas as séries separadas por dia
//     };

//     return (
//         <div>
//             {chartSeries.length > 0 ? (
//                 <HighchartsReact highcharts={Highcharts} options={options} />
//             ) : (
//                 <p>Carregando gráfico...</p>
//             )}
//         </div>
//     );
// }

// export default Chart;

// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// function Chart({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data);

//             // 1. Filtrar e formatar os dados
//             const formattedData = data.map(row => {
//                 const year = parseInt(row["Ano"], 10);
//                 const month = parseInt(row["Mes"], 10) - 1; // Highcharts usa índice de mês (0 = janeiro)
//                 const day = parseInt(row["Dia"], 10);
//                 const hour = parseInt(row["Hora"], 10);
//                 const speed = parseFloat(row["Speed"]);

//                 if (!isNaN(year) && !isNaN(month) && !isNaN(day) && !isNaN(hour) && !isNaN(speed)) {
//                     const timestamp = new Date(year, month, day, hour).getTime();
//                     return [timestamp, speed]; // (X = Timestamp, Y = Speed)
//                 }
//                 return null;
//             }).filter(row => row !== null) // Remove valores inválidos
//               .sort((a, b) => a[0] - b[0]); // Ordena pelo tempo

//             console.log("Dados filtrados e formatados:", formattedData);
//             setChartData(formattedData);
//         }
//     }, [data]);

//     const options = {
//         chart: {
//             type: 'line',
//             zoomType: 'x',
//         },
//         title: {
//             text: "Variação de Velocidade ao longo dos dias",
//         },
//         xAxis: {
//             type: 'datetime',
//             ordinal: true,  // Faz com que o gráfico ignore os dias sem dados
//             title: {
//                 text: 'Data e Hora',
//             },
//             dateTimeLabelFormats: {
//                 day: '%d/%m',
//                 hour: '%Hh',
//             },
//         },
//         yAxis: {
//             title: {
//                 text: 'Speed',
//             },
//         },
//         series: [{
//             name: 'Speed',
//             data: chartData,
//             connectNulls: false,  // Evita que os pontos sejam conectados entre os dias ausentes
//             gapSize: 86400000,  // Define um limite de 1 dia (em milissegundos) para evitar conexão entre pontos distantes
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

// export default Chart;

// -------------------------------------------------
import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';

if (typeof HighchartsExporting === "function") {
    HighchartsExporting(Highcharts);
}

function Chart({ data }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data) {
            console.log("Recebendo data no Chart:", data);
    
            if (data.length > 0) {
                console.log("Chaves disponíveis:", Object.keys(data[0]));
            }
    
            // const formattedData = data.map(row => {
            //     //const dia = parseFloat(row["Id"]);
            //     //const speed = parseFloat(row["Speed"]);
                
            //     row["id"],  // x
            //     parseFloat(row["ws100"])    // y

            //     //console.log("Dia:", row["Dia"], "->", dia, "| Speed:", row["Speed"], "->", speed);
    
            //     //return [dia, speed];
            // }).filter(row => row[0] && !isNaN(row[1]));
            const formattedData = data.map(row => [ 
                row["id"],  // x
                parseFloat(row["ws100"])    // y
            ]).filter(row => row[0] && !isNaN(row[1]));
    
            console.log("Dados formatados para o gráfico:", formattedData);
            setChartData(formattedData);
        }
    }, [data]);
    

    const options = {
        chart: {
            type: 'line',
            zoomType: 'x',
        },
        title: {
            text: "Série Temporal -> Velocidade",
        },
        colors: ['#0ad13c'],
        yAxis: {
            title: {
                text: 'Direction',
            },
        },
        series: [{
            name: 'Time',
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

export default Chart;

