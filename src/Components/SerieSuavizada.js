import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


function SerieSuavizada({ data }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data) {
            

            if (data.length > 0) {
                console.log("Chaves disponíveis:", Object.keys(data[0]));
            }

            const formattedData = data.map((row) => [
                row["id"], // x
                parseFloat(row["ws100"]), // y
            ]).filter((row) => row[0] && !isNaN(row[1]));

            console.log("Dados formatados para o gráfico:", formattedData);
            setChartData(formattedData);
        }
    }, [data]);


    const options = {
        chart: {
            type: "line",
            zoomType: "x",
        },
        title: {
            text: "Série Temporal -> Velocidade",
        },
        colors: ["#0ad13c"],
        yAxis: {
            title: {
                text: "Direction",
            },
        },
        series: [
            {
                name: "Time",
                data: chartData, // Passa os dados formatados (Padrao CSV)
            },
        ],
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

export default SerieSuavizada;
