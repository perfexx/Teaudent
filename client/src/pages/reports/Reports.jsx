import React from "react";
import "./reports.css";
import ReactApexChart from "react-apexcharts";
import { ArrowDownward } from "@mui/icons-material";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seriesSpark3: [
        {
          data: [45, 52, 38, 14, 33, 26, 42, 20],
        },
      ],
      optionsSpark3: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
        title: {
          text: "Analytics",
          offsetX: 0,
          style: {
            fontSize: "20px",
          },
        },
        subtitle: {
          text: "Numbers",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
      },

      series1: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
      options1: {
        chart: {
          type: "line",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        title: {
          text: "Analytics",
          offsetX: 0,
          style: {
            fontSize: "20px",
          },
        },
        subtitle: {
          text: "Numbers",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      },

      series2: [
        {
          data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        },
      ],
      options2: {
        chart: {
          type: "line",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        title: {
          text: "Analytics",
          offsetX: 0,
          style: {
            fontSize: "20px",
          },
        },
        subtitle: {
          text: "Numbers",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      },

      series3: [43, 32, 12, 9],
      options3: {
        chart: {
          type: "pie",
          width: 40,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        title: {
          text: "Analytics",
          offsetX: 0,
          style: {
            fontSize: "20px",
          },
        },
        subtitle: {
          text: "Numbers",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
        stroke: {
          width: 1,
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          fontFamily: "Source Sans Pro, sans-serif",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 8, 5],
        },
        title: {
          text: "Page Statistics",
          align: "left",
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
    };
  }

  render() {
    return (
      <div className="reports">
        <div className="reportContainer">
          <div className="reportItem">
            <div className="reportHandleContainer">
              <ReactApexChart
                options={this.state.optionsSpark3}
                series={this.state.seriesSpark3}
                type="area"
                height={180}
              />
            </div>
          </div>

          <div className="reportItem">
            <div className="reportHandleContainer">
              <ReactApexChart
                options={this.state.options2}
                series={this.state.series2}
                type="bar"
                height={180}
                // width={100}
              />
            </div>
          </div>
          <div className="reportItem">
            <div className="reportHandleContainer">
              <ReactApexChart
                options={this.state.options1}
                series={this.state.series1}
                type="line"
                height={180}
                // width={100}
              />
            </div>
          </div>

          <div className="reportItem">
            <div className="reportHandleContainer">
              <ReactApexChart
                options={this.state.options3}
                series={this.state.series3}
                type="pie"
                height={180}
                // width={100}
              />
            </div>
          </div>
        </div>
        <div className="reportItem">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart;
