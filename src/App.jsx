import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRoutes from "./config/router"
import ScrollToTop from "./components/ScrollToTop"; 

function App() {

  
  return (
    <>
      <ScrollToTop />
      <div className="overflow-x-hidden font-sans bg-[#121212] m-0 p-0 fixed inset-0 w-screen h-screen overflow-y-auto  text-white">
        <Header />
        <div>
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
