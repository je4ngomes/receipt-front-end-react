import React, { useState, useRef } from 'react';
import { Table, Checkbox, Icon, Button, TextInput, Select } from 'react-materialize';
import EditableCells from '../financeManagement/EditableCells';


const toggleAllBox = (overrideStateValues, toThis) => 
    Object.fromEntries(
        Object.entries(overrideStateValues).map(([key, _]) => [key, toThis])
    );

const isAnyBoxSelected = (state) =>
    Object.entries(state).some(([_, val]) => val)

const DataTable = ({ headings, rows, inputs }) => {
    const toggleAllBoxRef = useRef();
    const [currentRow, setCurrentRow] = useState({ current: null });
    const [selectedBox, setSelectedBox] = useState(
        rows.reduce((indexs, _, i) => ({ ...indexs, [i]: false }), {})
    );

    const editOnClick = (index) => e => {
        setCurrentRow({ current: index });
    };

    const handleCheckBoxClick = index => 
        e => setSelectedBox({ ...selectedBox, [index]: !selectedBox[index] })
    


    const cancelOnClick = () => setCurrentRow({ current: null });

    const renderEditableCells = () => (
        <EditableCells submitOnClick={() => (0)} cancelOnClick={cancelOnClick} fields={['name']}>
            <TextInput className='inputField' name='expires_date'/>
            <TextInput className='inputField' name='description'/>
            <TextInput className='inputField' name='cost'/>
            <Select name='paidFrom'>
                <option value="caixa">Caixa</option>
            </Select>
            <Select name='category'>
                <option value="comissao">Comissão</option>
            </Select>
            <Select name='paid'>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
            </Select>
        </EditableCells>
    ); 
    const renderHeadingRow = () => (
        <>
            <tr>
                <th><Checkbox label='' ref={toggleAllBoxRef} onClick={e => setSelectedBox((toggleAllBox(selectedBox, e.target.checked)))} filledIn/></th>
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
            <tr key={i} >
                <td><Checkbox onClick={handleCheckBoxClick(i)} checked={selectedBox[i]} label='' filledIn/></td>
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
