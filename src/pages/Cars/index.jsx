import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header";
import ListMenu from "./components/list_menu";
import ListCar from "./components/listcar";

const Cars = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar active="cars" />
      <main>
        <Header />
        <ListMenu />
        <ListCar />
      </main>
    </div>
  );
};

export default Cars;
