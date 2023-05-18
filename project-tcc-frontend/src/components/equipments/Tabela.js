import "./Equipments.css";

function Tabela({ vetor }) {

    return (

        <div className="row">
            <div className="table-responsive ">
                <table class="table table-striped table-hover table-bordered">
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
                                    <td>
                                        <a href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i class="material-icons">&#xE417;</i></a>
                                        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                        <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i class="material-icons">&#xE872;</i></a>
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