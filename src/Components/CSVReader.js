// por enquanto funciona

import React, { useState, useEffect } from "react";
import { useCSVReader } from "react-papaparse";
import SerieSpeed from "./SerieSpeed";
import SerieDirection from "./SerieDirection";
import CSVTable from "./CSVTable"; 
import ChartLine from "./ChartLine";
import WindRose from './WindRose';
import HeatMap from './HeatMap';
import SerieSuavizada from './SerieSuavizada';
import SpiralChart from './SpiralChart';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import '../Styles/dashboard.css';
import '../Styles/table.css';
import '../Styles/charts.css';
import ChartHistogram from "./ChartHistogram";

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  browseFile: {
    width: "20%"
  },
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%"
  },
  remove: {
    borderRadius: 0,
    padding: "0 20px"
  },
  progressBarBackgroundColor: {
    backgroundColor: "red"
  }
}



export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  const [csvData, setCsvData] = useState(null);
  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 

  useEffect(() => {
    console.log("CSV atualizado:", csvData);
  }, [csvData]);

  // Converter dia, mês e ano para um objeto Date
  const parseDate = (day, month, year) => {
    if (!day || !month || !year) return null;
    const date = new Date(year, month - 1, day); // Quando usa 'Date' -> Janeiro = 0
    return date;
  };

// aaaaaaaaaaapartir daqui mudancas testes
  const displayedData = csvData && (startDate || endDate)
    ? csvData.filter(row => {
        // Deixa a data completa
        const rowDate = parseDate(Number(row["day"]), Number(row["month"]), Number(row["year"])); // nome das colunas CSV
        if (!rowDate) return false;

        // Verifica se a data está dentro do intervalo
        if (startDate && endDate) {
          return rowDate >= startDate && rowDate <= endDate;
        } else if (startDate) {
          return rowDate >= startDate;
        } else if (endDate) {
          return rowDate <= endDate;
        }
        return true;  // Se não tiver filtro
      })
    : csvData;

  useEffect(() => {
    console.log("Intervalo selecionado: ", startDate, " até ", endDate);
    console.log("Dados filtrados:", displayedData);
  }, [startDate, endDate, displayedData]);

  return (
    <>
      <CSVReader
        config={{ header: true }}
        onUploadAccepted={(results) => {
          // apartir daqui mudancar ordenar tabela

        // ---- Aplicar Zoom em todos os graficos
          // const syncExtremes = function (e) {
          //   if (e.trigger !== 'syncExtremes') { // Evita loop infinito
          //       Highcharts.charts.forEach(function (chart) {
          //           if (chart && chart.xAxis[0]) {
          //               chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, { trigger: 'syncExtremes' });
          //           }
          //       });
          //   }
          // };

          console.log("Arquivo CSV carregado", results.data);
          setCsvData(results.data);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
              <button type="button" {...getRootProps()} style={{ width: "20%" }}>
                Browse file
              </button>
              <div id="csv" style={{ border: "1px solid #ccc", height: 45, lineHeight: 2.5, paddingLeft: 10, width: "80%" }}>
                {/* {acceptedFile && acceptedFile.name} */}
                {acceptedFile && acceptedFile.name ? acceptedFile.name : "No file loaded"}
              </div>
              <button {...getRemoveFileProps()} style={{ borderRadius: 0, padding: "0 20px" }} onClick={() => setCsvData(null)}>
                Remove
              </button>
            </div>
            <ProgressBar />
          </>
        )}
      </CSVReader>

      {/* Filtro de intervalo de Data */}
      {csvData && (
        <div>
          <label>Filtrar: </label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setStartDate(update[0]);
              setEndDate(update[1]);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione um intervalo"
            isClearable
            minDate={new Date(2021, 0, 1)} // Definindo data mínima (1 de janeiro de 2021)
            maxDate={new Date(2024, 11, 31)} // Definindo data máxima (31 de dezembro de 2021)
            scrollableMonthYearDropdown
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            todayButton="Hoje"
            // Data inicial para o calendário (setando para 1 de setembro de 2021)
            //defaultValue={new Date(2021, 10, 10)}
          />
        </div>
      )}

      <div className="general">
              {displayedData && displayedData.length > 0 ? (
                // <SerieSpeeddata={displayedData} />
                <div className="general-container">
                  <div className="chart-container">
                    <div className="chart-line">
                      <SerieSuavizada data={displayedData} />
                    </div>
                    {/* <div className="chart-line">
                      <SerieSpeed data={displayedData} />
                    </div>
                    <div className="chart-line">
                      <SerieDirection data={displayedData} />
                    </div>
                    <div className="chart-top">
                      <div className="wind-rose"> 
                        <WindRose  data={displayedData} />
                      </div>  
                      <div className="chart-column">
                        <HeatMap data={displayedData} />  
                      </div>
                      <div className="new-chart">
                        <ChartHistogram data={displayedData} />
                      </div>
                    </div> */}
                    {/* <div className="chart-top">
                      <div className="chart-column">
                        <ChartLine data={displayedData} />
                      </div>
                      <div className="wind-rose"> 
                        <WindRose  data={displayedData} />
                      </div>  
                      <div className="new-chart">
                        <ChartLine data={displayedData} />
                      </div>
                    </div> */}
                  </div>
                </div>
              ) : (
                <p>{(startDate && endDate) ? "Nenhum dado encontrado para este intervalo." : "Carregue um arquivo CSV "}</p>
              )}
      </div> 
    </>
  );
}
