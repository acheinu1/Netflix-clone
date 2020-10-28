import React from 'react';
import {Jumbotron} from "../components";
import Jumbodata from "../fixtures/jumbo";

export function JumbotronContainer () {
    return (
        <>
            <Jumbotron.Container>
                {Jumbodata.map((item) =>(
                <Jumbotron key={item.id} direction ={item.direction}> 
                  {/* left-----------------right */}
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
                    </Jumbotron.Pane>
                    {/* right---------------left */}
                    <Jumbotron.Pane>
                        <Jumbotron.Image  src = {item.image} alt = {item.alt} />
                    </Jumbotron.Pane>
                </Jumbotron>
                ))}
            </Jumbotron.Container>
        </>
    );
}
