import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { RoutingArray } from "../utils/RoutingArray";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <main>
      <Header title="Title" subtitle="subtitle">
        <NavBar array={RoutingArray} />
      </Header>
      <Outlet />
      <Footer/>
    </main>
  );
};
