import React from 'react';

const PageNotFound = (props) => {
    return (
        <div className='bg-dark text-white p-5'>
            <h1>404</h1>
            <h4>page not found</h4>
            {
                props.children
            }
        </div>
    );
};

export default PageNotFound;