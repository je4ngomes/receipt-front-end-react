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
                marginTop: 0
            }
        },
        width: 138
    },
    cellRoot: { 
        '& button': { marginRight: 5 }
    }
});

const EditableCells = ({ fields, inputs, submitOnClick, cancelOnClick }) => {
    const classes = useStyles();
    const refs = Object.fromEntries(
                    Object.entries(fields).map(([key]) => [key, createRef()])
                );

    const cloneInputElement = input => {
        const { name } = input.props;

        return cloneElement(input, { ref: refs[name], defaultValue: fields[name] });
    }

    return (
        <>
            {inputs.map((input, i) => (
                <td key={i} className={classes.tdRoot}>
                    {cloneInputElement(input)}
                </td>
            ))}
            <td className={classes.cellRoot}>
                <Button 
                    waves='light' 
                    floating 
                    icon='done' 
                    small 
                    className='deep-purple'
                    onClick={e => submitOnClick(refs, e)} />
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