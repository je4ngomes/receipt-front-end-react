import React from 'react';
import { Icon, Row, Col, Button, Container } from 'react-materialize';

import BtnPanel from '../shared/BtnPanel';
import DataTable from '../shared/DataTable';

const IncomeTab = ({ rowsNotSelected=true }) => {
    const headings = [
        'Data de Vencimento',
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
        ]
    ];

    return (
        <Container style={{ marginTop: 5, width: '99%' }}>
            <Row style={{ marginBottom: 0, marginTop: 10 }}>
                <Col>
                    <BtnPanel>
                        <Button waves='purple' className='deep-purple'>
                            Adiciona Receita
                            <Icon right>add_circle_outline</Icon>
                        </Button>
                        <Button className='red lighten-1' disabled={rowsNotSelected}>
                            Remover
                            <Icon right>remove_circle_outline</Icon>
                        </Button>
                    </BtnPanel>
                </Col>
            </Row>

            <Row>
                <Col s='12'>
                    <DataTable headings={headings} rows={rows} />
                </Col>
            </Row>

        </Container>
    );
};

export default IncomeTab;