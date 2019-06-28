import React from 'react';

const styles = {
    root: {
        position: 'absolute',
        'zIndex': -1,
        width: '243px',
        height: '207px'
    },
    top__left: {
        top: 0,
        left: 0
    },
    bottom__left: {
        bottom: 0,
        left: 0
    },
    bottom__right: {
        bottom: 0,
        right: 0
    }
};

const ImgCorner = ({ children }) => {
    return (
        <div>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    key: i,
                    style: { ...styles.root, ...styles[child.props.cornerPos] }
                })
            )}
        </div>
    );
};

export default ImgCorner;