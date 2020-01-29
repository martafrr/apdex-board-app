import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { buttonStyles } from './stylesHostPage';

const renderField = ({ type, label, input, meta: { touched, error } }) => (
    <div className="input-row">
        <label>{label}</label>
        <input {...input} type={type} />
        {touched && error &&
            <span className="error">{error}</span>}
    </div>
);

const AddAppForm = (props) => (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field 
            name="name" 
            label="Name"
            component={renderField}
            type="text" 
        />
        <Field 
            name="contributors" 
            label="Contributors" 
            component={renderField} 
            type="text"
        />
        <Field 
            name="version" 
            label="Version" 
            component={renderField} 
            type="number"
        />
        <Field 
            name="apdex" 
            label="Apdex" 
            component={renderField} 
            type="number" 
        />
        <Field 
            name="hosts"
            label="Hosts (seperated by coma)" 
            component={renderField}
            type="text" 
        />
        
        <button type="submit" style={buttonStyles}>
            Add app to host
        </button>
    </form>
);

export default reduxForm({
    form: 'addAppForm'
})(AddAppForm);