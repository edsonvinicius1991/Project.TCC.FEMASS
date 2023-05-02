import './App.css';

import Overview from "./components/main/Overview";
import SideNavBar from "./components/sideNavBar/SideNavBar"


function App() {
  return (
    <div className="Main-div">
      <SideNavBar/>
      <Overview/>
      
    </div>
  );
}

export default App;
