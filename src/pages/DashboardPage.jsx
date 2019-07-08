import React from 'react';
import { Row, Col } from 'react-materialize';

import Sidebar from '../components/dashboard/Sidebar';
import MonthlyChart from '../components/Charts/MonthlyChart';

const DashboardPage = () => {
    return (
        <div>
            <Sidebar />
            <Row>
                <Col offset='m3' style={{ marginTop: '3rem' }}>
                    <MonthlyChart/>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardPage;