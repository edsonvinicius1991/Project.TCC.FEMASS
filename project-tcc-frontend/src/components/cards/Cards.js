import './Cards.css';



function Cards() {
    return (
        <div className="row">
            <div className="column">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Certification expiration 90 days</h4>
                    <div className="card-icon"><i class="bi bi-exclamation-triangle"></i></div>
                    <p className="card-text">Some example text. Some example text.</p>
                    <a href="#" className="card-link">More details</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Certificacion expired</h4>
                    <p className="card-text">Some example text. Some example text.</p>
                    <a href="#" className="card-link">More details</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Maintenance Required</h4>
                    <p className="card-text">Some example text. Some example text.</p>
                    <a href="#" className="card-link">More details</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
                </div>
        </div>
    )
}
export default Cards;