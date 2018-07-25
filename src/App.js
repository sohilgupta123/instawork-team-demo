import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TeamMembersList from './pages/TeamMembers/List';
import TeamMembersAdd from './pages/TeamMembers/Add';
import TeamMembersEdit from './pages/TeamMembers/Edit';

class App extends Component {
  render() {
    return (<Router>
      <Switch>
        <Route exact={true} path="/" component={TeamMembersList}/>
        <Route exact={true} path="/add" component={TeamMembersAdd}/>
        <Route exact={true} path="/edit/:id" component={TeamMembersEdit}/>
      </Switch>
    </Router>);
  }
}

export default App;
