import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(

    <div>
        <Card id={robots[0].id} name={robots.name[0]} email={robots.email[0]}/>
        <Card id={robots[1].id} name={robots.name[1]} email={robots.email[1]}/>
        <Card id={robots[2].id} name={robots.name[2]} email={robots.email[2]}/>
    </div>


, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
