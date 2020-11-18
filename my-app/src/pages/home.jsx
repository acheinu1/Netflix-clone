import React from 'react';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { OptForm, Feature } from "../components";

export default function Home() {
    return (
        <> 
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, Tv shows and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. cancel at anytime.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Get Started</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        {/* <OptForm.Break /> */}
                    </OptForm>
                </Feature>
            </HeaderContainer> 
            <JumbotronContainer/>
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
