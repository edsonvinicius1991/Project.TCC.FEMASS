import "../equipments/Equipments.css"

import { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import Tabela from "../containers/Tabela"
import ModalAdd from "../equipments/ModalAdd"
import ModalEdit from "../equipments/ModalEdit";


function Containers({ filter }) {

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

    {/* <!--- Fill table Containers---> */ }
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/container")
            .then(resp => resp.json())
            .then(data => setEquipments(data));
    }, []);

    {/* <!--- Remove function---> */ }
    function removeEquipment(id) {
        fetch(`http://localhost:8080/container/${id}`, {
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
                        <Button variant="secondary" onClick={handleShow} style={{ fontSize: "20px" }}>
                            <i className="bi bi-plus" style={{ fontSize: "30px", marginRight: "1rem" }}></i>
                            <b>New Equipment</b>
                        </Button>
                    </div>
                    <div className="col-sm-3 mt-5 mb-4 text-gred"></div>
                </div>

                {/* <!--- Table equipments ---> */}
                <Tabela
                    vetorEquipments={equipments}
                    handleRemove={removeEquipment}
                    handleShow={handleShow}
                    handleEdit={handleShowModalEdit}
                    filter={filter} />
                

                {/* <!--- ModelAdd Box ---> */}
                <div className="model_box">
                    <ModalAdd
                        show={show}
                        handleClose={handleClose}
                    />
                </div>
                
                {/* <!--- ModelEdit Box ---> */}
                <div className="model_box">
                    <ModalEdit
                        showModalEdit={showModalEdit}
                        handleCloseModalEdit={handleCloseModalEdit}
                        obj={objSelecionado}
                    />
                </div>
            </div>
        </div>
    )
};
export default Containers;
