import React from 'react';
import './App.css';

import CountryDropdown from './CountryDropdown'

function App() {

  return (
    <div>

      <div className="container" style={{maxWidth: "375px"}}>
        <div className="pt-2 pb-4">
          <h1>
            Promise &nbsp;
            <small>
              Sean - Ranny Coaching
            </small>
          </h1>
        </div>

        <div className="row mb-5">
          <div className="col-3">
            <h3>Who</h3>
          </div>
          <div className="col">
            buttons
            <CountryDropdown />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-3">
            <h3>What</h3>
          </div>
          <div className="col">
            <textarea className="input100" type="text" name="name" placeholder="Promising to cause..." />
            <div class="text-muted mt-2">
             + condition of completion
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-3">
            <h3>By When</h3>
          </div>
          <div className="col">
            Buttons
            Date<CountryDropdown />

            <div class="text-muted mt-2">
             + repeat
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
