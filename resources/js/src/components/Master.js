import React from 'react';

const Master = ({ title, children }) => {
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Master;
