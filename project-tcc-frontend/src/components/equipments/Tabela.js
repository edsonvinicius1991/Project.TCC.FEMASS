//import "./Equipments.css";

import { useState } from 'react';
import React from 'react';

function Tabela({ vetorEquipments, handleRemove, handleEdit, handleShow }) {

    //const equipments = vetorEquipments.map('')

    const edit = (obj) => {
        console.log(obj)
        handleEdit(obj)
    }

    const remove = (id) => {
        handleRemove(id)
    }

    {/* <!--- Busca Equipamentos ---> */ }
    let parametroBusca = ["AssetId", "Description", "Container", "Location"]

    const [buscaCategoria, setBuscaCategoria] = useState('');

    const [busca, setBusca] = useState('');

    const equipamentosFiltrados = vetorEquipments.filter((obj) => {
        if (buscaCategoria === 'AssetId') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.assetId.toLowerCase().includes(busca);
        } if (buscaCategoria === 'Description') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.description.toLowerCase().includes(busca);
        } if (buscaCategoria === 'Location') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.location.rig.toLowerCase().includes(busca);
        } if (buscaCategoria === 'Container') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.container.idContainer.toLowerCase().includes(busca);
        } else return obj
    })

    {/* <!--- Ordenar Equipamentos ---> */ }
    let parametroOrdem = ["assetId", "description", "dueDate", "container.idContainer", "location.rig"]

    const [sortByField, setSortByField] = useState("assetId");
    const [sortOrder, setSortOrder] = useState("asc");
    const [dataSorted, setDataSorted] = useState([]);


    const data1 = [...equipamentosFiltrados].sort((a, b) => a[sortByField].toString().localeCompare(b[sortByField].toString(), "en", { numeric: true }));// without localeCompare: const data1 = [...data].sort((a, b) => (a.assetId < b.assetId ? -1 : 1)); 
    


return (

    <div className="row">
        <form className="form-inline">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
            <select
                className="form-control"
                name="parametroBusca"
                onChange={(e) => setBuscaCategoria(e.target.value)}
            >
                <option> Search By </option>
                {parametroBusca.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                onChange={(e) => setBusca(e.target.value)} />
        </form>

        <form className="form-inline" style={{ marginTop: "2rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 320 512"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" /></svg>
            <select
                className="form-control"
                name="parametroOrdem"
                onChange={(e) => setSortByField(e.target.value)}
            >

                {parametroOrdem.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </form>
        <div className="row"></div>

        <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Asset </th>
                        <th>SerialNumber</th>
                        <th>Description</th>
                        <th>PartNumber</th>
                        <th>Due Date </th>
                        <th>Container</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data1.map((obj, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.assetId}</td>
                                <td>{obj.serialNumber}</td>
                                <td>{obj.description}</td>
                                <td>{obj.partNumber}</td>
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