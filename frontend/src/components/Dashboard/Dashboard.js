import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const jumbotronStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem 1rem',
    marginBottom: '2rem',
    borderRadius: '0.3rem',
  };

  const jumbotronContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const jumbotronH1Style = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#343a40',
  };

  const jumbotronPStyle = {
    fontSize: '1.2rem',
    color: '#6c757d',
    marginTop: '20px',
  };

  const jumbotronBtnStyle = {
    padding: '0.8rem 1.5rem',
    fontSize: '1.1rem',
    borderRadius: '0.25rem',
  };

  const btnPrimaryStyle = {
    ...jumbotronBtnStyle,
    backgroundColor: '#007bff',
    border: 'none',
  };

  const btnSecondaryStyle = {
    ...jumbotronBtnStyle,
    backgroundColor: '#6c757d',
    border: 'none',
  };

  const navbarStyle = {
    padding: '1rem 1.5rem',
    backgroundColor: '#343a40',
  };

  const navbarBrandStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navLinkStyle = {
    color: 'white',
    fontSize: '1.1rem',
    padding: '0.5rem 1rem',
  };

  const containerStyle = {
    padding: '2rem 1rem',
  };

  const colMd4Style = {
    width: '33.3333%',
    padding: '15px',
    boxSizing: 'border-box',
  };

  const colMd4ResponsiveStyle = {
    width: '100%',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={navbarStyle}>
        <a className="navbar-brand" href="#" style={navbarBrandStyle}>GreenGauge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={navLinkStyle}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={navLinkStyle}>Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline ml-auto" align="right" style={{ marginRight: '20px' }}>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <Link className="btn btn-outline-light" to="/profile" role="button" style={{ marginLeft: '10px' }}>Login</Link>
        </div>
      </nav>

      <main role="main">
        <div className="jumbotron" style={jumbotronStyle}>
          <div className="container" style={jumbotronContainerStyle}>
            <h1 className="display-3" style={jumbotronH1Style}>GreenGauge</h1>
            <p style={jumbotronPStyle}>
              There's a lack of awareness about the repercussions of non-sustainable practices,
              the impact commercial products leave behind due to their carbon footprint.
              We educate people about alternative and eco-sustainable practices they can follow.
            </p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button" style={btnPrimaryStyle}>Learn more &raquo;</a></p>
          </div>
        </div>

        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-md-4" style={colMd4Style} style={window.innerWidth <= 767 ? colMd4ResponsiveStyle : colMd4Style}>
              <h2>Scan to Educate</h2>
              <p>Scan images of food items and see the number of carbon emitted.</p>
              <p><Link className="btn btn-secondary" to="/scanner" role="button" style={btnSecondaryStyle}>View details &raquo;</Link></p>
            </div>
            <div className="col-md-4" style={colMd4Style} style={window.innerWidth <= 767 ? colMd4ResponsiveStyle : colMd4Style}>
              <h2>GreenBot</h2>
              <p>A specialized AI chatbot who will be your friend in the journey of reducing carbon footprints. It is very informative and answers queries regarding sustainability.</p>
              <p><Link className="btn btn-secondary" to="/chatbot" role="button" style={btnSecondaryStyle}>View details &raquo;</Link></p>
            </div>
            <div className="col-md-4" style={colMd4Style} style={window.innerWidth <= 767 ? colMd4ResponsiveStyle : colMd4Style}>
              <h2>Gamified Interface and Quizzes</h2>
              <p>Gamified interface such as exclusive badges/perks/points availed as rewards and quizzes held for educating people about sustainable practices.</p>
              <p><a className="btn btn-secondary" href="#" role="button" style={btnSecondaryStyle}>View details &raquo;</a></p>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;