import React from 'react';

const BaseContainer = ({ children }) => {
    return (
        <div className="w-[90%] mr-auto ml-auto">
            {
                children
            }
        </div>
    );
}

export default BaseContainer;
