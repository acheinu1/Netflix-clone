import React from 'react';
import {Footer} from "../components";

export function FooterContainer() {
    return(
        <Footer> 
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                {/* col 1 */}
                <Footer.Column>
                    <Footer.Link href="#">FAQ </Footer.Link>
                    <Footer.Link href="#">Investor Relations </Footer.Link>
                    <Footer.Link href="#">Privacy </Footer.Link>
                    <Footer.Link href="#">Speed test </Footer.Link>
                </Footer.Column>
                {/* col 2 */}
                <Footer.Column>
                    <Footer.Link href="#">Help Center </Footer.Link>
                    <Footer.Link href="#">Jobs </Footer.Link>
                    <Footer.Link href="#">Cookie Preferences </Footer.Link>
                    <Footer.Link href="#">Legal Notices </Footer.Link>
                </Footer.Column>
                    {/* col 3 */}
                <Footer.Column>
                    <Footer.Link href="#">Account </Footer.Link>
                    <Footer.Link href="#">Ways to watch </Footer.Link>
                    <Footer.Link href="#">Corporate Information </Footer.Link>
                    <Footer.Link href="#">Netflix Originals </Footer.Link>
                </Footer.Column>
                    {/* col 4 */}
                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact us</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text> Netflix Nigeria </Footer.Text>
        </Footer>
    );
}