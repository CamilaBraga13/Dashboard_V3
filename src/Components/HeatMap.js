// ---------------- Apenas gera o esquema do gráfico ------------------ 
// ---------------- Eixos: X: Meses / Y: Horas do dia ------------------
// ----------------- Tabela Vazia --------------

// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import HighchartsMore from "highcharts/highcharts-more";
// import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";
// import Accessibility from "highcharts/modules/accessibility";
// import Exporting from "highcharts/modules/exporting";
// import ExportData from "highcharts/modules/export-data";
// // import DataModule from "highcharts/modules/data";

// import Heatmap from "highcharts/modules/heatmap";
// // Aplicar os módulos
// if (typeof HighchartsMore === "function") {
//     HighchartsMore(Highcharts);
// }
// if (typeof HistogramBellCurve === "function") {
//     HistogramBellCurve(Highcharts);
// }
// if (typeof Accessibility === "function") {  
//     Accessibility(Highcharts);
// }
// if (typeof Exporting === "function") {
//     Exporting(Highcharts);
// }
// if (typeof ExportData === "function") {
//     ExportData(Highcharts);
// }   
// // if (typeof DataModule === "function") {
// //     DataModule(Highcharts);
// // }

// if (typeof Heatmap === "function") {
//     Heatmap(Highcharts);
// }
// function HeatMap({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data) {
//             console.log("Recebendo data no Chart:", data);
    
//             if (data.length > 0) {
//                 console.log("Chaves disponíveis:", Object.keys(data[0]));
//             }
//             const formattedData = data.map(row => [ 
//                 (row["id"]) ?? 0,
//                 parseFloat(row["ws100"]) ?? 0,
//                 (row["value"]) ?? 0
//             ]).filter(row => row[0] !== undefined && row[1] !== undefined);
    
//             console.log("Dados formatados para o gráfico:", formattedData);
//             setChartData(formattedData);
//         }


//     }, [data]);

//     const options = {
//         data: {
//             //csv: document.getElementById('csv').innerHTML
//             data: chartData
//         },
    
//         chart: {
//             type: 'heatmap'
//         },
    
//         boost: {
//             useGPUTranslations: true
//         },
    
//         title: {
//             text: 'Highcharts heat map',
//             align: 'left',
//             x: 40
//         },
    
//         subtitle: {
//             text: 'Temperature variation by day and hour through 2023',
//             align: 'left',
//             x: 40
//         },
    
//         xAxis: {
//             type: 'datetime',
//             min: '2023-01-01',
//             max: '2023-12-31 23:59:59',
//             labels: {
//                 align: 'left',
//                 x: 5,
//                 y: 14,
//                 format: '{value:%B}' // long month
//             },
//             showLastLabel: false,
//             tickLength: 16
//         },
    
//         yAxis: {
//             title: {
//                 text: null
//             },
//             labels: {
//                 format: '{value}:00'
//             },
//             minPadding: 0,
//             maxPadding: 0,
//             startOnTick: false,
//             endOnTick: false,
//             tickPositions: [0, 6, 12, 18, 24],
//             tickWidth: 1,
//             min: 0,
//             max: 23,
//             reversed: true
//         },
    
//         colorAxis: {
//             stops: [
//                 [0, '#3060cf'],
//                 [0.5, '#fffbbc'],
//                 [0.9, '#c4463a'],
//                 [1, '#c4463a']
//             ],
//             min: -15,
//             max: 25,
//             startOnTick: false,
//             endOnTick: false,
//             labels: {
//                 format: '{value}℃'
//             }
//         },
    
//         series: [{
//             boostThreshold: 100,
//             borderWidth: 0,
//             nullColor: '#EFEFEF',
//             colsize: 24 * 36e5, // one day
//             tooltip: {
//                 headerFormat: 'Temperature<br/>',
//                 pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ' +
//                     '℃</b>'
//             }
//         }]
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

// export default HeatMap;

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// ------------------------ Aparece um grafico de linhas, mas não é o esperado ------------------

// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import HighchartsMore from "highcharts/highcharts-more";
// import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";
// import Accessibility from "highcharts/modules/accessibility";
// import Heatmap from "highcharts/modules/heatmap"; // ✅ Importação do Heatmap

