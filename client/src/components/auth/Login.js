import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../../actions'



class Login extends React.Component {
  onSubmit = formProps => {
    this.props.login(formProps, () => {
      this.props.history.push('/dashboard')
    });
  };

  renderError() {
    if (this.props.errorMessage) {
      return <div>{this.props.errorMessage.message}</div>
    }
  }

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <fieldset>
          <label>Email</label>
          <Field type="email" name="email" component="input"></Field>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field type="password" name="password" component="input"></Field>
        </fieldset>
        <button>Log In</button>
        {this.renderError()}
      </form>
      
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, { login }),
  reduxForm({ form: 'login'})
)(Login)