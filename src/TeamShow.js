import React from 'react'
import moment from 'moment';

import {
  Link,
  Redirect
} from "react-router-dom";


class TeamShow extends React.Component {

  state = {
    toShow: false,
  }

  navigateToShow = (user) => {
    this.setState(() => ({
      toShow: true
    }))
  }


  render() {
    if (this.state.toShow === true) {
      return <Redirect to='/promise/3812' />
    }

    return (
      <div>
        <div className="promises-list">

          <div className="need-completion">
            <div className="row">
              <div className="col header">
                Complete These
              </div>
            </div>

            <div className="row">

                <div className="col promise" onClick={this.navigateToShow}>
                  <div className="name">
                    Complete with Julia
                  </div>
                  <div className="date">
                    {moment().subtract(5, 'days').format("M/D/YY")}
                  </div>
                  <div className="tags">
                    <span className='badge badge-info'></span>
                  </div>
                </div>


                <div className="col promise" onClick={this.navigateToShow}>
                  <div className="name">
                    Set goals for the year
                  </div>
                  <div className="date">
                    {moment().subtract(3, 'days').format("M/D/YY")}
                  </div>
                  <div className="tags">
                    <span className='badge badge-info'>career</span>
                  </div>
                </div>
            </div>
          </div>

          <div className="this-week">
            <div className="row">
              <div className="col header">
                This Week
                <div className="dates d-inline float-right">
                  {moment().add(2, 'days').startOf('week').format("M/D/YY")} - {moment().add(2, 'days').endOf('week').format("M/D/YY")}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Resume
                </div>
                <div className="date">
                  {moment().add(1, 'days').format("M/D/YY")}
                </div>
                <div className="tags">
                  <span className='badge badge-info'>career</span>
                </div>
              </div>

              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Integrity conversation with Jim
                </div>
                <div className="date">
                  {moment().add(2, 'days').format("M/D/YY")}
                </div>
                <div className="tags">

                </div>
              </div>

              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Invite 3 friends to introduction
                </div>
                <div className="date">
                  {moment().add(3, 'days').format("M/D/YY")}
                </div>
                <div className="tags">
                  <span className='badge badge-info'>ILP</span>
                </div>
              </div>

            </div>
          </div>

          <div className="future">
            <div className="row">
              <div className="col header">
                Future
              </div>
            </div>

            <div className="row">

              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Update coach on action plan
                </div>
                <div className="date">
                  {moment().add(8, 'days').format("M/D/YY")}
                </div>
                <div className="tags">
                  <span className='badge badge-info'></span>
                </div>
              </div>

              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Email conversation notes to team
                </div>
                <div className="date">
                  {moment().add(8, 'days').format("M/D/YY")}
                </div>
                <div className="tags">
                  <span className='badge badge-info'>ILP</span>
                </div>
              </div>

              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Research cashflow opportunities
                </div>
                <div className="date">
                  {moment().add(10, 'days').format("M/D/YY")}
                </div>
                <div className="tags">
                  <span className='badge badge-info'>career</span>
                </div>
              </div>

              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Complete on animal well-being game
                </div>
                <div className="date">
                  {moment().add(15, 'days').format("M/D/YY")}
                </div>
                <div className="tags">
                  <span className='badge badge-info'></span>
                </div>
              </div>

              <div className="col promise" onClick={this.navigateToShow}>
                <div className="name">
                  Check in with Jim on health goals
                </div>
                <div className="date">
                  {moment().add(20, 'days').format("M/D/YY")}
                </div>
                <div className="tags">
                  <span className='badge badge-info'>health</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row bg-success">
          <Link to="/" className="col text-white h3 m-0 p-3 text-center">
            Promise
          </Link>
        </div>
      </div>
    )
  }
}

export default TeamShow
