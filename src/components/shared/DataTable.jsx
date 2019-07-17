import React, { useState, useRef } from 'react';
import { Table, Checkbox, Icon, Button, TextInput, Select } from 'react-materialize';
import EditableCells from '../financeManagement/EditableCells';


const toggleAllBox = (overrideStateValues, toThis) => 
    Object.fromEntries(
        Object.entries(overrideStateValues).map(([key, _]) => [key, toThis])
    );

const isBoxNotSelected = (state) =>
    Object.entries(state).some(([_, val]) => val)

const DataTable = ({ headings, rows, inputs, setToggleRemoveBtn }) => {
    const toggleAllBoxRef = useRef();
    const [currentRow, setCurrentRow] = useState({ current: null });
    const [selectedBox, setSelectedBox] = useState(
        rows.reduce((indexs, _, i) => ({ ...indexs, [i]: false }), {})
    );

    const editOnClick = (index) => e => {
        setCurrentRow({ current: index });
    };

    const handleCheckboxChange = index => 
        e => {
            
            setSelectedBox({ ...selectedBox, [index]: !selectedBox[index] })

            // setToggleRemoveBtn(isBoxNotSelected(selectedBox))            
        } 

    const handleCheckAllBoxChange = e => {
        // console.log(toggleAllBox(selectedBox, e.target.checked))
        console.log(toggleAllBoxRef.current)
        setSelectedBox(state => toggleAllBox(state, toggleAllBoxRef.current.checked))

        // setToggleRemoveBtn(isBoxNotSelected(selectedBox))
    };
    


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
            <Select name='paid' className='deep-purple-text text-lighten-4'>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
            </Select>
        </EditableCells>
    ); 
    const renderHeadingRow = () => (
        <>
            <tr>
                <th><Checkbox label='' indeterminate ref={toggleAllBoxRef} value='' onChange={handleCheckAllBoxChange} filledIn/></th>
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
        console.log(selectedBox)
        return (
            <tr key={i} >
                <td><Checkbox onChange={handleCheckboxChange(i)} checked={selectedBox[i]} value='' label='' filledIn/></td>
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
