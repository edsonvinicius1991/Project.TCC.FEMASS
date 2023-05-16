import './Cards.css';



function Cards() {
    return (
        <div className="row">
            
            <div className="column">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Certification expiration 90 days</h4>
                        <div className="card-yellow"><i class="bi bi-shield-exclamation"></i></div>
                        <h1 className="card-text">10</h1>
                        <a href="#" className="card-link">More details</a>

                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Certificacion expired</h4>
                        <div className="card-red"><i class="bi bi-shield-x"></i></div>
                        <h1 className="card-text">5</h1>
                        <a href="#" className="card-link">More details</a>

                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Maintenance Required</h4>
                        <div className="card-blue"><i class="bi bi-wrench-adjustable"></i></div>
                        <h1 className="card-text">2</h1>
                        <a href="#" className="card-link">More details</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;