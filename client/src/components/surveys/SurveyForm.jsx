import React from 'react';
import _ from 'lodash';
import { reduxForm, Field, values } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'recipients' }
];

class SurveyForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {
            _.map(FIELDS, ({ label, name }) => <Field key={name} label={label} type="text" name={name} component={SurveyField} />)
          }

          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
            <i className="material-icons right">done</i>
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  if (!values.title) { errors.title = 'You must provide a title'; }
  if (!values.subject) { errors.subject = 'You must provide a subject'; }
  if (!values.body) { errors.body = 'You must provide a body'; }
  if (!values.recipients) { errors.recipients = 'You must provide emails'; }

  return errors;
}
export default reduxForm({ validate, form: 'surveyForm', destroyOnUnmount: false })(SurveyForm);
