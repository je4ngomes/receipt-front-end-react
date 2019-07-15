import React, { useReducer } from 'react';
import { Table, Checkbox } from 'react-materialize';
import ActionCellsBtn from '../financeManagement/ActionCellsBtn';

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, current: action.payload.index, editing: false };
        case 'edit':
            return { ...state, current: action.payload.index, editing: true };
        case 'cancel':
            return { ...state, current: action.payload.index, editing: false };
        default:
            throw new Error();
    };
};

const DataTable = ({ headings, rows, RowForm }) => {
    const [state, dispatch] = useReducer(reducer, { current: null, rows, editing: false });

    const renderHeadingRow = (header, i) => (<th key={i}>{header}</th>);
    const renderRow = (row, i) => {
        const isInEditingMode = state.current === i && state.editing;

        return (
            <tr key={i} >
                <td><Checkbox label='' filledIn/></td>
                {
                    isInEditingMode
                        ? <RowForm />
                        : row.map((data, i) => (<td key={i}>{data}</td>))
                }
                <ActionCellsBtn index={i} isInEditingMode={isInEditingMode} dispatch={dispatch}/>
            </tr>
        )
    };

    return (
        <Table 
            style={{ borderRadius: 3, marginTop: 10 }} 
            className='deep-purple-text text-lighten-4 z-depth-1 responsive-table'>
            <thead>
                <tr>
                    <th><Checkbox label='' filledIn/></th>
                    {headings.map(renderHeadingRow)}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {state.rows.map(renderRow)}
            </tbody>
        </Table>
    );
};

export default DataTable;
