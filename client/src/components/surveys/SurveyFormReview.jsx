import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { submitSurvey } from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => (
  <div>
    <h5>Please confirm your entries</h5>

    <div>
      <div>
        <label>Survey Title</label>
        <div>{formValues.title}</div>
      </div>
      <div>
        <label>Survey Line</label>
        <div>{formValues.subject}</div>
      </div>
      <div>
        <label>Email Body</label>
        <div>{formValues.body}</div>
      </div>
      <div>
        <label>Survey Recipients</label>
        <div>{formValues.emails}</div>
      </div>
    </div>
    <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
    <button className="green btn-flat white-text right" onClick={() => submitSurvey(formValues, history)}>
      Send Survey
      <i className="material-icons right">email</i>
    </button>
  </div>
);

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}
export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyFormReview));
