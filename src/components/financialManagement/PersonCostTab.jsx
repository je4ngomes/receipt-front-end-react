import React, { useState } from 'react';
import { 
    Icon, 
    Button, 
    TextInput, 
    Select, 
    DatePicker } from 'react-materialize';

import ModalFinanceForm from '../shared/forms/ModalFinanceForm';
import ContentTab from '../shared/ContentTab';

const PersonCostTab = () => {
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

    const inputs = [
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

    const modal = (
        <ModalFinanceForm
            trigger={(
                <Button 
                    waves='light' 
                    className='deep-purple'
                >
                    Adiciona Despesa com Pessoas
                    <Icon right>add_circle_outline</Icon>
                </Button>
            )}
            header='Nova Despesa com Pessoas' 
            customPaymentEntityLabel='Pago a' />

    );

    return (
        <ContentTab
            createNewRegisterModal={modal}
            onDeleteRow={() => null}
            onInlineFormSubmit={() => null}
            onDateSelection={console.log}
            dataTable={{ rows, headings, inputs }} />
    );
};

export default PersonCostTab;