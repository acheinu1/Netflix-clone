import React from 'react';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from "./containers/footer"

export default function Parent() {
    return (
        <>
           <JumbotronContainer/>
           <FooterContainer />
        </>
    );
}
