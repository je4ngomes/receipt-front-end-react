import React, { useState } from 'react';

import DataTable from './table/DataTable';
import ActionsPanel from './ActionsPanel';
import { Row, Col, Container, Button, Icon } from 'react-materialize';
import YearMonthSelector from './YearMonthSelector';

const ContentTab = ({ 
    onInlineFormSubmit,
    createNewRegisterModal, 
    onDeleteRow,
    onDateSelection,
    dataTable: { rows, headings, inputs },
    containerWidth = '99%'
    }) => {
    const [toggleRemoveBtn, setToggleRemoveBtn] = useState(true);
    
    const removeRegisterBtn = (
        <Button 
            waves='light' 
            className='red lighten-1'
            onClick={onDeleteRow} 
            disabled={toggleRemoveBtn}
        >
            Remover
            <Icon right>remove_circle_outline</Icon>
        </Button>
    );

    return (
        <Container style={{ marginTop: 5, width: containerWidth }}>
            {onDateSelection && (
                <Row>
                    <Col>
                        <YearMonthSelector onDateSelection={onDateSelection} />                    
                    </Col>
                </Row>
            )}
            
            <Row style={{ marginBottom: 0, marginTop: 10, marginLeft: 5 }}>
                <Col>
                    <ActionsPanel actions={[createNewRegisterModal, removeRegisterBtn]} />
                </Col>
            </Row>
            
            <DataTable 
                headings={headings} 
                rows={rows}
                onInlineFormSubmit={onInlineFormSubmit}
                inputs={inputs} 
                onSelection={isSelected => setToggleRemoveBtn(isSelected)} />
        </Container>
    );
};

export default ContentTab;
