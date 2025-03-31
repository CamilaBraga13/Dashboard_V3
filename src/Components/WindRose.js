// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// // import HighchartsMore from "highcharts/highcharts-more";
// // import Exporting from "highcharts/modules/exporting";
// // import ExportData from "highcharts/modules/export-data";
// // import Accessibility from "highcharts/modules/accessibility";

// // HighchartsMore(Highcharts);
// // Exporting(Highcharts);
// // ExportData(Highcharts);
// // Accessibility(Highcharts);

// function WindRose({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data); // Verifica como os dados chegam
    
//             // Pegando as chaves disponíveis no primeiro objeto para entender a estrutura
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0])); //
//             }
    
//             const formattedData = data.map(row => [ 
//                 parseFloat(row["hour"]), 
//                 parseFloat(row["ws100"])   
//             ]).filter(row => !isNaN(row[0]) && !isNaN(row[1])); 
    
//             console.log("Dados formatados para o gráfico:", formattedData);
//             setChartData(formattedData);
//         }
//     }, [data]);
    

//     const options = {


//             chart: {
//               polar: true
//             },
//             title: {
//               text: "Highcharts Polar Chart"
//             },
//             subtitle: {
//               text: "Also known as Radar Chart"
//             },
//             pane: {
//               startAngle: 0,
//               endAngle: 360
//             },
//             xAxis: {
//               tickInterval: 45,
//               min: 0,
//               max: 360,
//               labels: {
//                 format: "{value}°"
//               }
//             },
//             yAxis: {
//               min: 0
//             },
//             plotOptions: {
//               series: {
//                 pointStart: 0,
//                 pointInterval: 45
//               },
//               column: {
//                 pointPadding: 0,
//                 groupPadding: 0
//               }
//             },
//             series: [
//                 {
//                     type: "area",
//                     name: "Column",
//                     data: [8, 7, 6, 5, 4, 3, 2, 1],
//                     pointPlacement: "between"
//                   },
//                   {
//                     type: "area",
//                     name: "Line",
//                     data: [10, 2, 1, 4, 6, 6, 7, 8]
//                   },
//                   {
//                     type: "area",
//                     name: "Area",
//                     data: [1, 8, 2, 3, 6, 4, 7,  5]
//                   }
//             ]
          
//             // chart: {

//             //     type: 'pie'
//             // },
//             // title: {
//             //     text: 'Rosa dos Ventos'
//             // },
//             // pane: {
//             //     size: '85%'
//             // },
//             // xAxis: {
//             //     categories: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 
//             //                  'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
//             //     tickmarkPlacement: 'on',
//             //     lineWidth: 0
//             // },
//             // yAxis: {
//             //     min: 0,
//             //     endOnTick: false,
//             //     showLastLabel: true,
//             //     title: {
//             //         text: 'Frequência (%)'
//             //     },
//             //     labels: {
//             //         formatter: function () {
//             //             return this.value + '%';
//             //         }
//             //     }
//             // },
//             // tooltip: {
//             //     shared: true,
//             //     pointFormat: '<b>{series.name}: {point.y}%</b><br/>'
//             // },
//             // plotOptions: {
//             //     column: {
//             //         pointPadding: 0,
//             //         groupPadding: 0,
//             //         borderWidth: 0,
//             //         shadow: false
//             //     }
//             // },
//             // series: [{
//             //     type: 'column',
//             //     name: 'Frequência do Vento',
//             //     data: [12, 8, 5, 7, 10, 15, 18, 20, 22, 18, 14, 10, 8, 6, 5, 9],
//             //     pointPlacement: 'between',
//             //     colorByPoint: true
//             // }]

        
//     }


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

// export default WindRose;
// import React, { useState, useEffect } from "react";
// import React from 'react';
// import Highcharts from 'highcharts';
// import ReactHighcharts from 'react-highcharts';

// const ChartComponent = () => {
//   const config = {
//     chart: {
//       type: 'line'
//     },
//     title: {
//       text: 'Example Chart'
//     },
//     series: [{
//       data: [1, 2, 3, 4, 5]
//     }]
//   };

//   return <ReactHighcharts config={config} />;
// };

// export default ChartComponent;
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
//                 console.log("Chaves disponíveis:", Object.keys(data[0])); 
//             }
    
