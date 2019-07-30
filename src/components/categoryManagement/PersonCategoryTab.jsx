import React from 'react';

import ModalCategoryForm from '../shared/forms/ModalCategoryForm';
import ContentTab from '../shared/ContentTab';
import { Button, Icon } from 'react-materialize';
import InlineInput from '../shared/forms/InlineInput';

const PersonCategoryTab = () => {
    const headings = [
        'Categorias'   
    ];
    
    const rows = [{ 
            name: 'Cobrança'
        }
    ];

    const inputs = [
        <InlineInput style={{ width: 300 }} name='name' />
    ];

    const modal = (
        <ModalCategoryForm
            onSubmit={() => null}
            trigger={(
                <Button 
                    waves='light' 
                    className='deep-purple'
                >
                    Novo Registro
                    <Icon right>add_circle_outline</Icon>
                </Button>
            )} />
    );

    return (
        <ContentTab
            createNewRegisterModal={modal}
            onDeleteRow={() => null}
            onInlineFormSubmit={() => null}
            containerWidth='80%'
            dataTable={{ rows, headings, inputs }} />
    );
};

export default PersonCategoryTab;
