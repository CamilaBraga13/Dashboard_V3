// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// function ChartHistogram({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data);
    
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0]));
//             }

//             const formattedData = data.map(row => [ 
//                 row["id"],  // x
//                 parseFloat(row["wdir100"])    // y
//             ]).filter(row => row[0] && !isNaN(row[1]));
    
//             console.log("Dados formatados para o gráfico:", formattedData);
//             setChartData(formattedData);
//         }
//     }, [data]);
    

//     const options = {
//         title: {
//             text: 'Highcharts Histogram'
//         },
    
//         xAxis: [{
//             title: { text: 'Data' },
//             alignTicks: false
//         }, {
//             title: { text: 'Histogram' },
//             alignTicks: false,
//             opposite: true
//         }],
    
//         yAxis: [{
//             title: { text: 'Data' }
//         }, {
//             title: { text: 'Histogram' },
//             opposite: true
//         }],
    
//         plotOptions: {
//             histogram: {
//                 accessibility: {
//                     point: {
//                         valueDescriptionFormat: '{index}. {point.x:.3f} to ' +
//                             '{point.x2:.3f}, {point.y}.'
//                     }
//                 }
//             }
//         },
    
//         series: [{
//             name: 'Histogram',
//             type: 'histogram',
//             xAxis: 1,
//             yAxis: 1,
//             baseSeries: 's1',
//             zIndex: -1
//         }, {
//             name: 'Data',
//             type: 'scatter',
//             data: data,
//             id: 's1',
//             marker: {
//                 radius: 1.5
//             }
//         }]
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

// export default ChartHistogram;


//  not working as espected

// import React from 'react'
// import { useState, useEffect } from 'react'
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
// import HighchartsMore from "highcharts/highcharts-more";
// import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";

// // Aplicar o módulo Highcharts-more
// if (typeof HighchartsMore === "function") {
//     HighchartsMore(Highcharts);
// }
// if (typeof HistogramBellCurve === "function") {
//     HistogramBellCurve(Highcharts);
// }


// function ChartHistogram({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data);
    
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0]));
//             }
//             const formattedData = data.map(row => [ 
//                 row["id"],  // x
//                 parseFloat(row["wdir100"])    // y
//             ]).filter(row => row[0] && !isNaN(row[1]));
    
//             console.log("Dados formatados para o gráfico:", formattedData);
//             setChartData(formattedData);
//         }
//     }, [data]);
    

//     const options = {
//         title: {
//             text: 'Highcharts Histogram'
//         },
    
//         xAxis: [{
//             title: { text: 'Data' },
//             alignTicks: false
//         }, {
//             title: { text: 'Histogram' },
//             alignTicks: false,
//             opposite: true
//         }],
    
//         yAxis: [{
//             title: { text: 'Data' }
//         }, {
//             title: { text: 'Histogram' },
//             opposite: true
//         }],
    
//         plotOptions: {
//             histogram: {
//                 accessibility: {
//                     point: {
//                         valueDescriptionFormat: '{index}. {point.x:.3f} to ' +
//                             '{point.x2:.3f}, {point.y}.'
//                     }
//                 }
//             }
//         },
    
//         series: [{
//             name: 'Histogram',
//             type: 'histogram',
//             xAxis: 1,
//             yAxis: 1,
//             baseSeries: 's1',
//             zIndex: -1
//         }, {
//             name: 'Data',
//             type: 'line',
//             data: data,
//             id: 's1',
//             marker: {
//                 radius: 1.5
//             }
//         }]
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

// export default ChartHistogram;

// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import HighchartsMore from "highcharts/highcharts-more";
// import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";

// // Aplicar os módulos
// if (typeof HighchartsMore === "function") {
//     HighchartsMore(Highcharts);
// }
// if (typeof HistogramBellCurve === "function") {
//     HistogramBellCurve(Highcharts);
// }

// function ChartHistogram({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         // if (data && Array.isArray(data)) {
//         //     console.log("Recebendo data no Chart:", data);

//         //     if (data.length > 0) {
//         //         console.log("Chaves disponíveis:", Object.keys(data[0]));
//         //     }

//         //     const formattedData = data
//         //         .map(row => [
//         //             row["id"] ?? 0,  // Se for undefined, substitui por 0
//         //             parseFloat(row["wdir100"]) || 0  // Se não for número, substitui por 0
//         //         ])
//         //         .filter(row => row[0] !== undefined && !isNaN(row[1]));

//         //     console.log("Dados formatados para o gráfico:", formattedData);
//         //     setChartData(formattedData);
//         // }

//         if (data) {
//             console.log("Recebendo data no Chart:", data);
    
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0]));
//             }
    
//             // const formattedData = data.map(row => {
//             //     //const dia = parseFloat(row["Id"]);
//             //     //const speed = parseFloat(row["Speed"]);
                
//             //     row["id"],  // x
//             //     parseFloat(row["ws100"])    // y

