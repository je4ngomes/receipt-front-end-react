import React from 'react';
import { Modal, Col, Row, Button } from 'react-materialize';
import { makeStyles } from '@material-ui/core/styles';
import InlineInput from './InlineInput';

const useStyles = makeStyles({
    modalRoot: {
        backgroundColor: '#232a33',
        color: '#fff',
        width: '50%',
        '& div.modal-footer': {
           backgroundColor: '#2f353d',
           '& button': {
               color: '#fff'
           } 
        }
    },
    formRoot: {
        color: '#9575cd',
        fontSize: '16pt',
        '& div.row': {
            marginBottom: 0,
            '& div.col': {
                '& span': {
                    marginRight: 10
                }
            }
        }
    }
});

const ModalCategoryForm = ({ header='Adiciona Novo Registro', trigger, onSubmit }) => {
    const classes = useStyles();
    const submitBtn = (
        <Button 
            className='deep-purple'
            style={{ marginRight: 5 }}
            onClick={onSubmit}
            waves='light'
        >
            Adicionar
        </Button>
    );
    const cancelBtn = (
        <Button 
            waves='light'
            className='red'
            modal='close'
        >
            Cancelar
        </Button>
    );

    return (
        <Modal 
            className={classes.modalRoot}
            trigger={trigger}
            ref={input => input}
            header={header}
            actions={[submitBtn, cancelBtn]}
        >
            <form className={classes.formRoot}>
                <Row>
                    <Col offset='s1'>
                        <span>Nome:</span>
                        <InlineInput style={{ width: 350 }} name='name' />
                    </Col>
                </Row>
            </form>
        </Modal>
    );
};

export default ModalCategoryForm;