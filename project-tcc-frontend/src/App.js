import './App.css';
import Overview from "./pages/overview/Overview"
import SideNavBar from "./pages/sideNavBar/SideNavBar"
import NaoEncontrado from './pages/error/NaoEncontrado'
import Equipments from './pages/equipments/Equipments'
import Shipping from './pages/shipping/Shipping'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Containers from './pages/containers/Containers';
import Location from './pages/locations/Location';



function App() {
  return (
    <div className="main-div">

      <section style={{width: "100%"}}>
      <BrowserRouter>
        <div className="main-div">
          <SideNavBar />
          <main style={{width:"100%"}}>
            <Routes>
              <Route path="*" element={<Login />} />
              <Route path="/" element={<Overview />} />
              <Route path="/equipments" element={<Equipments/>} />
              <Route path="/equipments/filter_expiring" element={<Equipments filter={'Expiring'}/>} />
              <Route path="/equipments/filter_expired" element={<Equipments filter={'Expired'}/>} />
              <Route path="/wirelineunits" element={<NaoEncontrado />} />
              <Route path="/containers" element={<Containers />} />
              <Route path="/locations" element={<Location />} />
              <Route path="/cables" element={<NaoEncontrado />} />
              <Route path="/orders" element={<NaoEncontrado />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </main>
          
        </div>
      </BrowserRouter>
      </section>
    </div>

  );
}

export default App;
