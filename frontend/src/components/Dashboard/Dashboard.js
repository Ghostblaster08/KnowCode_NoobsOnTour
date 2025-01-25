import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">GreenGauge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline ml-auto">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">GreenGauge</h1>
            <p style={{ marginTop: '20px' }}>
              There's a lack of awareness about the repercussions of non-sustainable practices,
              the impact commercial products leave behind due to their carbon footprint.
              We educate people about alternative and eco-sustainable practices they can follow.
            </p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Scan to Educate</h2>
              <p>Scan images of food items and see the number of carbon emitted.</p>
              <p><Link className="btn btn-secondary" to="/scanner" role="button">View details &raquo;</Link></p>
            </div>
            <div className="col-md-4">
              <h2>GreenBot</h2>
              <p>A specialized AI chatbot who will be your friend in the journey of reducing carbon footprints. It is very informative and answers queries regarding sustainability.</p>
              <p><Link className="btn btn-secondary" to="/greenbot" role="button">View details &raquo;</Link></p>
            </div>
            <div className="col-md-4">
              <h2>Travel</h2>
              <p>Calculates the carbon footprint of your travel journey and provides insights for sustainable travel choices.</p>
              <p><Link className="btn btn-secondary" to="/travel" role="button">View details &raquo;</Link></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2>Barcode Scanning</h2>
              <p>Scan product barcodes to get details about its eco-friendliness and carbon footprint.</p>
              <p><Link className="btn btn-secondary" to="/barcode-scanner" role="button">Scan Barcode &raquo;</Link></p>
            </div>
            <div className="col-md-4">
              <h2>Gamified Interface and Quizzes</h2>
              <p>Gamified interface such as exclusive badges/perks/points availed as rewards and quizzes held for educating people about sustainable practices.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
