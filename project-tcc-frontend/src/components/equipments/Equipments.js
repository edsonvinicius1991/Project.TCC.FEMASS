import "./Equipments.css"
import { useState, useEffect } from 'react';
import { Button, Input, Modal } from 'react-bootstrap';

import Tabela from "./Tabela"



function Equipments() {


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

    {/* <!--- Cadastro equipment---> */ }

    const [equipment, setEquipment] = useState({
        assetId: '',
        description: '',
        partNumber: '',
        dueDate: '',
        container: '',
        location: ''
    });

    function handleInputChange(event) {
        setEquipment({ ...equipment, [event.target.name]: event.target.value })
        //setEquipment(equipment);
    }
    function handleSelectContainer(event) {
        setEquipment({
            ...equipment, container: {
                idContainer: event.target.options[event.target.selectedIndex].text,

            },
        })
    }

    function handleSelectLocation(event) {
        setEquipment({
            ...equipment, location: {
                idLocation: event.target.value,
                rig: event.target.options[event.target.selectedIndex].text,

            },
        })
    }
    //setEquipment(equipment);



    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(equipment);

        fetch("http://localhost:8080/equipment/add", {
            method: "POST",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(equipment),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }


    {/* <!--- Cadastro equipment via funcao---> 

    const[objEquipment, setObjEquipment] = useState(equipment);

    function createPost(equipment){
        equipment.assetId = ''
        equipment.description = ''
        equipment.partNumber = ''
        equipment.dueDate = ''
        equipment.container = ''
        equipment.location = ''
    
    fetch("http://localhost:8080/equipments/add",{
        method: "POST",
        headers: {
            'Content-type': "application/json",
            },
            body: JSON.stringify(equipment),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch(err => console.log(err))
    }
    */ }

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
                                <input class="form-control mr-sm-2" type="search" placeholder="Search Asset" />
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
                            <form onSubmit={handleFormSubmit}>
                                <div class="form-group">
                                    <div><label class="col-form-label"> Asset Number * </label></div>
                                    <input type="text" name="assetId" class="form-control" onChange={handleInputChange} placeholder="Enter Asset ID" />
                                </div>
                                <div class="form-group mt-3">
                                    <div><label class="col-form-label"> Description * </label></div>
                                    <input type="text" name="description" class="form-control" onChange={handleInputChange} placeholder="Enter Description" />
                                </div>
                                <div class="form-group mt-3">
                                    <div><label class="col-form-label"> Part Number </label></div>
                                    <input type="text" name="partNumber" class="form-control" onChange={handleInputChange} placeholder="Enter Part number" />
                                </div>
                                <div class="form-group mt-3">
                                    <div><label class="col-form-label"> Expiration date </label></div>
                                    <input type="date" name="dueDate" class="form-control" onChange={handleInputChange} placeholder="Enter Expiracion Date" />
                                </div>
                                <div class="form-group mt-3">
                                    <div><label class="col-form-label"> Container </label></div>
                                    <select class="form-control" name="container" onChange={handleSelectContainer}>
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
                                    <select class="form-control" name="location" onChange={handleSelectLocation}>
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
                </div>
            </div>
        </div>



    )
};
export default Equipments;
