import React from 'react'
import moment from 'moment';

import {
  Link,
  Redirect
} from "react-router-dom";


class TeamShow extends React.Component {

  render() {
    return (
      <div>
        <div className="pt-5">
          <div className="row">
            <div className="col-4">
              <b>Sarah will:</b>
            </div>
            <div className="col text-left">
              Complete the resume
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <b>By:</b>
            </div>
            <div className="col text-left">
              tomorrow at Midnight
            </div>
          </div>

          <div className="pt-2">
            <b>Conditions:</b>
          </div>
          <ul className="ml-4" style={{listStyleType: "disc"}}>
            <li style={{listStyleType: "disc"}}>PDF File</li>
            <li style={{listStyleType: "disc"}}>Delivered to Ranny's email</li>
            <li style={{listStyleType: "disc"}}>Including recent work experience</li>
          </ul>
        </div>

        <div className="row bg-success mt-5">
          <Link to="/created" className="col text-white h3 m-0 p-3 text-center">
            This is Complete
          </Link>
        </div>
        <div className="row">
          <Link to="/created" className="col bg-secondary text-white h3 m-0 p-3 text-center">
            Revoke
          </Link>
          <Link to="/created" className="col bg-primary text-white h3 m-0 p-3 text-center">
            Repromise
          </Link>
        </div>

        <div className="mt-3 text-muted text-center">
          Recorded by Ranny - {moment().format("M/D/YY")}
        </div>

      </div>
    )
  }
}

export default TeamShow
