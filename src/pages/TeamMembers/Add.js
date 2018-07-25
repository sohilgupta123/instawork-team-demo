import React from 'react';
import {connect} from 'react-redux';
import {addTeamMember} from '../../actions';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

const Add = ({dispatch, history}) => {
  let submitHandler = (teamDetails) => {
    dispatch(addTeamMember(teamDetails));
    history.push("/");
  }

  return (<Layout title="Add a Team Member" subtitle="Set email, location and role" icon="clear" iconTitle="Cancel" link="/">
    <Form submitHandler={submitHandler}/>
  </Layout>);
};

export default connect()(Add);
