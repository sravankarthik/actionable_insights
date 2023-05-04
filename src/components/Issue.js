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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nulla accusantium repellendus, id placeat laudantium aperiam distinctio velit aliquam eum. Nobis, consequuntur cum ullam odit veritatis voluptatum earum. Deleniti, soluta?
                    </Tab>
                    <Tab eventKey="Remedy" title="Remedy" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto incidunt repudiandae expedita perspiciatis ullam odio, alias id dolorum sed nam magni quisquam error a ratione repellat, nesciunt corporis unde.
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default Issue;