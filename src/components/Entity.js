import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Entity = ({ details }) => {
    return (
        <Row className="mx-2">
            {Object.keys(details).map(function (key) {
                return (<Col xs={6} md={2}>
                    <Card className="m-2">
                        <Card.Body>
                            <Card.Title>{key}</Card.Title>
                            <Card.Text>
                                {details[key]}
                                {details["progress-bar"] = (((details[key] + 1) / 2) * 100) >= 50 ? "progress-bar bg-success" : "prgress-bar bg-danger"}
                                <div className="progress">
                                    <div className={details["progress-bar"]} role="progressbar" style={{ width: ((details[key] + 1) / 2) * 100 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)
            })}
        </Row>
    );
}

export default Entity;