// // Aplicar os módulos
// if (typeof HighchartsMore === "function") {
//     HighchartsMore(Highcharts);
// }
// if (typeof HistogramBellCurve === "function") {
//     HistogramBellCurve(Highcharts);
// }
// if (typeof Accessibility === "function") {
//     Accessibility(Highcharts);
// }
// if (typeof Heatmap === "function") {
//     Heatmap(Highcharts); // ✅ Ativação do Heatmap
// }

// function HeatMap({ data }) {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         if (data && Array.isArray(data)) {
//             const formattedData = data.map(row => [
//                 (row["id"]) ?? 0,
//                 parseFloat(row["ws100"]) ?? 0,
//                 (row["value"]) ?? 0
//             ]).filter(row => row[0] !== undefined && row[1] !== undefined);

//             setChartData(formattedData);
//         }
//     }, [data]);

//     const options = {
//         chart: {
//             type: 'heatmap',
//             borderColor: '#EBBA95',
//             borderWidth: 2,
//             type: 'line'
//         },
//         title: {
//             text: 'Highcharts Heatmap'
//         },
//         accessibility: {
//             enabled: true
//         },
//         xAxis: {
//             title: { text: 'X Axis' }
//         },
//         yAxis: {
//             title: { text: 'Y Axis' }
//         },
//         colorAxis: {
//             min: 0,
//             minColor: '#FFFFFF',
//             maxColor: '#FF0000'
//         },
//         series: [{
//             name: 'Heatmap Data',
//             data: chartData,
//             borderWidth: 1
//         }]
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

// export default HeatMap;

//   ----------------------------------------------------------
// ------------------------ não funfou ------------------
// -    -   -   -   -   -   - 3 Barras -    -   -   -   -   -   -

// import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Heatmap from "highcharts/modules/heatmap";

// // Ativar o módulo Heatmap
// if (typeof Heatmap === "function") {
//     Heatmap(Highcharts);
// }

// const HeatMap = ({ data }) => {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//     if (data && Array.isArray(data)) {
//       // Agrupar os dados por dia e hora
//         const groupedData = {};

//     data.forEach((row) => {
//         const date = row["id"].split(" ")[0]; // Extrair a data
//         const hour = parseInt(row["hour"], 10); // Extrair a hora
//         const key = `${date}-${hour}`;

//         if (!groupedData[key]) {
//           groupedData[key] = 0;
//         }
//         groupedData[key] += 1; // Incrementar a frequência
//       });

//       // Formatar os dados para o Heatmap
//       const formattedData = Object.entries(groupedData).map(([key, value]) => {
//         const [date, hour] = key.split("-");
//         const x = new Date(date).getTime(); // Converter a data para timestamp
//         const y = parseInt(hour, 10); // Hora como índice
//         return [x, y, value]; // [x, y, frequência]
//       });

