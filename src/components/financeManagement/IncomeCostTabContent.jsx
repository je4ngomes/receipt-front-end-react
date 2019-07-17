import React, { useState } from 'react';
import { Icon, Row, Col, Button, Container } from 'react-materialize';

import BtnPanel from '../shared/BtnPanel';
import DataTable from '../shared/DataTable';

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
    
    const rows = [[
            '25/07/2019', 
            'Testando pagamento',
            <span className='green-text accent-3'>R$ 350</span>,
            'Banco do Brasil',
            'Comissão',
            <span className='green-text accent-3'>Sim</span>
        ],
        [
            '25/07/2019', 
            'Testando pagamento',
            <span className='green-text accent-3'>R$ 350</span>,
            'Banco do Brasil',
            'Comissão',
            <span className='red-text'>Não</span>
        ]
    ];

    return (
        <Container style={{ marginTop: 5, width: '98%' }}>
            <Row style={{ marginBottom: 0, marginTop: 10 }}>
                <Col>
                    <BtnPanel>
                        <Button waves='purple' className='deep-purple'>
                            Adiciona Receita
                            <Icon right>add_circle_outline</Icon>
                        </Button>
                        <Button className='red lighten-1' disabled={toggleRemoveBtn}>
                            Remover
                            <Icon right>remove_circle_outline</Icon>
                        </Button>
                    </BtnPanel>
                </Col>
            </Row>


            <DataTable headings={headings} rows={rows} />

        </Container>
    );
};

export default IncomeTab;