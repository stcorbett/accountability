import React from 'react'

import {
  Link
} from "react-router-dom";

const Teams = () => (
  <div>
    <div className="row mb-4 pb-2 ">
      <div className="col">
        <div className="row">
          <div className="col h3 m-0">
            Sean
            <span className="h5">
              &nbsp; Coaching
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            10 Promises
          </div>
          <div className="col text-right">
            <u className="text-muted text-warning underline-warning">2 need completion</u>
          </div>
        </div>
        <div className="row">
          <div className="col">
            3 this week
          </div>
          <div className="col text-right">
            <Link to="/" className="">
              <span className="text-primary">+</span> Promise
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col">
        <div className="row">
          <div className="col h3 m-0">
            Julia
            <span className="h5">
              &nbsp; Coaching
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            3 Promises
          </div>
          <div className="col text-right">
            <u className="text-muted underline-warning">2 need completion</u>
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 this week
          </div>
          <div className="col text-right">
            <Link to="/" className="">
              <span className="text-primary">+</span> Promise
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col">
        <div className="row">
          <div className="col h5 m-0">
            TMLP Seattle - Powerful Leaders Causing Transformation in the World
          </div>
        </div>
        <div className="row">
          <div className="col">
            40 Promises
          </div>
          <div className="col text-right">
            <u className="text-muted underline-warning">9 need completion</u>
          </div>
        </div>
        <div className="row">
          <div className="col">
            18 this week
          </div>
          <div className="col text-right">
            <Link to="/" className="">
              <span className="text-primary">+</span> Promise
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col">
        <div className="row">
          <div className="col h5 m-0">
            Retreat and Resort: Rejuvination to impact lives
          </div>
        </div>
        <div className="row">
          <div className="col">
            8 Promises
          </div>
          <div className="col text-right">
            <span className="text-muted">0 need completion</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            2 this week
          </div>
          <div className="col text-right">
            <Link to="/" className="">
              <span className="text-primary">+</span> Promise
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="row bg-light mt-5">
      <Link to="#" className="col h3 m-0 p-3 text-center">
        Add Team
      </Link>
    </div>
  </div>
)

export default Teams
