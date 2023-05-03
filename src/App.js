import { Fragment, useEffect } from 'react';
import './assets/css/bootstrap.min.css';
import scrape from 'website-scraper'

function App() {
  
  return (
    <Fragment>
        <div className="main d-flex align-items-center justify-content-center flex-column">
          <div
            className='row w-100'
          >
            <div className="col-md-6 mx-auto">
              <div className="input-group mb-3"> 
                <input type="text" className="form-control" placeholder="Search url..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="btn input-group-text btn-outline-light" id="basic-addon2">@Download</button>
              </div>
            </div> 
          </div>
          <div>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only d-none">Loading...</span>
          </div>
        </div>
        </div>        
        <div>
       
        </div>
    </Fragment>
  );
}
export default App;
