import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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
                parseFloat(row["wdir100"])    // y
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
            text: "Série Temporal -> Direção",
        },
        colors: ['#0ad13c'],
        yAxis: {
            title: {
                text: 'Direction',
            },
        },
        series: [{
            name: 'Direction',
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