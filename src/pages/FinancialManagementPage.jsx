import React from 'react';
import { Container, Row, Col } from 'react-materialize';

import Sidebar from '../components/shared/Sidebar';
import Header from '../components/shared/Header';
// import Footer from '../components/shared/Footer';
import TabSwitch from '../components/shared/TabSwitch';
import PaneContainer from '../components/shared/PaneContainer';
import IncomeCostTab from '../components/financialManagement/IncomeCostTab';
import FixedCostTab from '../components/financialManagement/FixedCostTab';
import VariableCostTab from '../components/financialManagement/VariableCostTab';
import PersonCostTab from '../components/financialManagement/PersonCostTab';

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
                                <IncomeCostTab />
                                <FixedCostTab />
                                <VariableCostTab />
                                <PersonCostTab />
                            </TabSwitch>
                        </PaneContainer>
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default FinanceManagementPage;
