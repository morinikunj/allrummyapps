import React from 'react';

const AppCard = ({ app }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100">
        <img src={app.image} className="card-img-top" alt={app.name} />
        <div className="card-body">
          <h5 className="card-title">{app.name}</h5>
          <p className="card-text">Bonus: {app.bonus}</p>
          <p className="card-text">Min. Withdrawal: {app.minWithdrawal}</p>
          <a href={app.downloadLink} className="btn btn-primary">Download</a>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
