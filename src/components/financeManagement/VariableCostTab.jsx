import React, { useState } from 'react';
import { 
    Icon, 
    Row, 
    Col, 
    Button, 
    Container, 
    TextInput, 
    Select, 
    DatePicker } from 'react-materialize';

import ActionsPanel from '../shared/ActionsPanel';
import DataTable from '../shared/table/DataTable';
import ModalFinanceForm from '../shared/forms/ModalFinanceForm';
import YearMonthSelector from '../shared/YearMonthSelector';

const VariableCostTab = () => {
    const [toggleRemoveBtn, setToggleRemoveBtn] = useState(true);
    const headings = [
        'Vencimento',
        'Descrição',
        'Valor',
        'Pago a',
        'Categoria',
        'Pago'    
    ];
    
    const rows = [{ 
            expires_date: '25/07/2019',
            description: 'Testando pagamento',
            cost: 350.00,
            paymentEntity: 'Banco do Brasil',
            category: 'Comissão',
            isPaid: 'no' 
        }
    ];

    const Inputs = [
        <DatePicker className='inputField' name='expires_date'/>,
        <TextInput className='inputField' name='description'/>,
        <TextInput className='inputField' name='cost'/>,
        <Select name='paymentEntity'>
            <option value="caixa">Caixa</option>
        </Select>,
        <Select name='category'>
            <option value="comissao">Comissão</option>
        </Select>,
        <Select name='isPaid' className='deep-purple-text text-lighten-4'>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
        </Select>
    ];

    const createNewRegisterModal = (
        <ModalFinanceForm
            trigger={(
                <Button 
                    waves='light' 
                    className='deep-purple'
                >
                    Adiciona Despesa Variável
                    <Icon right>add_circle_outline</Icon>
                </Button>
            )}
            header='Nova Despesa Varíavel' 
            customPaymentEntityLabel='Pago a' />

    );
    const removeRegisterBtn = (
        <Button 
            waves='light' 
            className='red lighten-1' 
            disabled={toggleRemoveBtn}
        >
            Remover
            <Icon right>remove_circle_outline</Icon>
        </Button>
    );

    return (
        <Container style={{ marginTop: 5, width: '99%' }}>
            <Row>
                <Col>
                    <YearMonthSelector onDateSelection={state => state} />                    
                </Col>
            </Row>
            <Row style={{ marginBottom: 0, marginTop: 10, marginLeft: 5 }}>
                <Col>
                    <ActionsPanel actions={[createNewRegisterModal, removeRegisterBtn]} />
                </Col>
            </Row>


            <DataTable 
                headings={headings} 
                rows={rows}
                Inputs={Inputs} 
                onSelection={isSelected => setToggleRemoveBtn(isSelected)} />
        </Container>
    );
};

export default VariableCostTab;