//             //     //console.log("Dia:", row["Dia"], "->", dia, "| Speed:", row["Speed"], "->", speed);
    
//             //     //return [dia, speed];
//             // }).filter(row => row[0] && !isNaN(row[1]));
//             const formattedData = data.map(row => [ 
//                 row["id"],  // x
//                 parseFloat(row["ws100"])    // y

//             ]).filter(row => row[0] && !isNaN(row[1]));
    
//             console.log("Dados formatados para o gráfico:", formattedData);
//             setChartData(formattedData);
//         }


//     }, [data]);

//     const options = {
//         title: {
//             text: 'Highcharts Histogram'
//         },

//         xAxis: [{
//             title: { text: 'Data' },
//             alignTicks: false
//         }, {
//             title: { text: 'Histogram' },
//             alignTicks: false,
//             opposite: true
//         }],

//         yAxis: [{
//             title: { text: 'Data' }
//         }, {
//             title: { text: 'Histogram' },
//             opposite: true
//         }],

//         plotOptions: {
//             histogram: {
//                 accessibility: {
//                     point: {
//                         valueDescriptionFormat: '{index}. {point.x:.3f} to ' + //
//                             '{point.x2:.3f}, {point.y}.'
//                     }
//                 }
//             }
//         },

//         series: [
//             {
//                 name: 'Histogram',
//                 type: 'histogram',
//                 xAxis: 1,
//                 yAxis: 1,
//                 baseSeries: 's1',
//                 zIndex: -1
//             }, 
//             {
//                 name: 'Data',
//                 type: 'scatter',
//                 data: chartData,  
//                 id: 's1',
//                 marker: {
//                     radius: 1.5
//                 }
//             }
//         ]
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

// export default ChartHistogram;


// uéééééé

// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import HighchartsMore from "highcharts/highcharts-more";
// import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";

// // Aplicar os módulos
// if (typeof HighchartsMore === "function") {
//     HighchartsMore(Highcharts);
// }
// if (typeof HistogramBellCurve === "function") {
//     HistogramBellCurve(Highcharts);
// }

// function ChartHistogram({ data }) {
//     const [chartData, setChartData] = useState([]);
//     const [media, setMedia] = useState(null);

//     // useEffect(() => {
//     //     if (data) {
//     //         console.log("Recebendo data no Chart:", data);
    
//     //         if (data.length > 0) {
//     //             console.log("Chaves disponíveis:", Object.keys(data[0]));
//     //         }
//     //         const formattedData = data.map(row => [ 
//     //             row["id"],  // x
//     //             parseFloat(row["ws100"])    // y

//     //         ]).filter(row => row[0] && !isNaN(row[1]));
    
//     //         console.log("Dados formatados para o gráfico:", formattedData);
//     //         setChartData(formattedData);

//     //         // calcular a média dos valores de ws100 por dia
//     //         const mediaDiaMes = data.reduce((acc, row) => {
//     //             const id = row["id"]; // Exemplo: "2025-03-25 14:00"
//     //             const ws100 = parseFloat(row["ws100"]);
            
//     //             if (!isNaN(ws100)) {
//     //                 // Extrair "ano-mês-dia" do id (primeiros 10 caracteres)
//     //                 const diaMes = id.substring(0, 10); // Exemplo: "2025-03-25"
            
//     //                 // Inicializar o array para o dia, se ainda não existir
//     //                 if (!acc[diaMes]) {
//     //                     acc[diaMes] = [];
//     //                 }
            
//     //                 // Adicionar o valor de ws100 ao array correspondente
//     //                 acc[diaMes].push(ws100);
//     //             }
//     //             return acc;
//     //         }, {});
            
//     //         // Calcular a média para cada "ano-mês-dia"
//     //         const mediasPorDiaMes = Object.keys(mediaDiaMes).reduce((result, diaMes) => {
//     //             const valores = mediaDiaMes[diaMes];
//     //             const soma = valores.reduce((sum, value) => sum + value, 0);
//     //             const media = soma / valores.length;
//     //             result[diaMes] = media;
//     //             return result;
//     //         }, {});
//     //         setMedia(mediasPorDiaMes);
//     //         console.log("Médias por dia e mês:", mediasPorDiaMes);
//     //     }


//     // }, [data]);
//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data);
    
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0]));
//             }
    
//             const mediaDiaMes = data.reduce((acc, row) => {
//                 const id = row["id"]; // Exemplo: "2025-03-25 14:00"
//                 const ws100 = parseFloat(row["ws100"]);
    
//                 if (!isNaN(ws100)) {
//                     const diaMes = id.substring(0, 10); // Exemplo: "2025-03-25"
//                     if (!acc[diaMes]) {
//                         acc[diaMes] = [];
//                     }
//                     acc[diaMes].push(ws100);
//                 }
//                 return acc;
//             }, {});
    
