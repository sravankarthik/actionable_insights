import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Report = ({ data }) => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Report</Accordion.Header>
                <Accordion.Body>
                    {data}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Report;