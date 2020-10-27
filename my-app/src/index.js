import React from 'react';
import {render} from 'react-dom';
import Parent from './parent';
import "normalize.css";
import {GlobalStyles} from "./globalstyles";


render(<>
<GlobalStyles/>
<Parent /> 
</>, 
document.getElementById('root'));
