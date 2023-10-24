import React from 'react';
import Header from 'components/Header';
import LeadGenerationForm from 'components/LeadGenerationForm';

const ITConsultingPage = () => {
    return (
        <>
            <Header />
            <h1>IT Consulting Page</h1>
            <p>We provide IT consulting. You can leave your contacts and we will call you.</p>
            <LeadGenerationForm />
        </>
    );
}

export default ITConsultingPage;
