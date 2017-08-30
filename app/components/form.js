import React from 'react';
import { SubmissionError, Field, reduxForm } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } else if (values.password !== '123') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div className ="login-form-field">
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form className="login-form" onSubmit={handleSubmit(submit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error &&
        <strong>
          {error}
        </strong>}
      <div>
        <button className ="login-form-button" type="submit" disabled={submitting}>
          Log In
        </button>
        <button className ="login-form-button" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation' // a unique identifier for this form
})(SubmitValidationForm)
