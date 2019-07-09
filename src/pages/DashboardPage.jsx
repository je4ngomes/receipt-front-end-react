import React from 'react';
import { Row, Col, Container } from 'react-materialize';

import Sidebar from '../components/dashboard/Sidebar';
import MonthlyChart from '../components/charts/MonthlyChart';
import Header from '../components/shared/Header';
import IncomeChart from '../components/charts/IncomeChart';
import ExpensesChart from '../components/charts/ExpensesChart';

const DashboardPage = () => {
    return (
        <>
            <Sidebar />  
            <Header title='Dashboard' />
            <Container>
                <Row>
                    <Col m='4'>
                        <IncomeChart />
                    </Col>
                    <Col m='4'>
                        <ExpensesChart />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MonthlyChart/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DashboardPage;