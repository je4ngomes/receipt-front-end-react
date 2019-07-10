import React from 'react';
import { Collection, CollectionItem, Icon } from 'react-materialize';
import PanelContainer from '../shared/PanelContainer';

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
                    Nova Receita
                    <Icon className='green-text text-accent-3' right>trending_up</Icon>
                </CollectionItem>
                <CollectionItem 
                    className={classes} 
                    style={style} 
                    href='#'
                >
                    Nova Despesa
                    <Icon className='red-text text-accent-3' right>trending_down</Icon>
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
    )
}

export default RapidAccess;