//             // const formattedData = data.map(row => [  // pega os valores obtidos e aloca em um novo vetor com as conds
//             //     parseFloat(row["id"]),  // Transforma o valor em numeral, e apenas na coluna 'speed'
//             //     parseFloat(row["ws100"]) // Transforma o valor em numeral, e apenas na coluna 'Direction'  
//             // ]).filter(row => !isNaN(row[0]) && !isNaN(row[1])); // Valida as linha apenas com numeros ( "exclui" header)
    
//             const formattedData = data.map(row => [ 
//                 parseFloat(row["wdir100"]),  // x
//                 parseFloat(row["ws100"])    // y
//             ]).filter(row => !isNaN(row[0]) && !isNaN(row[1]));

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
//             text: "Direção x Velocidade",
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

// export default ChartLine;

// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";


// // Inicializando os módulos necessários


// const WindRose = () => {
//   const options = {
//     data: {
//       table: "freq",
//       startRow: 1,
//       endRow: 17,
//       endColumn: 7
//     },
//     chart: {
//       polar: true,
//       type: "column"
//     },
//     title: {
//       text: "Wind rose for South Shore Met Station, Oregon"
//     },
//     subtitle: {
//       text: "Source: or.water.usgs.gov"
//     },
//     pane: {
//       size: "85%"
//     },
//     legend: {
//       align: "right",
//       verticalAlign: "top",
//       y: 100,
//       layout: "vertical"
//     },
//     xAxis: {
//       tickmarkPlacement: "on"
//     },
//     yAxis: {
//       min: 0,
//       endOnTick: false,
//       showLastLabel: true,
//       title: {
//         text: "Frequency (%)"
//       },
//       labels: {
//         format: "{value}%"
//       },
//       reversedStacks: false
//     },
//     tooltip: {
//       valueSuffix: "%"
//     },
//     plotOptions: {
//       series: {
//         stacking: "normal",
//         shadow: false,
//         groupPadding: 0,
//         pointPlacement: "on"
//       }
//     }
//   };

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//       <table id="freq" style={{ display: "none" }}>
//         <tbody>
//           <tr>
//             <th>Direction</th>
//             <th>0.5 m/s</th>
//             <th>0.5-2 m/s</th>
//             <th>2-4 m/s</th>
//             <th>4-6 m/s</th>
//             <th>6-8 m/s</th>
//             <th>8-10 m/s</th>
//             <th>&gt; 10 m/s</th>
//             <th>Total</th>
//           </tr>
//           <tr>
//             <td>N</td>
//             <td>1.81</td>
//             <td>1.78</td>
//             <td>0.16</td>
//             <td>0.00</td>
//             <td>0.00</td>
//             <td>0.00</td>
//             <td>0.00</td>
//             <td>3.75</td>
//           </tr>
//           {/* Adicione mais linhas conforme necessário */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WindRose;

// Até aqui funciona +/- [-_-]

// import React, { useState, useEffect } from "react";
// // import Highcharts from "highcharts";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import HighchartsMore from "highcharts/highcharts-more";

// // Aplicar o módulo Highcharts-more
// if (typeof HighchartsMore === "function") {
//   HighchartsMore(Highcharts);
// }
// const WindRoseChart = ({ data }) => {
//   const [chartData, setChartData] = useState([]);
  
  
//   useEffect(() => {
//     if (data) {
//       console.log("Dados recebidos para o gráfico:", data);
      
//       // Agrupar as direções do vento (wdir100) em categorias para o gráfico
//       const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//       const windSpeedRanges = [0.5, 2, 4, 6, 8, 10, 11]; // Intervalos de velocidade do vento (m/s)
      
//       // Inicializando um objeto para contar a frequência de cada direção e intervalo de velocidade
//       const frequencyData = {
//         N: [0, 0, 0, 0, 0, 0, 0],
//         NE: [0, 0, 0, 0, 0, 0, 0],
//         E: [0, 0, 0, 0, 0, 0, 0],
//         SE: [0, 0, 0, 0, 0, 0, 0],
//         S: [0, 0, 0, 0, 0, 0, 0],
//         SW: [0, 0, 0, 0, 0, 0, 0],
//         W: [0, 0, 0, 0, 0, 0, 0],
//         NW: [0, 0, 0, 0, 0, 0, 0]
//       };
      
