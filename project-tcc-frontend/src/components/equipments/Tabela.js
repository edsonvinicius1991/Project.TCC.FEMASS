import "./Equipments.css";

import { useState } from 'react';

function Tabela({ vetorEquipments, handleRemove, handleEdit, handleShow }) {

    //const equipments = vetorEquipments.map('')

    const edit = (obj) => {
        console.log(obj)
        handleEdit(obj)
    }

    const remove = (id) => {
        handleRemove(id)
    }

    const [busca, setBusca] = useState('');

    return (

        <div className="row">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Asset"
                    onChange={(e) => setBusca(e.target.value)} />
                
            </form>
            <div className="table-responsive ">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Asset </th>
                            <th>Description</th>
                            <th>Due Date </th>
                            <th>Container</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vetorEquipments
                                .filter((obj) => {
                                    return busca.toLowerCase() === ''
                                        ? obj
                                        : obj.assetId.toLowerCase().includes(busca);
                                }).map((obj, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.assetId}</td>
                                        <td>{obj.description}</td>
                                        <td>{obj.dueDate}</td>
                                        <td>{obj.container.idContainer}</td>
                                        <td>{obj.location.rig}</td>
                                        <td >
                                            {/*<a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons" >&#xE417;</i></a>*/}
                                            <button href="#" className="btn btn-primary" id={obj.assetId} onClick={(e) => { edit(obj, e) }} title="Edit" data-toggle="tooltip" style={{ marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons">&#xE254;</i></button>
                                            <button href="#" className="btn btn-danger" id={obj.assetId} onClick={() => { if (window.confirm(`Are you sure to delete the equipment [Asset: ${obj.assetId}] ?`)) { remove(obj.assetId) } }} title="Delete" data-toggle="tooltip" style={{ color: "white", marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons" >&#xE872;</i></button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default Tabela;