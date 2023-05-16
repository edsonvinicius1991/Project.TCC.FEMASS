import "./Overview.css";
import Cards from "../cards/Cards";

function Overview() {

    return (
        <div>
            <h1 style={{margin: "50px 50px"}}>OVERVIEW</h1>
            <Cards/>
            <section style={{ color: "red", textAlign: "center", margin: "100px", border: "solid red" }}><h1>/TODO-List</h1></section>
        </div>
    )
};
export default Overview;
