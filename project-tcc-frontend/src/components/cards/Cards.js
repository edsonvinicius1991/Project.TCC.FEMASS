import './Cards.css';

import { useState, useEffect} from 'react';


function Cards() {

    {/* <!--- Array Equipments---> */ }
    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/equipment")
            .then(resp => resp.json())
            .then(data => setEquipments(data));
    }, []);
    


    {/* <!--- Filtro de equipmantos por expiração ---> */ }
    
    let dateNow = new Date() //Recebe data atual
    
    var dataLess3M = new Date()
    dataLess3M.setDate(dataLess3M.getDate() + 90)//Acrescenta 3 meses a data atual

    function expireds (obj){
        return obj.dueDate < dateNow.toJSON();
    }
    function expiringLessThanNinety (obj){
        return obj.dueDate < dataLess3M.toJSON() && obj.dueDate > dateNow.toJSON() ;
    }
    
    const expiredFiltered = equipments.filter(expireds)
    const expiringFiltered = equipments.filter(expiringLessThanNinety)

    return (
        <div className="row">
            
            <div className="column">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Certification expiration 90 days</h4>
                        <div className="card-yellow"><i className="bi bi-shield-exclamation"></i></div>
                        <h1 className="card-text">{expiringFiltered.length}</h1>
                        <a href="#" className="card-link">More details</a>

                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Certificacion expired</h4>
                        <div className="card-red"><i className="bi bi-shield-x"></i></div>
                        <h1 className="card-text">{expiredFiltered.length}</h1>
                        <a href="#" className="card-link">More details</a>

                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Maintenance Required</h4>
                        <div className="card-blue"><i className="bi bi-wrench-adjustable"></i></div>
                        <h1 className="card-text"> - </h1>
                        <a href="#" className="card-link">More details</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;