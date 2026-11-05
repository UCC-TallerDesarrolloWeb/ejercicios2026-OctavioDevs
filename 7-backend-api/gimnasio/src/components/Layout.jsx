import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ logueado, setLogueado }) {
  return (
    <>
      <Header logueado={logueado} setLogueado={setLogueado} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
