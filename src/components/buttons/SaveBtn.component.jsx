import React from 'react';

const SaveBtnComponent = ({ children, type, onClick }) => {

    return (
        <div type={type} onClick={onClick} style={{ position: 'relative', display: 'flex' }}>
            <button className="button-82-pushable" role="button">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front ">
                    {children}
                </span>
            </button>
        </div>
    );
}

export default SaveBtnComponent;
