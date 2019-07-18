import React, { useState, useRef } from 'react';
import { Table, Button, TextInput, Select, DatePicker } from 'react-materialize';
import EditableCells from '../financeManagement/EditableCells';
import Checkbox from './Checkbox';


const toggleAllBox = (overrideStateValues, toThis) => 
    Object.fromEntries(
        Object.entries(overrideStateValues).map(([key, _]) => [key, toThis])
    );

const isBoxSelected = (state) =>
    !Object.entries(state).some(([_, val]) => val)

const isAllBoxSelected = (state) =>
    Object.entries(state).every(([_, val]) => val)


const DataTable = ({ headings, rows, inputs, onSelection }) => {
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

    const renderEditableCells = () => (
        <EditableCells submitOnClick={() => (0)} cancelOnClick={cancelOnClick} fields={['name']}>
            <DatePicker className='inputField' name='expires_date'/>
            <TextInput className='inputField' name='description'/>
            <TextInput className='inputField' name='cost'/>
            <Select name='paidFrom'>
                <option value="caixa">Caixa</option>
            </Select>
            <Select name='category'>
                <option value="comissao">Comissão</option>
            </Select>
            <Select name='paid' className='deep-purple-text text-lighten-4'>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
            </Select>
        </EditableCells>
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
            {row.map((data, i) => (<td key={i}>{data}</td>))}
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
                        ? renderEditableCells()
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