import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar active="dashboard" />
      <div>
        <Header />
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam modi repudiandae sit ullam beatae cupiditate numquam itaque sapiente, voluptates omnis? Quae assumenda maiores maxime aut nostrum? Error fuga eius quae veniam
          minus officia impedit unde adipisci, modi facere laudantium incidunt ab culpa reprehenderit blanditiis aliquam eum officiis iure alias totam praesentium. Doloremque corrupti temporibus deserunt aut, magnam minima reprehenderit
          modi nesciunt, porro, quas repellendus accusantium dolor quod natus neque et? Deleniti corrupti assumenda doloremque maxime esse dignissimos quam aspernatur eum eveniet ratione natus nam, ipsum voluptatum debitis dolorem odit
          saepe dolore amet non temporibus. Distinctio debitis commodi iusto atque.
        </div>
        <div className="">
          <Bar options={options} data={data} />;
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
