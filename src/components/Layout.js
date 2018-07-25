import React from 'react';
import {Link} from 'react-router-dom';

const Layout = (args) => {
  var title = args.title;
  var subtitle = args.subtitle;
  var link = args.link;
  var icon = args.icon;
  var iconTitle = args.iconTitle;
  var children = args.children;
  return (<div className="container">
    <Link to={link} className="right">
      <i title={iconTitle} className="material-icons">{icon}</i>
    </Link>
    <h3 className="center-align">{title}</h3>
    <h6 className="center-align">{subtitle}</h6>
    {children}
  </div>);
};

export default Layout;
