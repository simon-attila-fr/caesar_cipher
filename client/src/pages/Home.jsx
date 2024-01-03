import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Header title='Caesar cipher' classname="caesar-home-header"/>
      <Outlet />
    </>
  );
}

export default Home;
