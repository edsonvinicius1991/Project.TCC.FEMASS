import { useState, useEffect } from 'react';

import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Tabela({ vetorEquipments, handleRemove, handleEdit, handleShow, filter }) {

    const edit = (obj) => {
        console.log(obj)
        handleEdit(obj)
    }

    const remove = (id) => {
        handleRemove(id)
    }

    {/* <!--- Busca Containers ---> */ }
    let parametroBusca = ["idContainer", "containerType", "Location"]

    const [buscaCategoria, setBuscaCategoria] = useState('');

    const [busca, setBusca] = useState('');

    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        setEquipments([...vetorEquipments])
        
        filter === "Expired" ? setEquipments(expiredFiltered) :
        filter === "Expiring" ? setEquipments(expiringFiltered) :
        filter = null

    }, [vetorEquipments])

    const equipamentosFiltrados = equipments.filter((obj) => {
        if (buscaCategoria === 'idContainer') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.idContainer.toLowerCase().includes(busca);
        } if (buscaCategoria === 'containerType') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.containerType.toLowerCase().includes(busca);
        } if (buscaCategoria === 'Location') {
            return busca.toLowerCase() === ''
                ? obj
                : obj.location.rig.toLowerCase().includes(busca);
        } else return obj
    })

    {/* <!--- Ordenar Containers ---> */ }
    let parametroOrdem = ["idContainer", "containerType", "dueDate"]

    const [sortByField, setSortByField] = useState("idContainer");
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
    }, [vetorEquipments, equipments, sortByField, busca, buscaCategoria, sortOrder]);



    {/* <!--- Manipulação de datas ---> */ }

    let dateNow = new Date() //Recebe data atual

    var dataLess3M = new Date()
    dataLess3M.setDate(dataLess3M.getDate() + 90)//Acrescenta 3 meses a data atual


    {/* <!--- Filtro de Containers por expiração ---> */ }
    function expireds(obj) {
        return obj.dueDate < dateNow.toJSON();
    }
    function expiringLessThanNinety(obj) {
        return obj.dueDate < dataLess3M.toJSON() && obj.dueDate > dateNow.toJSON();
    }

    const expiredFiltered = vetorEquipments.filter(expireds)
    const expiringFiltered = vetorEquipments.filter(expiringLessThanNinety)

    const expirationFilter = (e) => {
        e.preventDefault();
        if (e.target.value === 'Expiring') {
            setEquipments(expiringFiltered)
        } else if (e.target.value === 'Expired') {
            setEquipments(expiredFiltered)
        } else if (e.target.value === 'All') {
            setEquipments([...vetorEquipments])
        }
    }

    return (
        <div className="row">
            <form className="form-inline" style={{ marginTop: "2rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="mx-3" viewBox="0 0 16 16"> <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" /> </svg>
                <h3 > Filter by:</h3>
                <ButtonGroup style={{ marginLeft: "1rem" }} onClick={expirationFilter} type= "radio" >
                    <Button type="radio" id="radioAll" variant="primary" value="All">ALL</Button>
                    <Button type="radio" id="radioExpiring" variant="warning" value="Expiring">Expiring</Button>
                    <Button type="radio" id="radioExpired" variant="danger" value="Expired"> Expired</Button>
                </ButtonGroup>
            </form>

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
                            <th>Id </th>
                            <th>Type</th>
                            <th>Due Date </th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataSorted.map((obj, index) => (
                                <tr key={index} style={obj.dueDate < dateNow.toJSON() ? { color: 'red', fontWeight: 'bold' } : obj.dueDate < dataLess3M.toJSON() ? { color: '#DFA400', fontWeight: 'bold' } : { backgroundColor: 'none' }}>
                                    <td>{index + 1}</td>
                                    <td>{obj.idContainer}</td>
                                    <td>{obj.containerType}</td>
                                    <td >{obj.dueDate}</td>
                                    <td>{obj.location.rig}</td>
                                    <td >
                                        {/*<a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons" >&#xE417;</i></a>*/}
                                        <button href="#" className="btn btn-primary" id={obj.assetId} onClick={(e) => { edit(obj, e) }} title="Edit" data-toggle="tooltip" style={{ marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons">&#xE254;</i></button>
                                        <button href="#" className="btn btn-danger" id={obj.assetId} onClick={() => { if (window.confirm(`Are you sure to delete the container [ID: ${obj.idContainer}] ?`)) { remove(obj.idContainer) } }} title="Delete" data-toggle="tooltip" style={{ color: "white", marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons" >&#xE872;</i></button>
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