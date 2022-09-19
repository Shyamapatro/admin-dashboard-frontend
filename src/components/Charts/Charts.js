import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Charts = (props) => {
  const { dashboard } = props;
  const Donutdata = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    datasets: [
      {
        label: "# of Votes",
        data: [
          dashboard.platformTypeANDROID,
          dashboard.platformTypeIOS,
          dashboard.platformTypeWEB,
        ],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Doughnut data={Donutdata} />
      <Typography
      className="chart-container"
        variant="text"
        color="initial"
        style={{ textAlign: "center" }}
        sx={{ m: 2 }}
      >
        <Typography
        className="chart-container"
          style={{ textAlign: "center" }}
          variant="text"
          textAlign="center"
          sx={{ m: 1 }}
        >
          Android : {dashboard.platformTypeANDROID}
        </Typography>
        <Typography
        className="chart-container"
          style={{ textAlign: "center" }}
          variant="text"
          textAlign="center"
          sx={{ m: 1 }}
        >
          IOS : {dashboard.platformTypeIOS}
        </Typography>
        <Typography
        className="chart-container"
          style={{ textAlign: "center" }}
          variant="text"
          textAlign="center"
          sx={{ m: 1 }}
        >
          WEB : {dashboard.platformTypeWEB}
        </Typography>
      </Typography>
      <Divider />
      <Typography className="chart-container" style={{ textAlign: "center" }} variant="text" sx={{ m: 2 }}>
        Total User {dashboard.TOTAL_USER_IN}
      </Typography>
    </>
  );
};
