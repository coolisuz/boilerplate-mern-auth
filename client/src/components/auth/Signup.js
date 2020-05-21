import React from "react";
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { signup } from '../../actions/index'

class Signup extends React.Component {
  renderError() {
    if(this.props.errorMessage) {
      return Object.keys(this.props.errorMessage).map(key => {
        return <div key={key}>{key}</div>;
      });
    }
  }

  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/dashboard');
    })
  }
  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <fieldset>
          <Field type="text" name="firstName" component="input" />
        </fieldset>
        <fieldset>
          <Field type="text" name="lastName" component="input" />
        </fieldset>
        <fieldset>
          <Field type="email" name="email" component="input" />
        </fieldset>
        <fieldset>
          <Field type="password" name="password" component="input" />
        </fieldset>
        <fieldset>
          <Field type="password" name="confirmPassword" component="input" />
        </fieldset>
        {this.renderError()}
        <button>Sign Up</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage }
}

export default compose (
  connect(mapStateToProps, { signup }),
  reduxForm({ form: 'signup' })
)(Signup)
