import "./Equipments.css"
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'


import Tabela from "./Tabela"
import ModalAdd from "./ModalAdd"
import Message from "../commons/Message"



function Equipments() {

    const navigate = useNavigate()

    {/* <!--- Modal---> */ }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    {/* <!--- Tabela Equipments---> */ }
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/equipment")
            .then(resp => resp.json())
            .then(data => setEquipments(data));
    }, []);

    {/* <!--- Remove function---> */ }
    function removeEquipment(id) {
        fetch(`http://localhost:8080/equipment/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then(
            alert("Produto deletedado com sucesso!"),
            navigate(0)
                        
        )
        
        .catch(err => console.log(err)) 

    }

    const location = useLocation()
    let message = ''
    let typeMsg = ''
    if (location.state) {
        message = location.state.message
        
    }

    
    
    
    return (
        <div className="container ">
            
            <h1 style={{ margin: "50px 25px" }}>EQUIPMENTS</h1>
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded" >
                <div className="row ">

                    <div className="col-sm-3 offset-sm-0  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Equipment
                        </Button>
                        
                    </div>
                    <div className="col-sm-3 mt-5 mb-4 text-gred"></div>

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Asset" />
                            </form>                            
                        </div>
                    </div>
                </div>

                {message && <Message msg={message} typeMsg={typeMsg} />}

                <Tabela vetor={equipments} handleRemove={removeEquipment} />

                {/* <!--- Model Box ---> */}
                <div className="model_box">
                    <ModalAdd                         
                        show= {show}
                        handleClose= {handleClose}
                                            
                    />
                </div>
            </div>
        </div>



    )
};
export default Equipments;
