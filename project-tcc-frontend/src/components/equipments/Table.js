import { useState } from "react";
import TableBody from "./TableBody";
import TableHd from "./TableHd";


function Table ({ vetorEquipments, handleRemove, handleEdit }) {

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

    const [tableData, setTableData] = useState(vetorEquipments);
    console.log(tableData)
    const columns = [
        { label: "Asset", accessor: "assetId" },
        { label: "Description", accessor: "description" },
        { label: "Container", accessor: "container.idContainer" },
        { label: "Location", accessor: "location.rig" },
        { label: "due Date", accessor: "dueDate" },
    ];

    return (
        <>
            <table className="table">
                <caption>
                    Developers currently enrolled in this course, column headers are sortable.
                </caption>
                
                <TableHd columns={columns} />
                <TableBody columns={columns} tableData={tableData} />
            </table>
        </>
    );














};
export default Table;