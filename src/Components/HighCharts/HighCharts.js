import React from "react";
import Highcharts from "highcharts";
import { useEffect } from "react";
import { useSelector } from "react-redux";


function Chart({ id, cardData, bucketNames }) {
  const state = useSelector((state) => state);
  const renderChart = () => {
    const chart = Highcharts.chart(id, {
      chart: {
        type: "column",
        reflow: "true",
        backgroundColor: "#273D49BF",
      },
      series: [
        {
          showInLegend: false,
          data: [...cardData],
        },
      ],
      yAxis: {
        gridLineColor:"transparent",
        visible: false,
      },
      xAxis: {
        labels: {
          style: {
            fontSize: "0.6vw",
            color: "white",
          },
        },
        categories: bucketNames ?? state.bucket,
      },
      title: {
        text: undefined,
      },
      credits: { 
        enabled: false 
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            formatter() {
              console.log(this.y);
              const c = cardData.reduce((a, b) => a + b, 0);
              return (
                
                ((this.point.y / c) * 100).toFixed(2) 
               
              );
            },
            crop:"false",
            overflow:"none",
            style: {
              fontSize: "0.6vw",
              textOutline: "none",
              color: "#5DAAE0",
            },
          },
        },
      },
    });
    return chart;
  };

  useEffect(() => {
    console.log(cardData, state.bucket);
    renderChart();
  }, [state.open, state.currentData]);

  return (
    <div id={id} style={{ height: "27vh", width:id!=="11111111" ? (state.open ? "20vw":"26vw") : (state.open ? "25vw": "29vw") }}></div>
  );
}

export default Chart;