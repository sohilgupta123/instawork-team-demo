import React from 'react';
import {Link} from 'react-router-dom';
const Member = (member) => {
  return (<div className="row">
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image col s2">
          <img src="/user-icon-placeholder.png" className="responsive-img" alt="user"/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>
              <b>{member.firstName}
                {member.lastName}
                {
                  (member.role === "1")
                    ? ("(admin)")
                    : ""
                }</b><br/> {member.email}<br/> {member.mobile}
              <Link to={"/edit/" + member.id} className="right">
                <i className="material-icons">edit</i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default Member;
