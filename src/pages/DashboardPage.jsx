import React from 'react';
import { Row, Col, Container } from 'react-materialize';

import Sidebar from '../components/dashboard/Sidebar';
import MonthlyChart from '../components/charts/MonthlyChart';
import Header from '../components/shared/Header';
import SelectYear from '../components/shared/SelectYear';
import IncomeChart from '../components/charts/IncomeChart';
import ExpensesChart from '../components/charts/ExpensesChart';
import RapidAccess from '../components/dashboard/RapidAccess';

const DashboardPage = () => {
    return (
        <>
            <Sidebar />  
            <SelectYear style={{ position: 'absolute', right: 30, top: 15 }} />
            <Header title='Dashboard' />
            <Container>
                <Row>
                    <Col m='4'>
                        <IncomeChart />
                    </Col>
                    <Col m='4'>
                        <ExpensesChart />
                    </Col>
                    <Col m='4'>
                        <RapidAccess />
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