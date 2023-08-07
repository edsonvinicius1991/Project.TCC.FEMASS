//import "./Equipments.css";

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Modal } from 'react-bootstrap';

function ModalEdit({ showModalEdit, handleCloseModalEdit, obj }) {

    var id

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
        serialNumber: '',
        container: '',
        location: ''
    });

    {/* <!--- Get equipment data by id function---> */ }
    function getEquipmentById(id) {
                id = obj.assetId
            fetch(`http://localhost:8080/equipment/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setEquipment(data)
                })
                .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        { obj !== null ? getEquipmentById(id) : id = null } //Recebendo AssetId do objeto vindo botão edit
    }, [showModalEdit])


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

        fetch(`http://localhost:8080/equipment/${equipment.assetId}`, {
            method: "PUT",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(equipment),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                if (data.message !== undefined) {
                    alert(data.message);
                } else if (data.error !== "Bad Request") {
                    alert(`Equipament [${equipment.assetId}] updated successfully!`)
                    navigate(0)
                } else
                    alert("Fill in the mandatory fields: (*)\n" + "Asset ID*\n" + "Description*\n" + "Container*\n" + "Location*")
            })
            .catch(err => alert(err))

    }



    return (


        <Modal
            show={showModalEdit}
            onHide={handleCloseModalEdit}
            backdrop="static"
            keyboard={false}
            value
            

        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Equipment</Modal.Title>
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
                            //placeholder= "Enter AssetId"
                            value= {equipment.assetId}
                            disabled={true}

                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Description * </label></div>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={handleInputChange}
                            //placeholder="Enter Description"
                            value= {equipment.description} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Serial Number </label></div>
                        <input
                            type="text"
                            name="serialNumber"
                            className="form-control"
                            onChange={handleInputChange}
                            //placeholder="Enter Serial Number"
                            value= {equipment.serialNumber} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Part Number </label></div>
                        <input
                            type="text"
                            name="partNumber"
                            className="form-control"
                            onChange={handleInputChange}
                            //placeholder="Enter Part number"
                            value= {equipment.partNumber} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Expiration date </label></div>
                        <input
                            type="date"
                            name="dueDate"
                            className="form-control"
                            onChange={handleInputChange}
                            //placeholder="Enter Expiration Date"
                            value= {equipment.dueDate} 

                        />
                    </div>
                    <div className="form-group mt-3">
                        <div><label className="col-form-label"> Container * </label></div>
                        <select
                            className="form-control"
                            name="container"
                            onChange={handleSelectContainer}
                        >
                            <option disabled={true} style={{backgroundColor: "lightblue"}}>{equipment.container.idContainer}</option>
                            {containers.map((option) => (
                                <option value={option.idContainer} key={option.idContainer}>
                                    {option.idContainer}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group mt-3">
                        <div><label> Location * </label></div>
                        <select
                            className="form-control"
                            name="location"
                            onChange={handleSelectLocation}
                        >

<option disabled={true} style={{backgroundColor: "lightblue"}}>{equipment.location.rig}</option>
                            {location.map((option) => (
                                <option value={option.idLocation} key={option.idLocation}>
                                    {option.rig}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success mt-4"  >Save Changes</button>
                        <button type="button" className="btn btn-secondary mt-4"  data-dismiss="modal" onClick={handleCloseModalEdit} style={{marginLeft: "6px"}}>Cancel</button>
                    </div>

                </form>
            </Modal.Body>
        </Modal>

    )
};
export default ModalEdit;