//       // Função para mapear a direção e a velocidade do vento
//       const processWindData = (row) => {
//         const direction = row["wdir100"];
//         const speed = row["ws100"];
//         const safeData = data?.map(row => row || [0, 0]); // Se 'row' for undefined, substitui por um array [0, 0]
        
//         // Verifica se a direção e a velocidade são válidas
//         if (!direction || isNaN(speed)) return;

//         // Mapeia a direção para uma das categorias (N, NE, etc.)
//         let directionKey;
//         if (direction >= 348.75 || direction < 11.25) directionKey = "N";
//         else if (direction >= 11.25 && direction < 33.75) directionKey = "NE";
//         else if (direction >= 33.75 && direction < 56.25) directionKey = "E";
//         else if (direction >= 56.25 && direction < 78.75) directionKey = "SE";
//         else if (direction >= 78.75 && direction < 101.25) directionKey = "S";
//         else if (direction >= 101.25 && direction < 123.75) directionKey = "SW";
//         else if (direction >= 123.75 && direction < 146.25) directionKey = "W";
//         else if (direction >= 146.25 && direction < 168.75) directionKey = "NW";

//         // Determina em qual intervalo de velocidade o valor se encaixa
//         let speedRangeIndex = -1;
//         if (speed >= 0.5 && speed < 2) speedRangeIndex = 0;
//         else if (speed >= 2 && speed < 4) speedRangeIndex = 1;
//         else if (speed >= 4 && speed < 6) speedRangeIndex = 2;
//         else if (speed >= 6 && speed < 8) speedRangeIndex = 3;
//         else if (speed >= 8 && speed < 10) speedRangeIndex = 4;
//         else if (speed >= 10) speedRangeIndex = 5;
        
//         if (speedRangeIndex !== -1) {
//           frequencyData[directionKey][speedRangeIndex]++;
//         }

//       };

//       // Processa os dados
//       data.forEach(row => processWindData(row));

//       // Formatar os dados para o gráfico
//       const formattedData = directions.map(direction => {
//         return frequencyData[direction];
//       });

//       setChartData(formattedData);
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       polar: true,
//       type: "column"
//     },
//     title: {
//       text: "Deu Certo!"
//     },
//     subtitle: {
//       text: "Data Source: Example"
//     },
//     pane: {
//       size: "85%"
//     },
//     xAxis: {
//       categories: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
//       tickmarkPlacement: "on",
//       lineWidth: 0
//     },
//     yAxis: {
//       min: 0,
//       title: {
//         text: "Frequency (%)"
//       },
//       labels: {
//         format: "{value}%"
//       },
//       reversedStacks: false
//     },
//     tooltip: {
//       valueSuffix: "%"
//     },
//     plotOptions: {
//       series: {
//         stacking: "normal",
//         pointPlacement: "on"
//       }
//     },
//     series: [
//       {
//         name: "0.5 m/s",
//         data: chartData.length ? chartData.map(item => item[0]) : [],
//         pointPlacement: "on"
//       },
//       {
//         name: "0.5-2 m/s",
//         data: chartData.length ? chartData.map(item => item[1]) : [],
//         pointPlacement: "on"
//       },
//       {
//         name: "2-4 m/s",
//         data: chartData.length ? chartData.map(item => item[2]) : [],
//         pointPlacement: "on"
//       },
//       {
//         name: "4-6 m/s",
//         data: chartData.length ? chartData.map(item => item[3]) : [],
//         pointPlacement: "on"
//       },
//       {
//         name: "6-8 m/s",
//         data: chartData.length ? chartData.map(item => item[4]) : [],
//         pointPlacement: "on"
//       },
//       {
//         name: "8-10 m/s",
//         data: chartData.length ? chartData.map(item => item[5]) : [],
//         pointPlacement: "on"
//       },
//       {
//         name: ">10 m/s",
//         data: chartData.length ? chartData.map(item => item[6]) : [],
//         pointPlacement: "on"
//       }
//     ]
//   };

// //   addEvent(Chart, 'afterDrawChartBox', function () {
// //     if (this.pane) {
// //       this.pane.forEach(function (pane) {
// //         pane.render()
// //       })
// //     }
// //   })

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default WindRoseChart;

// Ta quase good

// import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import HighchartsMore from "highcharts/highcharts-more";

// // Aplicar o módulo Highcharts-more
// if (typeof HighchartsMore === "function") {
//   HighchartsMore(Highcharts);
// }

