import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FaSearch } from 'react-icons/fa';

import Teams from './Teams'
import Created from './Created'
import TeamShow from './TeamShow'
import PromiseShow from './PromiseShow'

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
      <Router basename='/'>
        <div>
          <nav className="container navbar navbar-dark bg-dark" style={{maxWidth: "375px"}}>
            <Link to="/teams" className="navbar-brand mr-auto" style={{width: "37px"}}>
              ACT
            </Link>
            <div className="mx-auto">
                <a className="navbar-brand mr-0" href="#">
                  <Switch>
                    <Route path="/teams">
                      Teams
                    </Route>
                    <Route path="/team/:id">
                      Sarah's Promises
                    </Route>
                    <Route path="/promise/:id">
                      Integrity conversation
                    </Route>
                    <Route>
                      Sarah Coaching
                    </Route>
                  </Switch>
                </a>
            </div>
            <Switch>
              <Route exact path="/">
                <a className="navbar-brand m-0 ml-auto text-right" href="#" style={{width: "37px"}}> </a>
              </Route>
              <Route>
                <a className="navbar-brand m-0 ml-auto text-right" href="#" style={{width: "37px"}}>
                  <FaSearch />
                </a>
              </Route>
            </Switch>
          </nav>


          <div className="container" style={{maxWidth: "375px"}}>
            <Switch>
              <Route path="/created">
                <div className="pt-2 pb-4">
                  <h1> Created Future </h1>
                </div>
              </Route>
              <Route path="/team/:id">
              </Route>
              <Route path="/teams">
                <div className="pt-2 pb-4">
                </div>
              </Route>
              <Route exact path="/">
                <div className="pt-2 pb-4">
                  <h1> Promise </h1>
                </div>
              </Route>
            </Switch>
            <Switch>
              <Route path="/promise/:id">
                <PromiseShow />
              </Route>
              <Route path="/team/9324">
                <TeamShow />
              </Route>
              <Route path="/created">
                <Created />
              </Route>
              <Route path="/teams">
                <Teams />
              </Route>
              <Route path="/">
                <div className="row mb-5">
                  <div className="col-3">
                    <h3>Who</h3>
                  </div>
                  <div className="col">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                      <label className={'btn btn-outline-secondary ' + (this.state.who === "Sarah" ? 'active' : '')} onClick={this.handleWhoClick} data-param={"Sarah"}>
                        <input type="radio" name="options" id="option1" autoComplete="off"/> Sarah
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
                     <span className="text-primary">+</span> repeat
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
                    <div className={'mt-2 ' + (!!this.state.when ? '' : 'd-none')}>
                      {['Today', 'Tomorrow'].includes(this.state.when) ? '' : 'In '}
                      {this.state.when} at <TimeSelect />
                    </div>
                  </div>
                </div>

                <div className="row bg-success">
                  <Link to="/created" className="col text-white h3 m-0 p-3 text-center">
                    Create It
                  </Link>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
