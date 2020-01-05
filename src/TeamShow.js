import React from 'react'

import {
  Link
} from "react-router-dom";

const Created = () => (
  <div>
    <div className="promises-list">

      <div className="need-completion">
        <div className="row">
          <div className="col header">
            Complete These
          </div>
        </div>

        <div className="row">
          <div className="col promise">
            one of two
          </div>
          <div className="col promise">
            one of two
          </div>
        </div>
      </div>

      <div className="this-week">
        <div className="row">
          <div className="col header">
            This Week
            <div className="dates d-inline float-right">
              dates
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col promise">
            <div className="name">
              Resume
            </div>
            <div className="date">
              1/7/20
            </div>
            <div className="tags">
              <span className='badge badge-info'>career</span>
            </div>
          </div>
          <div className="col promise">
            one of three
          </div>
          <div className="col promise">
            Resume
          </div>
        </div>
      </div>

      <div className="future mb-4">
        <div className="row">
          <div className="col header">
            Future
          </div>
        </div>

        <div className="row">
          <div className="col promise">
            one of five
          </div>
          <div className="col promise">
            one of five
          </div>
          <div className="col promise">
            one of five
          </div>
          <div className="col promise">
            one of five
          </div>
          <div className="col promise">
            one of five
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

export default Created
