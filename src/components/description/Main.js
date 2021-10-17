import React from 'react';

const Main = ({ title, desc }) => {
    return (<>
        <h1>{title}</h1>
        <div>{desc}</div>
    </>);
}

export default Main;