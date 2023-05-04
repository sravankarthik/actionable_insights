import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Issue = ({ info }) => {
    const [key, setKey] = useState('Issue');
    return (
        <div>
            <Container className="border p-4 m-4">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="Issue" title="Issue">
                        {info.issue}
                    </Tab>
                    <Tab eventKey="Remedy" title="Remedy" >
                        {info.remedy}
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default Issue;