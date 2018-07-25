import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../components/Layout';
import Member from './Member';

const List = ({TeamMembers}) => {
  return (<Layout title="Team Members" subtitle={"You have " + TeamMembers.length + " team members"} icon="add" iconTitle="Add Members" link="/add">
    {TeamMembers.map(member => <Member key={member.id} {...member}/>)}
  </Layout>);
};

const mapStateToProps = (state) => {
  return {TeamMembers: state.TeamMembers}
};

export default connect(mapStateToProps)(List);