// const WindRoseChart = ({ data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (data) {
//       console.log("Dados recebidos para o gráfico:", data);

//       // Direções do vento
//       const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//       const windSpeedRanges = [0.5, 2, 4, 6, 8, 10, 11]; // Intervalos de velocidade do vento (m/s)

//       // Inicializar a frequência para cada direção e intervalo de velocidade
//       const frequencyData = directions.reduce((acc, direction) => {
//         acc[direction] = Array(windSpeedRanges.length).fill(0);
//         return acc;
//       }, {});

//       // Processar os dados
//       data.forEach((row) => {
//         const direction = parseFloat(row["wdir100"]);
//         const speed = parseFloat(row["ws100"]);

//         // Validar os dados
//         if (isNaN(direction) || isNaN(speed)) return;

//         // Determinar a direção
//         let directionKey = null;
//         if (direction >= 348.75 || direction < 11.25) directionKey = "N";
//         else if (direction >= 11.25 && direction < 33.75) directionKey = "NE";
//         else if (direction >= 33.75 && direction < 56.25) directionKey = "E";
//         else if (direction >= 56.25 && direction < 78.75) directionKey = "SE";
//         else if (direction >= 78.75 && direction < 101.25) directionKey = "S";
//         else if (direction >= 101.25 && direction < 123.75) directionKey = "SW";
//         else if (direction >= 123.75 && direction < 146.25) directionKey = "W";
//         else if (direction >= 146.25 && direction < 168.75) directionKey = "NW";

//         // Determinar o intervalo de velocidade
//         let speedRangeIndex = -1;
//         if (speed >= 0.5 && speed < 2) speedRangeIndex = 0;
//         else if (speed >= 2 && speed < 4) speedRangeIndex = 1;
//         else if (speed >= 4 && speed < 6) speedRangeIndex = 2;
//         else if (speed >= 6 && speed < 8) speedRangeIndex = 3;
//         else if (speed >= 8 && speed < 10) speedRangeIndex = 4;
//         else if (speed >= 10) speedRangeIndex = 5;

//         // Incrementar a frequência
//         if (directionKey && speedRangeIndex !== -1) {
//           frequencyData[directionKey][speedRangeIndex]++;
//         }
//       });

//       // Formatar os dados para o gráfico
//       const formattedData = directions.map((direction) => {
//         return frequencyData[direction];
//       });

//       setChartData(formattedData);
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       polar: true,
//       type: "column",
//     },
//     title: {
//       text: "Rosa dos Ventos",
//     },
//     pane: {
//       size: "85%",
//     },
//     xAxis: {
//       categories: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
//       tickmarkPlacement: "on",
//       lineWidth: 0,
//     },
//     yAxis: {
//       min: 0,
//       title: {
//         text: "Frequência (%)",
//       },
//       labels: {
//         format: "{value}%",
//       },
//       reversedStacks: false,
//     },
//     tooltip: {
//       shared: true,
//       valueSuffix: "%",
//     },
//     plotOptions: {
//       series: {
//         stacking: "normal",
//         shadow: false,
//         groupPadding: 0,
//         pointPlacement: "on",
//       },
//     },
//     series: [
//       {
//         name: "0.5-2 m/s",
//         data: chartData.length ? chartData.map((item) => item[0]) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "2-4 m/s",
//         data: chartData.length ? chartData.map((item) => item[1]) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "4-6 m/s",
//         data: chartData.length ? chartData.map((item) => item[2]) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "6-8 m/s",
//         data: chartData.length ? chartData.map((item) => item[3]) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "8-10 m/s",
//         data: chartData.length ? chartData.map((item) => item[4]) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: ">10 m/s",
//         data: chartData.length ? chartData.map((item) => item[5]) : [],
//         pointPlacement: "on",
//       },
//     ],
//   };

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default WindRoseChart;

// import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import HighchartsMore from "highcharts/highcharts-more";

// // Aplicar o módulo Highcharts-more
// if (typeof HighchartsMore === "function") {
//   HighchartsMore(Highcharts);
// }

// const WindRoseChart = ({ data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (data) {
//       console.log("Dados recebidos para o gráfico:", data);

//       // Direções do vento
//       const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//       const windSpeedRanges = [2, 4, 6, 8, 10, 12, 15]; // Novos intervalos de velocidade do vento (m/s)

