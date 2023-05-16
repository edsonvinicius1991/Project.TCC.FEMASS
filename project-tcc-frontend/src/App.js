import './App.css';
import Cards from './components/cards/Cards';
import Overview from "./components/main/Overview";
import SideNavBar from "./components/sideNavBar/SideNavBar"
import NaoEncontrado from './components/NaoEncontrado'
import Equipments from './components/equipments/Equipments';
import {BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="main-div">

    
  
      <section>
      <BrowserRouter>
        <div className="main-div">
          <SideNavBar />
          <main>
            <Routes>
              <Route path="*" element={<NaoEncontrado />} />
              <Route path="/" element={<Overview />} />
              <Route path="/equipments" element={<Equipments />} />
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
