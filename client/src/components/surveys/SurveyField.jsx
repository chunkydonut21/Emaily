import React from 'react';

export default class SurveyField extends React.Component {
  render() {
    const { touched, error } = this.props.meta;
    return (
      <div>
        <label htmlFor="title">{this.props.label}</label>
        <input {...this.props.input} style={{ marginBottom: '5px' }} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
          { touched && error }
        </div>
      </div>
    );
  }
}
