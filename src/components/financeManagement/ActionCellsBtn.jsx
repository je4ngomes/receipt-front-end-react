import React from 'react';
import { Icon } from 'react-materialize';

const style = {
    cursor: 'pointer'
};

const ActionCellsBtn = ({ isInEditingMode, index, dispatch }) => {
    return (
        <>
            { 
                isInEditingMode 
                    ? <td style={style} onClick={() => dispatch({ type: 'add', payload: { index } })}>
                            <Icon className='green-text text-accent-3'>done</Icon>
                      </td> 
                    : <td style={style} onClick={() => dispatch({ type: 'edit', payload: { index } })}>
                            <Icon className='blue-text'>edit</Icon>
                      </td>
            }
            { 
                isInEditingMode &&
                <td style={style} onClick={() => dispatch({ type: 'cancel', payload: { index } })}>
                    <Icon className='red-text'>clear</Icon>
                </td>
            }   
        </>
    );
};

export default ActionCellsBtn;
