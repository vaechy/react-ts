import React from 'react';
import ReactDOM from 'react-dom';
function Mycomponent() {
    console.log(this);
    return <h2>hello react</h2>
}
ReactDOM.render(
    <Mycomponent/>
    , document.getElementById("app"))