//       setChartData(formattedData);
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       type: "heatmap",
//     },
//     title: {
//       text: "Frequência do Vento por Período do Dia",
//     },
//     xAxis: {
//       type: "datetime",
//       title: {
//         text: "Dias",
//       },
//     },
//     yAxis: {
//       title: {
//         text: "Horas do Dia",
//       },
//       categories: Array.from({ length: 24 }, (_, i) => `${i}:00`), // 0h a 23h
//       reversed: true,
//     },
//     colorAxis: {
//       min: 0,
//       minColor: "#FFFFFF",
//       maxColor: "#FF0000",
//     },
//     tooltip: {
//       formatter: function () {
//         return `<b>Dia:</b> ${Highcharts.dateFormat(
//           "%Y-%m-%d",
//           this.point.x
//         )}<br><b>Hora:</b> ${this.series.yAxis.categories[this.point.y]}<br><b>Frequência:</b> ${this.point.value}`;
//       },
//     },
//     series: [
//       {
//         name: "Frequência do Vento",
//         borderWidth: 1,
//         data: chartData,
//         dataLabels: {
//           enabled: true,
//           color: "#000000",
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       {chartData.length > 0 ? (
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       ) : (
//         <p>Carregando gráfico...</p>
//       )}
//     </div>
//   );
// };

// export default HeatMap;

// estrutura certa
// nao mostra dados
// import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Heatmap from "highcharts/modules/heatmap";
// import Exporting from "highcharts/modules/exporting";

// // Ativar os módulos Heatmap e Exporting
// if (typeof Heatmap === "function") {
//   Heatmap(Highcharts);
// }
// if (typeof Exporting === "function") {
//   Exporting(Highcharts);
// }

// const HeatMap = ({ data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (data && Array.isArray(data)) {
//       // Agrupar os dados por data e hora
//       const formattedData = data.map((row) => {
//         const date = row["id"]?.split(" ")[0]; // Extrair a data
//         const hour = parseInt(row["hour"], 10); // Extrair a hora
//         const speed = parseFloat(row["ws100"]); // Velocidade do vento

//         if (!date || isNaN(hour) || isNaN(speed)) return null; // Ignorar dados inválidos

//         const x = new Date(date).getTime(); // Converter a data para timestamp
//         const y = hour; // Hora como índice
//         return [x, y, speed]; // [x, y, velocidade]
//       });

//       setChartData(formattedData.filter((point) => point !== null)); // Remover pontos inválidos
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       type: "heatmap",
//       plotBorderWidth: 1,
//     },
//     title: {
//       text: "Velocidade do Vento por Data e Hora",
//     },
//     xAxis: {
//       type: "datetime",
//       title: {
//         text: "Data",
//       },
//       labels: {
//         format: "{value:%Y-%m-%d}", // Formato da data
//         rotation: -45,
//       },
//     },
//     yAxis: {
//       title: {
//         text: "Hora do Dia",
//       },
//       categories: Array.from({ length: 24 }, (_, i) => `${i}:00`), // 0h a 23h
//       reversed: true,
//     },
//     colorAxis: {
//       min: 0,
//       minColor: "#3060cf", // Azul para valores baixos
//       maxColor: "#c4463a", // Vermelho para valores altos
//       stops: [
//         [0, "#3060cf"], // Azul
//         [0.5, "#fffbbc"], // Amarelo
//         [1, "#c4463a"], // Vermelho
//       ],
//     },
//     tooltip: {
//       formatter: function () {
//         return `<b>Data:</b> ${Highcharts.dateFormat(
//           "%Y-%m-%d",
//           this.point.x
//         )}<br><b>Hora:</b> ${this.series.yAxis.categories[this.point.y]}<br><b>Velocidade:</b> ${this.point.value} m/s`;
//       },
//     },
//     series: [
//       {
//         name: "Velocidade do Vento",
//         borderWidth: 1,
//         data: chartData,
//         dataLabels: {
//           enabled: false, // Desativar rótulos para melhorar a visualização
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       {chartData.length > 0 ? (
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       ) : (
//         <p>Carregando gráfico...</p>
//       )}
//     </div>
//   );
// };

// export default HeatMap;

// import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Heatmap from "highcharts/modules/heatmap";
// import Exporting from "highcharts/modules/exporting";

// // Ativar os módulos Heatmap e Exporting
// if (typeof Heatmap === "function") {
//   Heatmap(Highcharts);
// }
// if (typeof Exporting === "function") {
//   Exporting(Highcharts);
// }

// const HeatMap = ({ data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     console.log("Dados recebidos:", data); // Verificar os dados recebidos

//     if (data && Array.isArray(data)) {
//       // Processar os dados
//       const formattedData = data.map((row) => {
//         const date = row["id"]?.split(" ")[0]; // Extrair a data
//         const hour = parseInt(row["hour"], 10); // Extrair a hora
//         const speed = parseFloat(row["ws100"]); // Velocidade do vento

//         if (!date || isNaN(hour) || isNaN(speed)) {
//           console.warn("Dados inválidos encontrados:", row); // Log de dados inválidos
//           return null;
//         }

//         const x = new Date(date).getTime(); // Converter a data para timestamp
//         const y = hour; // Hora como índice
//         return [x, y, speed]; // [x, y, velocidade]
//       });

//       const validData = formattedData.filter((point) => point !== null); // Remover pontos inválidos
//       console.log("Dados formatados para o gráfico:", validData); // Verificar os dados formatados
//       setChartData(validData);
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       type: "heatmap",
//       plotBorderWidth: 1,
//     },
//     title: {
//       text: "Velocidade do Vento por Data e Hora",
//     },
//     xAxis: {
//       type: "datetime",
//       title: {
//         text: "Data",
//       },
//       labels: {
//         format: "{value:%Y-%m-%d}", // Formato da data
//         rotation: -45,
//       },
//     },
//     yAxis: {
//       title: {
//         text: "Hora do Dia",
//       },
//       categories: Array.from({ length: 24 }, (_, i) => `${i}:00`), // 0h a 23h
//       reversed: true,
//     },
//     colorAxis: {
//       min: 0,
//       minColor: "#3060cf", // Azul para valores baixos
//       maxColor: "#c4463a", // Vermelho para valores altos
//       stops: [
//         [0, "#3060cf"], // Azul
//         [0.5, "#fffbbc"], // Amarelo
//         [1, "#c4463a"], // Vermelho
//       ],
//     },
//     tooltip: {
//       formatter: function () {
//         return `<b>Data:</b> ${Highcharts.dateFormat(
//           "%Y-%m-%d",
//           this.point.x
//         )}<br><b>Hora:</b> ${this.series.yAxis.categories[this.point.y]}<br><b>Velocidade:</b> ${this.point.value} m/s`;
//       },
//     },
//     series: [
//       {
//         name: "Velocidade do Vento",
//         borderWidth: 1,
//         data: chartData,
//         dataLabels: {
//           enabled: false, // Desativar rótulos para melhorar a visualização
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       {chartData.length > 0 ? (
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       ) : (
//         <p>Carregando gráfico...</p>
//       )}
//     </div>
//   );
// };

// export default HeatMap;



// -    -   -   -   -   -   Aparentemente DEU !!!!!!!!!!!
// import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Heatmap from "highcharts/modules/heatmap";
// import Exporting from "highcharts/modules/exporting";

// // Ativar os módulos Heatmap e Exporting
// if (typeof Heatmap === "function") {
//   Heatmap(Highcharts);
// }
// if (typeof Exporting === "function") {
//   Exporting(Highcharts);
// }

// const HeatMap = ({ data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (data && Array.isArray(data)) {
//       console.log("Dados recebidos:", data); // Verificar os dados recebidos

//       // Processar os dados
//       const formattedData = data
//         .map((row) => {
//           // Verificar se a linha é válida e possui as propriedades esperadas
//           if (!row || !row.id || !row.ws100) {
//             console.warn("Linha inválida encontrada e ignorada:", row);
//             return null;
//           }

//           // Extrair a data e a hora do campo "id"
//           const dateTime = row.id.split(" "); // Dividir em [data, hora]
//           if (dateTime.length < 2) {
//             console.warn("Formato inválido de 'id':", row.id);
//             return null;
//           }

//           const date = dateTime[0]; // Pegar a data (ex.: "2021-09-30")
//           const time = dateTime[1]; // Pegar a hora completa (ex.: "05:00:00.000003")

//           // Extrair apenas a hora (ex.: "5")
//           const hour = parseInt(time.split(":")[0], 10);

//           // Validar os valores extraídos
//           const speed = parseFloat(row.ws100); // Velocidade do vento
//           if (!date || isNaN(hour) || isNaN(speed)) {
//             console.warn("Dados inválidos encontrados:", row);
//             return null;
//           }

//           const x = new Date(date).getTime(); // Converter a data para timestamp
//           const y = hour; // Hora como índice
//           return [x, y, speed]; // [x, y, velocidade]
//         })
//         .filter((point) => point !== null); // Remover pontos inválidos

//       console.log("Dados formatados para o gráfico:", formattedData); // Verificar os dados formatados
//       setChartData(formattedData);
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       type: "heatmap",
//       plotBorderWidth: 1,
//       boost: {
//         useGPUTranslations: true, // Melhorar o desempenho para grandes conjuntos de dados
//       },
//     },
//     title: {
//       text: "Velocidade do Vento por Data e Hora",
//       align: "left",
//       x: 40,
//     },
//     subtitle: {
//       text: "Variação de velocidade do vento ao longo do tempo",
//       align: "left",
//       x: 40,
//     },
//     xAxis: {
//       type: "datetime",
//       labels: {
//         align: "left",
//         x: 5,
//         y: 14,
//         format: "{value:%B}", // Nome do mês
//       },
//       showLastLabel: false,
//       tickLength: 16,
//     },
//     yAxis: {
//       title: {
//         text: null,
//       },
//       labels: {
//         format: "{value}:00",
//       },
//       minPadding: 0,
//       maxPadding: 0,
//       startOnTick: false,
//       endOnTick: false,
//       tickPositions: [0, 6, 12, 18, 24],
//       tickWidth: 1,
//       min: 0,
//       max: 23,
//       reversed: true,
//     },
//     colorAxis: {
//       stops: [
//         [0, "#3060cf"], // Azul para valores baixos
//         [0.5, "#fffbbc"], // Amarelo para valores médios
//         [0.9, "#c4463a"], // Vermelho para valores altos
//         [1, "#c4463a"], // Vermelho intenso
//       ],
//       min: 0,
//       max: 25, // Ajuste conforme os valores de velocidade
//       startOnTick: false,
//       endOnTick: false,
//       labels: {
//         format: "{value} m/s",
//       },
//     },
//     series: [
//       {
//         name: "Velocidade do Vento",
//         borderWidth: 0,
//         nullColor: "#EFEFEF",
//         colsize: 24 * 36e5, // Um dia em milissegundos
//         data: chartData,
//         tooltip: {
//           headerFormat: "Velocidade do Vento<br/>",
//           pointFormat:
//             "{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} m/s</b>",
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       {chartData.length > 0 ? (
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       ) : (
//         <p>Carregando gráfico...</p>
//       )}
//     </div>
//   );
// };

// export default HeatMap;


// --------------- D E E E E E E E E E U -----------------
//                Nao mexe bocó

// import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Heatmap from "highcharts/modules/heatmap";
// import Exporting from "highcharts/modules/exporting";

// // Ativar os módulos Heatmap e Exporting
// if (typeof Heatmap === "function") {
//   Heatmap(Highcharts);
// }
// if (typeof Exporting === "function") {
//   Exporting(Highcharts);
// }

// const HeatMap = ({ data }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (data && Array.isArray(data)) {
//       const formattedData = data
//         .map((row) => {
//           if (!row || !row.id || !row.ws100) {
//             console.warn("Linha inválida encontrada e ignorada:", row);
//             return null;
//           }

//           const dateTime = row.id.split(" ");
//           if (dateTime.length < 2) {
//             console.warn("Formato inválido de 'id':", row.id);
//             return null;
//           }

//           const date = dateTime[0];
//           const time = dateTime[1];
//           const hour = parseInt(time.split(":")[0], 10);
//           const speed = parseFloat(row.ws100);

//           if (!date || isNaN(hour) || isNaN(speed)) {
//             console.warn("Dados inválidos encontrados:", row);
//             return null;
//           }

//           const x = new Date(date).getTime();
//           const y = hour;
//           return [x, y, speed];
//         })
//         .filter((point) => point !== null);

//       setChartData(formattedData);
//     }
//   }, [data]);

//   const options = {
//     chart: {
//       type: "heatmap",
//       plotBorderWidth: 1,
//       boost: {
//         useGPUTranslations: true,
//       },
//     },
//     title: {
//       text: "Velocidade do Vento por Data e Hora",
//       align: "left",
//       x: 40,
//     },
//     subtitle: {
//       text: "Variação de velocidade do vento ao longo do tempo",
//       align: "left",
//       x: 40,
//     },
//     xAxis: {
//       type: "datetime",
//       labels: {
//         align: "left",
//         x: 5,
//         y: 14,
//         format: "{value:%B}",
//       },
//       showLastLabel: false,
//       tickLength: 16,
//     },
//     yAxis: {
//       title: {
//         text: null,
//       },
//       labels: {
//         format: "{value}:00",
//       },
//       minPadding: 0,
//       maxPadding: 0,
//       startOnTick: false,
//       endOnTick: false,
//       tickPositions: [0, 6, 12, 18, 24],
//       tickWidth: 1,
//       min: 0,
//       max: 23,
//       reversed: true,
//     },
//     colorAxis: {
//       stops: [
//         [0, "#3060cf"], // Azul para velocidades mais baixas (2 m/s)
//         [0.25, "#80aaff"], // Azul claro para velocidades baixas-médias
//         [0.5, "#fffbbc"], // Amarelo para velocidades médias
//         [0.75, "#ff7f50"], // Laranja para velocidades altas
//         [1, "#c4463a"], // Vermelho para velocidades mais altas (15 m/s)
//       ],
//       min: 2, // Velocidade mínima
//       max: 15, // Velocidade máxima
//       startOnTick: false,
//       endOnTick: false,
//       labels: {
//         format: "{value} m/s",
//       },
//     },
//     series: [
//       {
//         name: "Velocidade do Vento",
//         borderWidth: 0,
//         nullColor: "#EFEFEF",
//         colsize: 24 * 36e5, // Um dia em milissegundos
//         data: chartData,
//         tooltip: {
//           headerFormat: "Velocidade do Vento<br/>",
//           pointFormat:
//             "{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} m/s</b>",
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       {chartData.length > 0 ? (
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       ) : (
//         <p>Carregando gráfico...</p>
//       )}
//     </div>import React, { useState, useEffect } from "react";

import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Heatmap from "highcharts/modules/heatmap";
import Exporting from "highcharts/modules/exporting";

// Ativar os módulos Heatmap e Exporting
if (typeof Heatmap === "function") {
  Heatmap(Highcharts);
}
if (typeof Exporting === "function") {
  Exporting(Highcharts);
}

const HeatMap = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const [minSpeed, setMinSpeed] = useState(2); // Velocidade mínima padrão
  const [maxSpeed, setMaxSpeed] = useState(15); // Velocidade máxima padrão

  useEffect(() => {
    if (data && Array.isArray(data)) {
      console.log("Dados recebidos:", data);

      // Calcular os valores mínimos e máximos dinamicamente
      const speeds = data
        .map((row) => parseFloat(row.ws100))
        .filter((speed) => !isNaN(speed));
      const calculatedMinSpeed = Math.min(...speeds);
      const calculatedMaxSpeed = Math.max(...speeds);

      setMinSpeed(calculatedMinSpeed);
      setMaxSpeed(calculatedMaxSpeed);

      // Processar os dados para o gráfico
      const formattedData = data
        .map((row) => {
          if (!row || !row.id || !row.ws100) {
            console.warn("Linha inválida encontrada e ignorada:", row);
            return null;
          }

          const dateTime = row.id.split(" ");
          if (dateTime.length < 2) {
            console.warn("Formato inválido de 'id':", row.id);
            return null;
          }

          const date = dateTime[0];
          const time = dateTime[1];
          const hour = parseInt(time.split(":")[0], 10);
          const speed = parseFloat(row.ws100);

          if (!date || isNaN(hour) || isNaN(speed)) {
            console.warn("Dados inválidos encontrados:", row);
            return null;
          }

          const x = new Date(date).getTime();
          const y = hour;
          return [x, y, speed];
        })
        .filter((point) => point !== null);

      console.log("Dados formatados para o gráfico:", formattedData);
      setChartData(formattedData);
    }
  }, [data]);

  const options = {
    chart: {
      type: "heatmap",
      plotBorderWidth: 1,
      boost: {
        useGPUTranslations: true, // Melhorar o desempenho para grandes conjuntos de dados
      },
    },
    title: {
      text: "Velocidade do Vento por Data e Hora",
      align: "left",
      x: 40,
    },
    subtitle: {
      text: "Variação de velocidade do vento ao longo do tempo",
      align: "left",
      x: 40,
    },
    xAxis: {
      type: "datetime",
      labels: {
        align: "left",
        x: 5,
        y: 14,
        format: "{value:%B}", // Nome do mês
      },
      showLastLabel: false,
      tickLength: 16,
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        format: "{value}:00",
      },
      minPadding: 0,
      maxPadding: 0,
      startOnTick: false,
      endOnTick: false,
      tickPositions: [0, 6, 12, 18, 24],
      tickWidth: 1,
      min: 0,
      max: 23,
      reversed: true,
    },
    colorAxis: {
      stops: [
        [0, "#3060cf"], // Azul para velocidades mais baixas
        [0.25, "#80aaff"], // Azul claro para velocidades baixas-médias
        [0.5, "#fffbbc"], // Amarelo para velocidades médias
        [0.75, "#ff7f50"], // Laranja para velocidades altas
        [1, "#c4463a"], // Vermelho para velocidades mais altas
      ],
      min: minSpeed, // Velocidade mínima dinâmica
      max: maxSpeed, // Velocidade máxima dinâmica
      startOnTick: false,
      endOnTick: false,
      labels: {
        format: "{value} m/s",
      },
    },
    series: [
      {
        name: "Velocidade do Vento",
        borderWidth: 0,
        nullColor: "#EFEFEF",
        colsize: 24 * 36e5, // Um dia em milissegundos
        data: chartData,
        tooltip: {
          headerFormat: "<b>Velocidade do Vento</b><br/>",
          pointFormat:
            "Data: {point.x:%e %b, %Y}<br/>Hora: {point.y}:00<br/>Velocidade: <b>{point.value} m/s</b>",
        },
      },
    ],
  };

  return (
    <div>
      {chartData.length > 0 ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <p>Nenhum dado disponível para exibir no gráfico.</p>
      )}
    </div>
  );
};

export default HeatMap;
//   );
// };

// export default HeatMap;

// cuidado

