import React, { useState } from 'react';
import { Icon, Row, Col, Button, Container } from 'react-materialize';

import ActionsPanel from '../shared/ActionsPanel';
import DataTable from '../shared/table/DataTable';
import ModalFinanceForm from '../shared/forms/ModalFinanceForm';

const IncomeTab = () => {
    const [toggleRemoveBtn, setToggleRemoveBtn] = useState(true);
    const headings = [
        'Vencimento',
        'Descrição',
        'Valor',
        'Recebido de',
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

    const onSelection = (isSelected) => setToggleRemoveBtn(isSelected);

    const createNewReceiptBtn = (
        <Button 
            waves='light' 
            className='deep-purple modal-trigger'
            href='#finance_form'
        >
            Adiciona Receita
            <Icon right>add_circle_outline</Icon>
        </Button>
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
        <Container style={{ marginTop: 5, width: '98%' }}>
            <Row style={{ marginBottom: 0, marginTop: 10 }}>
                <Col>
                    <ActionsPanel actions={[createNewReceiptBtn, removeRegisterBtn]} />
                </Col>
            </Row>


            <DataTable headings={headings} rows={rows} onSelection={onSelection} />

        <ModalFinanceForm 
            header='Nova Receita' 
            customPaymentEntityLabel='Recebido de' />
        </Container>
    );
};

export default IncomeTab;