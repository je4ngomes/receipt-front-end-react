import React, { useState } from 'react';
import { Icon, Row, Col, Button, Container } from 'react-materialize';

import ActionsPanel from '../shared/ActionsPanel';
import DataTable from '../shared/DataTable';

const IncomeTab = () => {
    const [toggleRemoveBtn, setToggleRemoveBtn] = useState(true);
    const [state, setState] = useState({ toggleRemoveBtn: true, removeSelectedCheckbox: false });
    const headings = [
        'Vencimento',
        'Descrição',
        'Valor',
        'Recebido de',
        'Categoria',
        'Pago'    
    ];
    
    const rows = [[
            '25/07/2019', 
            'Testando pagamento',
            <span className='green-text accent-3'>R$ 350.00</span>,
            'Banco do Brasil',
            'Comissão',
            <span className='green-text accent-3'>Sim</span>
        ],
        [
            '25/07/2019', 
            'Testando pagamento',
            <span className='green-text accent-3'>R$ 520.34</span>,
            'BMG',
            'Comissão',
            <span className='red-text'>Não</span>
        ]
    ];

    const onSelection = (isSelected) => {console.log(isSelected) ;setToggleRemoveBtn(isSelected)};

    return (
        <Container style={{ marginTop: 5, width: '98%' }}>
            <Row style={{ marginBottom: 0, marginTop: 10 }}>
                <Col>
                    <ActionsPanel>
                        <Button 
                            waves='light' 
                            className='deep-purple'
                        >
                            Adiciona Receita
                            <Icon right>add_circle_outline</Icon>
                        </Button>
                        <Button 
                            waves='light' 
                            className='red lighten-1' 
                            disabled={toggleRemoveBtn}
                        >
                            Remover
                            <Icon right>remove_circle_outline</Icon>
                        </Button>
                    </ActionsPanel>
                </Col>
            </Row>


            <DataTable headings={headings} rows={rows} onSelection={onSelection} />

        </Container>
    );
};

export default IncomeTab;