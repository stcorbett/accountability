import React from 'react'

import {
  Link
} from "react-router-dom";

const Created = () => (
  <div>
    <div className="text-center">
      Sean will complete the clickable prototype<br/>
      By tomorrow at Midnight
    </div>

    <div className="row mt-5">
      <Link to="/" className="col h3 m-0 p-3 text-center">
        Change This
      </Link>
    </div>

    <div className="row bg-info">
      <Link to="/" className="col text-white h3 m-0 p-3 text-center">
        Create Again
      </Link>
    </div>

    <div className="row mt-5">
      <div className="col">
        <u>Sean - Ranny Coaching</u>
      </div>
      <div className="col-4 text-right">
        <Link to="/teams" className="">
          Your teams &raquo;
        </Link>
      </div>
    </div>
  </div>
)

export default Created
