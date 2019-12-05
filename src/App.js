import React from 'react';
import './App.css';

import CountryDropdown from './CountryDropdown'
import TimeSelect from './TimeSelect'
import DateSelect from './DateSelect'

class App extends React.Component {
  state = {
    who: null,
    when: null
  };

  handleWhoClick = (e) =>{
    e.preventDefault();
    let who = e.target.dataset.param
    this.setState(state => ({
      who: who
    }));
  }

  handleWhenClick = (e) =>{
    e.preventDefault();
    let when = e.target.dataset.param
    this.setState(state => ({
      when: when
    }));
  }

  render() {
    console.log("rendering")
    console.log("who: " + this.state.who)
    console.log("when: " + this.state.when)
    console.log("when: " + !!this.state.when)
    console.log("when: " + (!!this.state.when ? 'x' : 'd-none'))

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
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className={'btn btn-outline-secondary ' + (this.state.who === "Sean" ? 'active' : '')} onClick={this.handleWhoClick} data-param={"Sean"}>
                  <input type="radio" name="options" id="option1" autoComplete="off"/> Sean
                </label>
                &nbsp;
                <label className={'btn btn-outline-secondary ' + (this.state.who === "Ranny" ? 'active' : 'xxx')} onClick={this.handleWhoClick} data-param={"Ranny"}>
                  <input type="radio" name="options" id="option2" autoComplete="off"/> Ranny
                </label>
                &nbsp;
                <label className={'btn btn-outline-secondary border-0'}>
                  <CountryDropdown />
                </label>
              </div>

            </div>
          </div>

          <div className="row mb-5">
            <div className="col-3">
              <h3>What</h3>
            </div>
            <div className="col">
              <textarea className="input100" type="text" name="name" placeholder="Promising to cause..." />

              <a href="#" className="text-muted mt-2 d-block">
               <span className="text-primary">+</span> condition of completion
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <h3>By When</h3>
              <a href="#" className="text-muted mt-2 d-block">
               <span className="text-primary">&#8227;</span> repeat
              </a>
            </div>
            <div className="col-9">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className={'btn btn-outline-secondary ' + (this.state.when === "Today" ? 'active' : '')} onClick={this.handleWhenClick} data-param={"Today"}>
                  <input type="radio" name="options" id="option1" autoComplete="off"/> Today
                </label>
                &nbsp;
                <label className={'btn btn-outline-secondary ' + (this.state.when === "Tomorrow" ? 'active' : '')} onClick={this.handleWhenClick} data-param={"Tomorrow"}>
                  <input type="radio" name="options" id="option1" autoComplete="off"/> Tomorrow
                </label>
                &nbsp;
                <label className={'btn btn-outline-secondary ' + (this.state.when === "3-days" ? 'active' : '')} onClick={this.handleWhenClick} data-param={"3-days"}>
                  <input type="radio" name="options" id="option1" autoComplete="off"/> 3 Days
                </label>
                &nbsp;
                <label className={'btn btn-outline-secondary ' + (this.state.when === "1-week" ? 'active' : '')} onClick={this.handleWhenClick} data-param={"1-week"}>
                  <input type="radio" name="options" id="option1" autoComplete="off"/> 1 Week
                </label>
                &nbsp;
                <label className={'btn btn-outline-secondary ' + (this.state.when === "1-month" ? 'active' : '')} onClick={this.handleWhenClick} data-param={"1-month"}>
                  <input type="radio" name="options" id="option1" autoComplete="off"/> 1 Month
                </label>
                &nbsp;
                <label className={'btn btn-outline-secondary border-0'}>
                  <DateSelect />
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-3">
            </div>
            <div className='col'>
              <div className={(!!this.state.when ? '' : 'd-none')}>
                {['Today', 'Tomorrow'].includes(this.state.when) ? '' : 'In '}
                {this.state.when} at <TimeSelect />
              </div>
            </div>
          </div>

          <div className="row mb-5 bg-success">
            <a href="#" className="col text-white h3 m-3 text-center">
             Create It
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
