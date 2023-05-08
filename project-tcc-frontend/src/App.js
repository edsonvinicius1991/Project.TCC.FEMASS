import './App.css';
import Cards from './components/cards/Cards';
import Overview from "./components/main/Overview";
import SideNavBar from "./components/sideNavBar/SideNavBar"


function App() {
  return (
    <div className="Main-div">
      <SideNavBar/>
      <Cards/>
      
    </div>
  );
}

export default App;
