import React from 'react';

const View = ({ code }) => {
    return (<>
        <div dangerouslySetInnerHTML={{ __html: code }}></div>
    </>);
}

export default View;