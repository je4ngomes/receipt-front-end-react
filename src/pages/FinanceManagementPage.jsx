import React from 'react';
import { Container, Row, Col } from 'react-materialize';

import Sidebar from '../components/shared/Sidebar';
import Header from '../components/shared/Header';
// import Footer from '../components/shared/Footer';
import TabSwitch from '../components/shared/TabSwitch';
import PaneContainer from '../components/shared/PaneContainer';
import IncomeCostTabContent from '../components/financeManagement/IncomeCostTabContent';
import InlineInput from '../components/shared/forms/InlineInput';


const FinanceManagementPage = () => {
    return (
        <div className='sidebar__padding'>
            <Sidebar />
            <Header title='Controle de Despesas e Receitas' />
            <Container style={{ width: '98%' }}>
                <Row>
                    <Col s={12}>
                        <PaneContainer>
                            <TabSwitch tabsTitle={[
                                'Receitas', 
                                'Despesas Fixas', 
                                'Despesas Variáveis', 
                                'Despesas com Pessoas'
                            ]}>
                                <IncomeCostTabContent />
                                <IncomeCostTabContent />
                                <IncomeCostTabContent />
                                <IncomeCostTabContent />
                            </TabSwitch>
                        </PaneContainer>
                    </Col>
                                <Col s={12}>
                <InlineInput label='Inline' labelColor='red'>
                    <input className='inputField' type='text' />
                </InlineInput>
            </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default FinanceManagementPage;
