import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signoutUser, removeError } from '../../actions';

import Error from '../error';


const AdminContainer = (props) => {
  const returnClick = () => {
    props.signoutUser();
  };
  props.removeError();
  return (
    <div>
      <div className="navbarContainer adminNav">
        <a className="homeLink" onClick={returnClick}>Back to DartBot</a>
        <div className="pageLinks">
          <Link to="/admin">Analytics</Link>
          <Link to="/admin/bios">Tour Guide Profiles</Link>
          <Link to="/admin/locs">Tour Locations </Link>
          <Link to="/admin/intents">Queries/Responses</Link>
          <Link to="/admin/surveys">New Surveys</Link>
          <Link to="/admin/signup">Add New Admin</Link>
        </div>
      </div>
      <Error />
      {props.children}
    </div>
    );
};


export default connect(null, { signoutUser, removeError })(AdminContainer);
