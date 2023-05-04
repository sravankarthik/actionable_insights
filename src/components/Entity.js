import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Entity.css';

const Entity = ({ details }) => {
    return (
       <> 
        <Row className="mx-2">
            {Object.keys(details).map(function (key) {
                return (<Col xs={6} md={2}>
                    <Card className="m-2">
                        <Card.Body>
                            <Card.Title>{key}</Card.Title>
                            <Card.Text>
                                {(((details[key] + 1) / 2) * 100) >> 0}
                                <div className="progress">
                                    <div className={(((details[key] + 1) / 2) * 100) >= 50 ? "progress-bar bg-success" : "prgress-bar bg-danger"} role="progressbar" style={{ width: (((details[key] + 1) / 2) * 100).toString() + "%" }} aria-valuenow={{ width: ((details[key] + 1) / 2) * 100 }} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)
            })}
        </Row>
        </>
    );
}

export default Entity;