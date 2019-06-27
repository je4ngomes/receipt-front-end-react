import React from './node_modules/react';

const styles = {
    root: {
        position: 'absolute',
        'zIndex': -1,
        width: '243px',
        height: '207px'
    },
    top_left_corner: {
        top: 0,
        left: 0
    },
    bottom_left_corner: {
        bottom: 0,
        left: 0
    },
    bottom_right_corner: {
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
                    style: { ...styles.root, ...styles[child.props.position] }
                })
            )}
        </div>
    );
};

export default ImgCorner;