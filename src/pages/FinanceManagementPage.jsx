import React from 'react';
import { Container, Row, Col } from 'react-materialize';

import Sidebar from '../components/shared/Sidebar';
import Header from '../components/shared/Header';
// import Footer from '../components/shared/Footer';
import TabSwitch from '../components/shared/TabSwitch';
import PanelContainer from '../components/shared/PanelContainer';
import IncomeCostTabContent from '../components/financeManagement/IncomeCostTabContent';

const FinanceManagementPage = () => {
    return (
        <div className='sidebar__padding'>
            <Sidebar />
            <Header title='Controle de Despesas e Receitas' />
            <Container style={{ width: '98%' }}>
                <Row>
                    <Col s={12}>
                        <PanelContainer>
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
                        </PanelContainer>
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default FinanceManagementPage;
