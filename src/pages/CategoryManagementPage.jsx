import React from 'react';
import { Container, Row, Col } from 'react-materialize';

import Sidebar from '../components/shared/Sidebar';
import Header from '../components/shared/Header';
// import Footer from '../components/shared/Footer';
import TabSwitch from '../components/shared/TabSwitch';
import PaneContainer from '../components/shared/PaneContainer';
import IncomeCategoryTab from '../components/categoryManagement/IncomeCategoryTab';
import FixedCategoryTab from '../components/categoryManagement/FixedCategoryTab';
import VariableCategoryTab from '../components/categoryManagement/VariableCategoryTab';
import PersonCategoryTab from '../components/categoryManagement/PersonCategoryTab.jsx';
import PaymentEntityTab from '../components/categoryManagement/PaymentEntityTab.jsx';

const CategoryManagementPage = () => {
    return (
        <div className='sidebar__padding'>
            <Sidebar />
            <Header title='Gerenciar Plano de Contas / Categorias' />
            <Container style={{ width: '87%' }}>
                <Row>
                    <Col s={12}>
                        <PaneContainer>
                            <TabSwitch tabsTitle={[
                                'Receitas', 
                                'Despesas Fixas', 
                                'Despesas Variáveis', 
                                'Despesas com Pessoas',
                                'Entidades de Pagamento'
                            ]}>
                                <IncomeCategoryTab />
                                <FixedCategoryTab />
                                <VariableCategoryTab />
                                <PersonCategoryTab />
                                <PaymentEntityTab />
                            </TabSwitch>
                        </PaneContainer>
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default CategoryManagementPage;
