import React from 'react';
import { Collection, CollectionItem, Icon } from 'react-materialize';
import PanelContainer from '../../shared/PanelContainer';

const RapidAccess = (props) => {
    const classes = 'waves-effect waves-light indigo-text text-lighten-3';
    const style = {
        background: '#232a33',
        borderBottom: 'none'
    };

    return (
        <PanelContainer title='Acesso Rápido' alignTitle='left'>
            <Collection style={{ border: 'none' }}>
                <CollectionItem 
                    className={classes} 
                    style={style} 
                    href='#'
                >
                    Novo Registro
                    <Icon className='deep-purple-text text-lighten-1' right>open_in_new</Icon>
                </CollectionItem>
                <CollectionItem 
                    className={classes} 
                    style={style} 
                    href='#'
                >
                    Gerar Último Relátorio
                    <Icon className='blue-text' right>print</Icon>
                </CollectionItem>
            </Collection>
        </PanelContainer>
    );
};

export default RapidAccess;
