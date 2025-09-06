import Footer from "./componentes/footer/index";
import Header from "./componentes/header/index";
import Home from "./paginas/home/home";
import Sidebar from "./componentes/sidebar/index";



function AppRoutes() {
    return (
      <>
        <Header />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 p-4">
            <Home />
          </div>
        </div>
        <Footer />
      </>
    );
  }
  

export default AppRoutes;