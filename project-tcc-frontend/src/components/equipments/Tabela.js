import "./Equipments.css";

function Tabela({ vetor, handleRemove, handleEdit, handleShow }) {

    const edit = (obj) =>{
        console.log(obj)
        handleShow(obj)
    }

    const remove = (id) =>{
        handleRemove(id)
    }


    return (

        <div className="row">
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
                            vetor.map((obj, index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{obj.assetId}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.dueDate}</td>
                                    <td>{obj.container.idContainer}</td>
                                    <td>{obj.location.rig}</td>
                                    <td >
                                        {/*<a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons" >&#xE417;</i></a>*/}
                                        <button href="#" className="btn btn-primary" id={obj.assetId} onClick={(e) =>{edit(obj.assetId, e)}} title="Edit" data-toggle="tooltip" style={{ marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons">&#xE254;</i></button>
                                        <button href="#" className="btn btn-danger" id={obj.assetId} onClick={() =>  {if(window.confirm('Are you sure to delete this equipment?')){remove(obj.assetId)}}} title="Delete" data-toggle="tooltip" style={{ color: "white", marginRight: "0.5rem", padding: "0.2rem 0.7rem" }}><i className="material-icons" >&#xE872;</i></button>
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