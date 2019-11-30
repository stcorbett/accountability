import React from 'react';
import './App.css';

function App() {

  return (
    <div>

      <div className="container">
        <div className="py-5 text-center">
          <h2>XX form</h2>
          <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>

        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">© 2017-2018 Company Name</p>
        </footer>
      </div>

      <input type="email" className="form-control autocomplete" id="email" placeholder="you@example.com" />
    </div>
  );
}

export default App;
