import "./Equipments.css"
import { useState, useEffect } from 'react';
import { Button, Modal, Input } from 'react-bootstrap';

import Tabela from "./Tabela"

{/* <!--- Equipments---> */ }
function Equipments() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/equipment")
            .then(resp => resp.json())
            .then(data => setEquipments(data));
    }, []);

    {/* <!--- Containers select box---> */ }

    const [containers, setContainers] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/container/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setContainers(data)
            })
            .catch((err) => console.log(err))

    }, [])

    {/* <!--- Location select box---> */ }

    const [location, setLocation] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/location/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setLocation(data)
            })
            .catch((err) => console.log(err))

    }, [])


    return (
        <div class="container ">

            <h1 style={{ margin: "50px 25px" }}>EQUIPMENTS</h1>
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded" >
                <div class="row ">

                    <div class="col-sm-3 offset-sm-0  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Equipment
                        </Button>
                    </div>
                    <div class="col-sm-3 mt-5 mb-4 text-gred"></div>

                    <div class="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search Asset" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>

                <Tabela vetor={equipments} />

                {/* <!--- Model Box ---> */}
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Equipment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div class="form-group">
                                    <input type="asset" class="form-control" id="assetInput" aria-describedby="assetHelp" placeholder="Enter Asset ID" />
                                </div>
                                <div class="form-group mt-3">
                                    <input type="description" class="form-control" id="descriptionInput" aria-describedby="descriptionHelp" placeholder="Enter Description" />
                                </div>
                                <div class="form-group mt-3">
                                    <div><label class="col-form-label"> Expiration date: </label></div>
                                    <input type="date" class="form-control" id="inputDuedate" aria-describedby="dueDateHelp" placeholder="Enter Expiracion Date" />
                                </div>
                                <div class="form-group mt-3">
                                    <div><label class="col-form-label"> Container: </label></div>
                                    <select class="form-control">
                                        <option>Selecione uma opção</option>
                                        {containers.map((option) => (
                                            <option value={option.idContainer} key={option.idContainer}>
                                                {option.idContainer}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div class="form-group mt-3">
                                    <div><label> Location: </label></div>
                                    <select class="form-control">
                                        <option>Selecione uma opção</option>
                                        {location.map((option) => (
                                            <option value={option.idLocation} key={option.idLocation}>
                                                {option.rig}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-success mt-4">Add Record</button>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                    {/* Model Box Finsihs */}
                </div>
            </div>
        </div>



    )
};
export default Equipments;
