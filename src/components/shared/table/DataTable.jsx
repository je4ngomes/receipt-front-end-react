import React, { useState } from 'react';
import { Table, Button } from 'react-materialize';

import { spanColor } from '../../../utils/util';
import EditableCells from './EditableCells';
import Checkbox from '../forms/Checkbox';


const toggleAllBox = (overrideStateValues, toThis) => 
    Object.fromEntries(
        Object.entries(overrideStateValues).map(([key, _]) => [key, toThis])
    );

const isBoxSelected = (state) =>
    !Object.entries(state).some(([_, val]) => val);

const isAllBoxSelected = (state) =>
    Object.entries(state).every(([_, val]) => val);

const orderBy = (prop, order) => {
    const sort = (objA, objB) => (
        objA[prop] < objB[prop] 
            ? -1
            : (
                objA[prop] > objB[prop] 
                    ? 1
                    : 0
            )
    );

    return (a, b) => order === 'asc' ? sort(a, b) : -sort(a, b);
};

const DataTable = ({ headings, rows, Inputs, onSelection }) => {
    const [currentRow, setCurrentRow] = useState({ current: null });
    const [checkboxAll, setCheckboxAll] = useState(false);
    const [selectedBox, setSelectedBox] = useState(
        rows.reduce((indexs, _, i) => ({ ...indexs, [i]: false }), {})
    );

    const editOnClick = (index) => e => {
        setCurrentRow({ current: index });
    };

    const handleCheckboxChange = index => 
        e => {
            const newState = { ...selectedBox, [index]: !selectedBox[index] };
            setSelectedBox(newState);

            setCheckboxAll(isAllBoxSelected(newState));        

            onSelection(isBoxSelected(newState));
        } 

    const handleCheckAllBoxChange = e => {
        setCheckboxAll(prevState => !prevState);
        const newState = toggleAllBox(selectedBox, e.target.checked);

        setSelectedBox(newState);

        onSelection(isBoxSelected(newState));
    };
    


    const cancelOnClick = () => setCurrentRow({ current: null });

    const renderEditableCells = (row) => (
        <EditableCells 
            Inputs={Inputs} 
            submitOnClick={(refs) => console.log(refs)} 
            cancelOnClick={cancelOnClick} 
            fields={row} />
    ); 
    const renderHeadingRow = () => (
        <>
            <tr>
                <th><Checkbox checked={checkboxAll} onChange={handleCheckAllBoxChange}/></th>
                {headings.map((header, i) => (<th key={i}>{header}</th>))}
                <th>Ações</th>
            </tr>
        </>

    );

    const renderShowData = (row, rowIndex) => (
        <>
            {Object.entries(row).map(([key, val], i) => {
                switch(key) {
                    case 'isPaid':
                        return val !== 'no' 
                            ? (<td key={i}>{spanColor('#66bb6a', 'Sim')}</td>)
                            : (<td key={i}>{spanColor('#ef5350', 'Não')}</td>);
                    
                    case 'cost':
                        return val >= 0
                            ? (<td key={i}>{spanColor('#66bb6a', `R$ ${val}`)}</td>)
                            : (<td key={i}>{spanColor('#ef5350', `R$ ${val}`)}</td>);
                    
                    default: return (<td key={i}>{val}</td>);
                }
            })}
            <td>
                <Button
                    waves='light' 
                    icon='edit'
                    small
                    floating
                    className='indigo lighten-1'
                    onClick={editOnClick(rowIndex)}/>
            </td>
        </>
    );

    const renderRow = (row, i) => {
        const isInEditingMode = currentRow.current === i;

        return (
            <tr className='finance' key={i} >
                <td><Checkbox onChange={handleCheckboxChange(i)} checked={selectedBox[i]} /></td>
                {
                    isInEditingMode
                        ? renderEditableCells(row)
                        : renderShowData(row, i)
                }
            </tr>
        );
    };

    return (
        <Table 
            style={{ borderRadius: 3, marginTop: 10 }} 
            className='deep-purple-text text-lighten-4 z-depth-1 responsive-table'>
            <thead>
                {renderHeadingRow()}
            </thead>
            <tbody>
                {rows.map(renderRow)}
            </tbody>
        </Table>
    );
};

export default DataTable;