import React from 'react';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { OptForm } from "../components";

export default function Home() {
    return (
        <> 
            <HeaderContainer>
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get Started</OptForm.Button>
                <OptForm.Break />
            </OptForm>
            </HeaderContainer> 
            <JumbotronContainer/>
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
