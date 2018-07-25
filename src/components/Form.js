import React, {Component} from 'react';
var M = window.M;
class Form extends Component {
  componentDidMount = () => {
    M.updateTextFields();
  }
  render = () => {
    var submitHandler = this.props.submitHandler;
    let firstName,
      lastName,
      email,
      mobile,
      role,
      roleAdmin;
    return (<form onSubmit={(e) => {
        e.preventDefault();
        var teamDetails = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          mobile: mobile.value,
          role: (role.checked)? role.value: roleAdmin.value
        };
        submitHandler(teamDetails)
      }}>
      <hr/>
      Info<br/>
      <div className="row">
        <div className="input-field col s12">
          <input id="firstName" type="text" pattern="^[a-zA-Z]{3,50}$" defaultValue={this.props.firstName} ref={node => firstName = node} required={true} className="validate"/>
          <label htmlFor="firstName">First Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="lastName" type="text" pattern="^[a-zA-Z]{3,50}$" defaultValue={this.props.lastName} ref={node => lastName = node} required={true} className="validate"/>
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" ref={node => email = node} defaultValue={this.props.email} required={true}/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="mobile" type="text" pattern="^[0-9]{10}$" required={true} ref={node => mobile = node} defaultValue={this.props.mobile} className="validate"/>
          <label htmlFor="mobile">Mobile</label>
        </div>
      </div>
      Role<br/>
      <p>
        <label>
          <input name="role" type="radio" defaultChecked={(
              !this.props.role || this.props.role === "0")
              ? true
              : false} required={true} ref={node => role = node} value="0"/>
          <span>Regular - Cannot delete members</span>
        </label>
      </p>
      <p>
        <label>
          <input name="role" type="radio" defaultChecked={this.props.role === "1"
              ? true
              : false} value="1" required={true} ref={node => roleAdmin = node}/>
          <span>Admin - Can delete members</span>
        </label>
      </p>
      <button type="submit" className="waves-effect waves-light btn right blue">Save</button>
    </form>);
  };
};
export default Form;
