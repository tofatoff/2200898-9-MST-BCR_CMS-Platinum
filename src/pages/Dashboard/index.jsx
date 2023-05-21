import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam modi repudiandae sit ullam beatae cupiditate numquam itaque sapiente, voluptates omnis? Quae assumenda maiores maxime aut nostrum? Error fuga eius quae veniam
        minus officia impedit unde adipisci, modi facere laudantium incidunt ab culpa reprehenderit blanditiis aliquam eum officiis iure alias totam praesentium. Doloremque corrupti temporibus deserunt aut, magnam minima reprehenderit modi
        nesciunt, porro, quas repellendus accusantium dolor quod natus neque et? Deleniti corrupti assumenda doloremque maxime esse dignissimos quam aspernatur eum eveniet ratione natus nam, ipsum voluptatum debitis dolorem odit saepe
        dolore amet non temporibus. Distinctio debitis commodi iusto atque.
      </div>
    </div>
  );
};

export default Dashboard;
