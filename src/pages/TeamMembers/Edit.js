import React from 'react';
import {connect} from 'react-redux';
import {editTeamMember} from '../../actions';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

const Edit = ({dispatch, history, match, teamDetails}) => {
  let submitHandler = (newTeamDetails) => {
    newTeamDetails.id = teamDetails.id;
    dispatch(editTeamMember(newTeamDetails));
    history.push("/");
  }

  return (<Layout title="Edit a Team Member" subtitle="edit email, location and role" icon="clear" iconTitle="Cancel" link="/">
    <Form submitHandler={submitHandler} {...teamDetails}/>
  </Layout>);
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  var teamDetails = state.TeamMembers.filter((a) => a.id === parseInt(id, 10));
  return {teamDetails: teamDetails[0]};
};

export default connect(mapStateToProps)(Edit);
