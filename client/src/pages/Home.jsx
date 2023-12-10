import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Header title='Caesar cipher'/>
      <Outlet />
    </>
  );
}

export default Home;
