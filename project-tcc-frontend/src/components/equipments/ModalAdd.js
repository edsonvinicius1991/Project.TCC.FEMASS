import "./Equipments.css";
import Message from "../commons/Message"
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Button, Modal } from 'react-bootstrap';

function ModalAdd({
    show,
    handleClose
    
}) {


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

    const navigate = useNavigate()

    

    function handleFormSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:8080/equipment/add", {
            method: "POST",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(equipment),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)

                
                alert("Equipamento adicionado com sucesso!")
                navigate(0, { message: 'Projeto criado com sucesso!' })
                
            })
            .catch(err => alert(err))

    }
    

    
    return (
        

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
                
                <form onSubmit={handleFormSubmit} >
                    <div className="form-group">
                        <div><label className="col-form-label"> Asset Number * </label></div>
                        <input
                            type="text"
                            name="assetId"
                            className="form-control"
                            onChange={handleInputChange}
                            placeholder="Enter Asset ID"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Description * </label></div>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={handleInputChange}
                            placeholder="Enter Description"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Part Number </label></div>
                        <input
                            type="text"
                            name="partNumber"
                            className="form-control"
                            onChange={handleInputChange}
                            placeholder="Enter Part number"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Expiration date </label></div>
                        <input
                            type="date"
                            name="dueDate"
                            className="form-control"
                            onChange={handleInputChange}
                            placeholder="Enter Expiration Date"

                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Container </label></div>
                        <select
                            className="form-control"
                            name="container"
                            onChange={handleSelectContainer}
                        >
                            <option>Selecione uma opção</option>
                            {containers.map((option) => (
                                <option value={option.idContainer} key={option.idContainer}>
                                    {option.idContainer}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group mt-3">
                        <div><label> Location: </label></div>
                        <select
                            className="form-control"
                            name="location"
                            onChange={handleSelectLocation}  >

                            <option>Selecione uma opção</option>
                            {location.map((option) => (
                                <option value={option.idLocation} key={option.idLocation}>
                                    {option.rig}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-success mt-4"  >Add Record</button>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>

    )
};
export default ModalAdd;