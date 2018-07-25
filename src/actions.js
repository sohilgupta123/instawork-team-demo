let newTeamMemberId = 0;

export const addTeamMember = teamDetails => ({
  type: 'ADD_TEAM_MEMBER',
  id: newTeamMemberId++,
  firstName: teamDetails.firstName,
  lastName: teamDetails.lastName,
  email: teamDetails.email,
  mobile: teamDetails.mobile,
  role: teamDetails.role
});

export const editTeamMember = teamDetails => ({
  type: 'EDIT_TEAM_MEMBER',
  id: teamDetails.id,
  firstName: teamDetails.firstName,
  lastName: teamDetails.lastName,
  email: teamDetails.email,
  mobile: teamDetails.mobile,
  role: teamDetails.role
});
