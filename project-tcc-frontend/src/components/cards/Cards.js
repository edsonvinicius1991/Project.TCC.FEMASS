import './Cards.css';



function Cards() {
    return (
        <div className="card-group">

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Certification expiration 90 days</h4>
                    
                    <p className="card-text">Some example text. Some example text.</p>
                    <a href="#" className="card-link">More details</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Certificacion expired</h4>
                    <p className="card-text">Some example text. Some example text.</p>
                    <a href="#" className="card-link">More details</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Maintenance Required</h4>
                    <p className="card-text">Some example text. Some example text.</p>
                    <a href="#" className="card-link">More details</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            
        </div>
    )
}
export default Cards;