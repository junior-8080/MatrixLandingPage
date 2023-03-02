import React from 'react';

const BaseContainer = ({ children }) => {
    return (
        <div className="w-full px-5 lg:px-0 lg:w-[90%] lg:mr-auto lg:ml-auto">
            {
                children
            }
        </div>
    );
}

export default BaseContainer;
