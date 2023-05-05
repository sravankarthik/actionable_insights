import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Issue = ({ info }) => {
    const [key, setKey] = useState('Issue');
    return (
        <Col className="border p-4 m-4" md={3}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="Issue" title="Issue">
                    {info.issue}
                </Tab>
                <Tab eventKey="Remedy" title="Feedback" >
                    {info.remedy}
                </Tab>
                <Tab eventKey="Importance" title="Importance" >
                    {info.importance}
                </Tab>
            </Tabs>
        </Col>
    );
}

export default Issue;