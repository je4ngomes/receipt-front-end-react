import React, { Children, createRef, cloneElement } from 'react';

import { Button } from 'react-materialize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tdRoot: {
        '& div': {
            marginTop: 0,
            marginBottom: 0,
            '& div.select-wrapper': {
                marginTop: -18
            },
            '& div.select-wrapper.select-month, div.select-wrapper.select-year': {
                marginTop: '0'
            }
        },
        width: 138
    },
    cellRoot: { 
        '& button': { marginRight: 5 }
    }
});

const EditableCells = ({ fields, submitOnClick, cancelOnClick, children }) => {
    const refs = fields.reduce((acc, field) => ({ ...acc, [field]: createRef() }), {});
    const classes = useStyles();

    return (
        <>
            {Children.map(
                children, 
                child => <td className={classes.tdRoot}>{cloneElement(child, { ref: refs[child.name] })}</td>
            )}
            <td className={classes.cellRoot}>
                <Button 
                    waves='light' 
                    floating 
                    icon='done' 
                    small 
                    className='deep-purple'
                    onClick={submitOnClick.bind(refs)} />
                 <Button 
                    waves='light' 
                    floating 
                    icon='clear'
                    small 
                    className='red lighten-1'
                    onClick={cancelOnClick} />
            </td>
        </>
    );
};

export default EditableCells;
