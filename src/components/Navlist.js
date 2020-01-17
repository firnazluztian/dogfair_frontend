import React from 'react';
import {Link} from 'react-router-dom'

function Navlist (props) {
  return (
    <div>
      <Link to={props.linkTo}>
        <p className="navbar-item">
          {props.linkName}
        </p>
      </Link>
    </div>
  );
}

export default Navlist;
