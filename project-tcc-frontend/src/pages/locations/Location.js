import "../equipments/Equipments.css"

import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import Tabela from "../locations/Tabela"
import ModalAdd from "../equipments/ModalAdd"
import ModalEdit from "../equipments/ModalEdit";


function Location({ filter }) {

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

    {/* <!--- Fill table Locations---> */ }
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/location")
            .then(resp => resp.json())
            .then(data => setLocations(data));
    }, []);

    {/* <!--- Remove function---> */ }
    function removeLocation(id) {
        fetch(`http://localhost:8080/location/${id}`, {
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
        <div className="container">
            <h1 style={{ margin: "50px 25px" }}>LOCATIONS </h1>
            
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"  >
                <div className="row ">
                    <div className="col-sm-3 offset-sm-0  mt-5 mb-4 text-gred" >
                        <Button variant="secondary" onClick={handleShow} style={{ fontSize: "20px" }}>
                            <i className="bi bi-plus" style={{ fontSize: "30px", marginRight: "1rem" }}></i>
                            <b>New Location</b>
                        </Button>
                    </div>
                    <div className="col-sm-3 mt-5 mb-4 text-gred"></div>
                </div>

                {/* <!--- Table locations ---> */}
                <Tabela
                    vetorLocations={locations}
                    handleRemove={removeLocation}
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
export default Location;