//             const mediasPorDiaMes = Object.keys(mediaDiaMes).reduce((result, diaMes) => {
//                 const valores = mediaDiaMes[diaMes];
//                 const soma = valores.reduce((sum, value) => sum + value, 0);
//                 const media = soma / valores.length;
//                 result[diaMes] = media;
//                 return result;
//             }, {});

//             const preencherDiasAusentes = (dados, inicio, fim) => {
//                 const diasCompletos = [];
//                 let dataAtual = new Date(inicio);
            
//                 while (dataAtual <= new Date(fim)) {
//                     const diaMes = dataAtual.toISOString().substring(0, 10); // Formato "YYYY-MM-DD"
//                     const media = dados[diaMes] || null; // Usar `null` para dias sem dados
//                     diasCompletos.push([dataAtual.getTime(), media]); // Converter a data para timestamp
//                     dataAtual.setDate(dataAtual.getDate() + 1); // Avançar 1 dia
//                 }
            
//                 return diasCompletos;
//             };
    
//             console.log("Médias por dia e mês:", mediasPorDiaMes);
    
//             const inicio = Object.keys(mediasPorDiaMes)[0];
//             const fim = Object.keys(mediasPorDiaMes).slice(-1)[0];
//             const mediasParaGrafico = preencherDiasAusentes(mediasPorDiaMes, inicio, fim);
    
//             console.log("Médias formatadas para o gráfico:", mediasParaGrafico);
//             setMedia(mediasParaGrafico);
//         }
//     }, [data]);

//     const options = {
//         title: {
//             text: 'Highcharts Histogram'
//         },

//         xAxis: [{
//             title: { text: 'Data' },
//             alignTicks: false
//         }, {
//             title: { text: 'Histogram' },
//             alignTicks: false,
//             opposite: true
//         }],

//         yAxis: [{
//             title: { text: 'Data' }
//         }, {
//             title: { text: 'Histogram' },
//             opposite: true
//         }],

//         plotOptions: {
//             histogram: {
//                 accessibility: {
//                     point: {
//                         valueDescriptionFormat: '{index}. {point.x:.3f} to ' + //
//                             '{point.x2:.3f}, {point.y}.'
//                     }
//                 }
//             }
//         },

//         series: [
//             {
//                 name: 'Histogram',
//                 type: 'histogram',
//                 xAxis: 1,
//                 yAxis: 1,
//                 baseSeries: 's1',
//                 zIndex: -1
//             }, 
//             {
//                 name: 'Média',
//                 type: 'line',
//                 data: media,  
//                 id: 's1',
//                 marker: {
//                     radius: 3
//                 }
//             }
//         ]
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

// export default ChartHistogram;

// Até aqui funciona :) 

import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";

// Aplicar o módulo de histograma
if (typeof HistogramBellCurve === "function") {
    HistogramBellCurve(Highcharts);
}

function ChartHistogram({ data }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data) {
            console.log("Recebendo data no Chart:", data);

            const valoresWs100 = data
                .map(row => parseFloat(row["ws100"]))
                .filter(value => !isNaN(value)); // Filtrar apenas valores numéricos

            console.log("Valores de ws100 para o histograma:", valoresWs100);
            // faça um console.log que mostra quantos valores estao entre 9.08 e 9.28
            const valoresFiltrados = valoresWs100.filter(value => value >= 9.0 && value <= 9.2);      
            console.log("Valores filtrados entre 9.08 e 9.28:", valoresFiltrados);
            console.log("Quantidade de valores filtrados:", valoresFiltrados.length);
            console.log("Quantidade total de valores:", valoresWs100.length);
            console.log("Valores de ws100:", valoresWs100);

            setChartData(valoresWs100); // Atualizar o estado com os dados brutos
        }
    }, [data]);

    const options = {
        title: {
            text: 'Highcharts Histogram'
        },

        xAxis: [{
            title: { text: 'Valores de ws100' },
            alignTicks: false
        }, {
            title: { text: 'Histograma' },
            alignTicks: false,
            opposite: true
        }],

        yAxis: [{
            title: { text: 'Frequência' }
        }, {
            title: { text: 'Histograma' },
            opposite: true
        }],

        plotOptions: {
            histogram: {
                binWidth: 0.2,
                color: '#4169e1', // Cor das barras
                borderWidth: 1,   // Largura da borda
                borderColor: '#000', // Cor da borda
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                    }
                }
            }
        },

        series: [
            {
                name: 'Dados Brutos',
                type: 'line',
                data: chartData, // Dados brutos de ws100
                id: 'base',
                color: 'orange',
                marker: {
                    radius: 1.5
                }
            },
            {
                name: 'Histograma',
                type: 'histogram',
                xAxis: 1,
                yAxis: 1,
                baseSeries: 'base', // Referência à série de dados brutos
                zIndex: -1
            }
        ]
    };

    return (
        <div>
            {chartData.length > 0 ? (
                <HighchartsReact highcharts={Highcharts} options={options} />
            ) : (
                <p>Carregando gráfico...</p>
            )}
        </div>
    );
}

export default ChartHistogram;
