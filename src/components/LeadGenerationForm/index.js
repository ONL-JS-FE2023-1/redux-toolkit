import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    location: '',
    // UTM
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
}

const LeadGenerationForm = () => {
    const handleSubmitToFormik = (values, actions) => {
        const urlSearchParamsInstance = new URLSearchParams(window.location.search);
        values.utm_source = urlSearchParamsInstance.get('utm_source');
        values.utm_medium = urlSearchParamsInstance.get('utm_medium');
        values.utm_campaign = urlSearchParamsInstance.get('utm_campaign');
        values.utm_term = urlSearchParamsInstance.get('utm_term');
        values.utm_content = urlSearchParamsInstance.get('utm_content');
        
        console.log(values);
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
            {() => (
                <Form>
                    <Field name='email' placeholder='Type your email' />
                    <Field name='firstName' placeholder='Type your first name' />
                    <Field name='lastName' placeholder='Type your last name' />
                    <Field name='location' placeholder='Type your location' />
                    <button type='submit'>Send!</button>
                </Form>
            )}
        </Formik>
    );
}

export default LeadGenerationForm;
