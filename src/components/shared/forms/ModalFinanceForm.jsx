import React from 'react';
import { Modal, Col, Row, Button } from 'react-materialize';
import { makeStyles } from '@material-ui/core/styles';
import InlineDatePicker from './InlineDatePicker';
import InlineSelect from './InlineSelect';
import InlineInput from './InlineInput';

const useStyles = makeStyles({
    modalRoot: {
        backgroundColor: '#232a33',
        color: '#fff',
        width: '60%',
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

const ModalFinanceForm = ({ header, trigger, customPaymentEntityLabel }) => {
    const classes = useStyles();
    const submitBtn = (
        <Button 
            className='deep-purple'
            style={{ marginRight: 5 }}
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
            fixedFooter 
            ref={input => input}
            header={header}
            actions={[submitBtn, cancelBtn]}
        >
            <form className={classes.formRoot}>
                <Row>
                    <Col m={6}>
                        <span>Vencimento:</span>
                        <InlineDatePicker name='expires_date' />
                    </Col>
                    <Col m={6}>
                        <span>Descrição:</span>
                        <InlineInput name='description' />
                    </Col>
                </Row>
                <Row>
                    <Col m={6}>
                        <span>Valor:</span>
                        <InlineInput name='cost' />
                    </Col>
                    <Col m={6}>
                        <span>{customPaymentEntityLabel}:</span>
                        <InlineSelect name='paymentEntity'>
                            <option value="caixa">Caixa</option>
                            <option value="caixa">Bradesco</option>
                            <option value="caixa">Santander</option>
                        </InlineSelect>
                    </Col>
                </Row>
                <Row>
                    <Col m={6}>
                        <span>Categoria:</span>
                        <InlineSelect name='category'>
                            <option value="caixa">Comissão</option>
                        </InlineSelect>
                    </Col>
                    <Col m={6}>
                        <span>Pago:</span>
                        <InlineSelect name='isPaid'>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </InlineSelect>
                    </Col>
                </Row>
            </form>
        </Modal>
    );
};

export default ModalFinanceForm;
