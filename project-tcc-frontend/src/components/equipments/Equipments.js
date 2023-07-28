import "./Equipments.css"
import { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


import Tabela from "./Tabela"
import ModalAdd from "./ModalAdd"
import ModalEdit from "./ModalEdit";



function Equipments() {

    const navigate = useNavigate()
    


    {/* <!--- ModalAdd---> */ }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     {/* <!--- ModalEdit---> */ }
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [objSelecionado, setObjSelecionado] = useState(null)

    const handleCloseModalEdit = () => setShowModalEdit(false);
    const handleShowModalEdit = obj => {
        setObjSelecionado(obj);
        setShowModalEdit(true);
    }
        

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
            navigate(0)
                        
        )
        
        .catch(err => console.log(err)) 

    }


    
    
    
    return (
        <div className="container ">
            
            <h1 style={{ margin: "50px 25px" }}>EQUIPMENTS</h1>
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"  >
                <div className="row ">

                    <div className="col-sm-3 offset-sm-0  mt-5 mb-4 text-gred" >
                        <Button variant="success" onClick={handleShow} style={{ fontSize:"18px"}}>
                            <i className="bi bi-plus" style={{ fontSize:"30px" , marginRight: "1rem"}}></i>
                            <b>New Equipment</b>
                        </Button>
                        
                    </div>
                    <div className="col-sm-3 mt-5 mb-4 text-gred"></div>

                </div>
                
                <Tabela vetorEquipments={equipments} handleRemove={removeEquipment} handleShow={handleShow} handleEdit={handleShowModalEdit} />

                {/* <!--- ModelAdd Box ---> */}
                <div className="model_box">
                    <ModalAdd                         
                        show= {show}
                        handleClose= {handleClose}                                           
                    />
                </div>

                {/* <!--- ModelAdd Box ---> */}
                <div className="model_box">
                    <ModalEdit                         
                        showModalEdit= {showModalEdit}
                        handleCloseModalEdit= {handleCloseModalEdit}
                        obj= {objSelecionado}                                                            
                    />
                </div>
            </div>
        </div>



    )
};
export default Equipments;
