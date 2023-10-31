import { useState, useEffect } from 'react';

import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Tabela({ vetorLocations, handleRemove, handleEdit, handleShow, filter }) {

    const edit = (obj) => {
        console.log(obj)
        handleEdit(obj)
    }

    const remove = (id) => {
        handleRemove(id)
    }

    {/* <!--- Busca Locations ---> */ }
    let parametroBusca = ["idLocation", "rig", "customer"]

    const [buscaCategoria, setBuscaCategoria] = useState('');

    const [busca, setBusca] = useState('');

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        setLocations([...vetorLocations])
        
    }, [vetorLocations])

    const equipamentosFiltrados = locations.filter((obj) => {
        if (buscaCategoria === 'idLocation') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.idLocation.toLowerCase().includes(busca);
        } if (buscaCategoria === 'rig') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.rig.toLowerCase().includes(busca);
        } if (buscaCategoria === 'customer') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.customer.toLowerCase().includes(busca);
        } else return obj
    })

    {/* <!--- Ordenar Locations ---> */ }
    let parametroOrdem = ["idLocation", "rig", "customer"]

    const [sortByField, setSortByField] = useState("idLocation");
    const [sortOrder, setSortOrder] = useState('A-Z | 0-9');
    const [dataSorted, setDataSorted] = useState([]);

    const buttonOrder = (e) => {
        e.preventDefault();
        sortOrder === 'A-Z | 0-9' ? setSortOrder('Z-A | 9-0') : setSortOrder('A-Z | 0-9')
    }

    //Dados em ordem descendente
    const dataDes = [...equipamentosFiltrados]
        .sort((a, b) => b[sortByField].toString().localeCompare(a[sortByField].toString(), "en", { numeric: true }));   // without localeCompare: const data1 = [...data].sort((a, b) => (a.assetId < b.assetId ? -1 : 1)); 
    //Dados em ordem ascentente
    const dataAsc = [...equipamentosFiltrados]
        .sort((a, b) => a[sortByField].toString().localeCompare(b[sortByField].toString(), "en", { numeric: true }));   // without localeCompare: const data1 = [...data].sort((a, b) => (a.assetId < b.assetId ? -1 : 1)); 

    useEffect(() => {
        if (sortOrder === 'A-Z | 0-9') {
            setDataSorted(dataAsc)
        } else
            setDataSorted(dataDes)
    }, [vetorLocations, locations, sortByField, busca, buscaCategoria, sortOrder]);



    return (
        <div className="row">
            
            <form className="form-inline" style={{ marginTop: "2rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 16 16"> <path d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" /> </svg>
                <h3 > Sorted by:</h3>
                <button className="btn btn-outline-secondary" style={{ marginLeft: "1rem" }} onClick={(e) => buttonOrder(e)}>{sortOrder}</button>

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

            <div className="row"></div>

            <div className="table-responsive ">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>IdLocation </th>
                            <th>Rig</th>
                            <th>Customer </th>
                            <th>Well</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataSorted.map((obj, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{obj.idLocation}</td>
                                    <td>{obj.rig}</td>
                                    <td >{obj.customer}</td>
                                    <td >{obj.well}</td>
                                    <td>{obj.country}</td>
                                    <td >
                                        {/*<a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons" >&#xE417;</i></a>*/}
                                        <button href="#" className="btn btn-primary" id={obj.assetId} onClick={(e) => { edit(obj, e) }} title="Edit" data-toggle="tooltip" style={{ marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons">&#xE254;</i></button>
                                        <button href="#" className="btn btn-danger" id={obj.assetId} onClick={() => { if (window.confirm(`Are you sure to delete the location [ID: ${obj.idLocation}] ?`)) { remove(obj.idLocation) } }} title="Delete" data-toggle="tooltip" style={{ color: "white", marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons" >&#xE872;</i></button>
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