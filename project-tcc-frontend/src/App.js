import './App.css';
import Overview from "./pages/overview/Overview";
import SideNavBar from "./components/sideNavBar/SideNavBar"
import NaoEncontrado from './pages/NaoEncontrado'
import Equipments from './pages/equipments/Equipments';
import {BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="main-div">

      <section style={{width: "100%"}}>
      <BrowserRouter>
        <div className="main-div">
          <SideNavBar />
          <main style={{width:"100%"}}>
            <Routes>
              <Route path="*" element={<NaoEncontrado />} />
              <Route path="/" element={<Overview />} />
              <Route path="/equipments" element={<Equipments/>} />
              <Route path="/equipments/filter_expiring" element={<Equipments filter={'Expiring'}/>} />
              <Route path="/equipments/filter_expired" element={<Equipments filter={'Expired'}/>} />
              <Route path="/wirelineunits" element={<NaoEncontrado />} />
              <Route path="/cables" element={<NaoEncontrado />} />
              <Route path="/orders" element={<NaoEncontrado />} />
              <Route path="/shipping" element={<NaoEncontrado />} />
            </Routes>
          </main>
          
        </div>
      </BrowserRouter>
      </section>
    </div>

  );
}

export default App;
