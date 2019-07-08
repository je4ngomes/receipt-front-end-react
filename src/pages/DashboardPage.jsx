import React from 'react';
import { Row, Col, Container } from 'react-materialize';

import Sidebar from '../components/dashboard/Sidebar';
import MonthlyChart from '../components/charts/MonthlyChart';
import Header from '../components/shared/Header';

const DashboardPage = () => {
    return (
        <>
            <Sidebar />
            <Header title='Dashboard' />
            <Container>
                <Row>
                    <Col style={{ marginTop: '3rem' }}>
                        <MonthlyChart/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DashboardPage;