import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styles } from '../AppList/AppList';


const GameCard = ({ rank, image, name, isSafe, downloadLink }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card text-center h-100 shadow p-3 mb-5 bg-body rounded mt-4" >
        <div className="position-relative">
          <img src={image} className="card-img-top mt-3" alt={name} style={{ width: '100px', height: '100px' }} />
          <span className="position-absolute top-20 start-50 translate-middle badge rounded-pill" style={{ right: '20px', top: '-10px' }}>
            <img src={rank} style={{ width: '50px', height: '45px' }} alt="Rank" />
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {isSafe && <p className="card-text"><span className="badge bg-success">100% Safe & Secure</span></p>}
          <a href={downloadLink} style={styles.button} className="btn btn-danger">Download</a>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