//       // Inicializar a frequência para cada direção e intervalo de velocidade
//       const frequencyData = directions.reduce((acc, direction) => {
//         acc[direction] = Array(windSpeedRanges.length).fill(0);
//         return acc;
//       }, {});

//       // Processar os dados
//       data.forEach((row) => {
//         const direction = parseFloat(row["wdir100"]);
//         const speed = parseFloat(row["ws100"]);

//         // Validar os dados
//         if (isNaN(direction) || isNaN(speed)) return;

//         // Determinar a direção
//         let directionKey = null;
//         if (direction >= 348.75 || direction < 11.25) directionKey = "N";
//         else if (direction >= 11.25 && direction < 33.75) directionKey = "NE";
//         else if (direction >= 33.75 && direction < 56.25) directionKey = "E";
//         else if (direction >= 56.25 && direction < 78.75) directionKey = "SE";
//         else if (direction >= 78.75 && direction < 101.25) directionKey = "S";
//         else if (direction >= 101.25 && direction < 123.75) directionKey = "SW";
//         else if (direction >= 123.75 && direction < 146.25) directionKey = "W";
//         else if (direction >= 146.25 && direction < 168.75) directionKey = "NW";

//         // Determinar o intervalo de velocidade
//         let speedRangeIndex = -1;
//         for (let i = 0; i < windSpeedRanges.length - 1; i++) {
//           if (speed >= windSpeedRanges[i] && speed < windSpeedRanges[i + 1]) {
//             speedRangeIndex = i;
//             break;
//           }
//         }
//         if (speed >= windSpeedRanges[windSpeedRanges.length - 1]) {
//           speedRangeIndex = windSpeedRanges.length - 1;
//         }

//         // Incrementar a frequência
//         if (directionKey && speedRangeIndex !== -1) {
//           frequencyData[directionKey][speedRangeIndex]++;
//         }
//       });

//       // Calcular porcentagens
//       const formattedData = directions.map((direction) => {
//         const total = frequencyData[direction].reduce((sum, value) => sum + value, 0);
//         return frequencyData[direction].map((value) => ((value / total) * 100).toFixed(2));
//       });

//       setChartData(formattedData);
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       polar: true,
//       type: "column",
//     },
//     title: {
//       text: "Rosa dos Ventos",
//     },
//     pane: {
//       size: "85%",
//     },
//     xAxis: {
//       categories: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
//       tickmarkPlacement: "on",
//       lineWidth: 0,
//     },
//     yAxis: {
//       min: 0,
//       title: {
//         text: "Frequência (%)",
//       },
//       labels: {
//         format: "{value}%",
//       },
//       reversedStacks: false,
//     },
//     tooltip: {
//       shared: true,
//       valueSuffix: "%",
//     },
//     plotOptions: {
//       series: {
//         stacking: "normal",
//         shadow: false,
//         groupPadding: 0,
//         pointPlacement: "on",
//       },
//     },
//     colors: [
//       "#8c564b", // Marrom
//       "#9467bd", // Roxo
//       "#e377c2", // Rosa
//       "#ff7f0e", // Laranja
//       "#4169e1", // Azul
//       "#2ca02c", // Verde
//       "#d62728", // Vermelho
//     ],
//     series: [
//       {
//         name: "2-4 m/s",
//         data: chartData.length ? chartData.map((item) => parseFloat(item[0])) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "4-6 m/s",
//         data: chartData.length ? chartData.map((item) => parseFloat(item[1])) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "6-8 m/s",
//         data: chartData.length ? chartData.map((item) => parseFloat(item[2])) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "8-10 m/s",
//         data: chartData.length ? chartData.map((item) => parseFloat(item[3])) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: "10-12 m/s",
//         data: chartData.length ? chartData.map((item) => parseFloat(item[4])) : [],
//         pointPlacement: "on",
//       },
//       {
//         name: ">12 m/s",
//         data: chartData.length ? chartData.map((item) => parseFloat(item[5])) : [],
//         pointPlacement: "on",
//       },
//     ],
//   };

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default WindRoseChart;

import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

// Aplicar o módulo Highcharts-more
if (typeof HighchartsMore === "function") {
  HighchartsMore(Highcharts);
}

const WindRoseChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      console.log("Dados recebidos para o gráfico:", data);

      // Direções do vento
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      const windSpeedRanges = [2, 4, 6, 8, 10, 12, 15]; // Intervalos de velocidade do vento (m/s)

      // Inicializar a frequência para cada direção e intervalo de velocidade
      const frequencyData = directions.reduce((acc, direction) => {
        acc[direction] = Array(windSpeedRanges.length).fill(0);
        return acc;
      }, {});

      // Processar os dados
      data.forEach((row) => {
        const direction = parseFloat(row["wdir100"]);
        const speed = parseFloat(row["ws100"]);

        // Validar os dados
        if (isNaN(direction) || isNaN(speed)) return;

        // Determinar a direção
        let directionKey = null;
        if (direction >= 348.75 || direction < 11.25) directionKey = "N";
        else if (direction >= 11.25 && direction < 33.75) directionKey = "NE";
        else if (direction >= 33.75 && direction < 56.25) directionKey = "E";
        else if (direction >= 56.25 && direction < 78.75) directionKey = "SE";
        else if (direction >= 78.75 && direction < 101.25) directionKey = "S";
        else if (direction >= 101.25 && direction < 123.75) directionKey = "SW";
        else if (direction >= 123.75 && direction < 146.25) directionKey = "W";
        else if (direction >= 146.25 && direction < 168.75) directionKey = "NW";

        // Determinar o intervalo de velocidade
        let speedRangeIndex = -1;
        for (let i = 0; i < windSpeedRanges.length - 1; i++) {
          if (speed >= windSpeedRanges[i] && speed < windSpeedRanges[i + 1]) {
            speedRangeIndex = i;
            break;
          }
        }
        if (speed >= windSpeedRanges[windSpeedRanges.length - 1]) {
          speedRangeIndex = windSpeedRanges.length - 1;
        }

        // Incrementar a frequência
        if (directionKey && speedRangeIndex !== -1) {
          frequencyData[directionKey][speedRangeIndex]++;
        }
      });

      // Calcular porcentagens
      const formattedData = directions.map((direction) => {
        const total = frequencyData[direction].reduce((sum, value) => sum + value, 0);
        return frequencyData[direction].map((value) => ((value / total) * 100).toFixed(2));
      });

      setChartData(formattedData);
    }
  }, [data]);

  const options = {
    chart: {
      polar: true,
      type: "column",
    },
    title: {
      text: "Rosa dos Ventos",
    },
    pane: {
      size: "85%",
    },
    xAxis: {
      categories: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
      tickmarkPlacement: "on",
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Frequência (%)",
      },
      labels: {
        format: "{value}%",
      },
      reversedStacks: false,
    },
    tooltip: {
      shared: true,
      valueSuffix: "%",
    },
    plotOptions: {
      series: {
        stacking: "normal",
        shadow: false,
        groupPadding: 0,
        pointPlacement: "on",
      },
    },
    colors: [
      // "#8c564b", // 2-4 sMarrom
      // "#05106b", // 6-8 Verde Claro
      // "#96ccff", // 4-6 Azul claro
      // "#ff7f0e", // 8-10 Laranja
      // "#4169e1", // 10-12 Azul
      // "#2ca02c", // <12 Verde
      "#CAF0F8", // 2-4 
      "#90E0EF", // 4-6 
      "#84CAE4", // 6-8 
      "#0096C7", // 8-10 
      "#023E8A", // 10-12 
      "#03045E", // <12 

    ],
    series: [
      {
        name: "2-4 m/s",
        data: chartData.length ? chartData.map((item) => parseFloat(item[0])) : [],
        pointPlacement: "on",
      },
      {
        name: "4-6 m/s",
        data: chartData.length ? chartData.map((item) => parseFloat(item[1])) : [],
        pointPlacement: "on",
      },
      {
        name: "6-8 m/s",
        data: chartData.length ? chartData.map((item) => parseFloat(item[2])) : [],
        pointPlacement: "on",
      },
      {
        name: "8-10 m/s",
        data: chartData.length ? chartData.map((item) => parseFloat(item[3])) : [],
        pointPlacement: "on",
      },
      {
        name: "10-12 m/s",
        data: chartData.length ? chartData.map((item) => parseFloat(item[4])) : [],
        pointPlacement: "on",
      },
      {
        name: ">12 m/s",
        data: chartData.length ? chartData.map((item) => parseFloat(item[5])) : [],
        pointPlacement: "on",
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default WindRoseChart;

