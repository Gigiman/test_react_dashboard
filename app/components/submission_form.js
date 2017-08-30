import React from 'react';
import { SubmissionError, Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import createCollection from '../actions/index';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000).then(() => {
    if (values.title === undefined) {
      throw new SubmissionError({
        title:  'Введите название коллекции!',
        _error: 'Title is empty'
      })
    } else if (values.description === undefined) {
      throw new SubmissionError({
        title:  'Введите описание!',
        _error: 'Description is empty'
      })
    } else if (values.tags === undefined) {
      throw new SubmissionError({
        title:  'Введите Теги по которым вас будет искать пользователь!',
        _error: 'Tags are empty'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  });
}

const renderInput = ({ input, label, type, meta: { touched, error }}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        error &&
        <span className="error">{error}</span>
      }
    </div>
  </div>



let SubmissionForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(this.props.createCollection)}>
      <h3 className="submission-form-el">Заполните все поля</h3>
      <FormGroup>
        <Field
          name="file"
          type="file"
          component={renderInput}
          label="File"
        />
      </FormGroup>
      <FormGroup bsClass="form-group" controlId="ContentSubmissionForm">
        <Field
          name="title"
          component={renderInput}
          type="text"
          label="Название коллекции"
        />
      </FormGroup>
      <FormGroup bsClass="form-group" controlId="ContentSubmissionForm">
        <Field
          name="description"
          component={renderInput}
          type="text"
          label="Описание"
        />
      </FormGroup>
      <FormGroup bsClass="form-group" controlId="ContentSubmissionForm">
        <Field
          name="tags"
          component={renderInput}
          type="text"
          label="Теги"
        />
      </FormGroup>

      <Button className="submission-form-btn" type="submit">
        Сохранить
      </Button>
    </form>
  );
}


SubmissionForm = reduxForm({
  form: 'SubmissionForm',
})(SubmissionForm);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createCollection }, dispatch)
}

SubmissionForm = connect(null, mapDispatchToProps)(SubmissionForm);

export default SubmissionForm;
