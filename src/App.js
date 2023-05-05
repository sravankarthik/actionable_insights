import React, { useEffect, useState } from 'react';
import './App.css';
import Entity from './components/Entity';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/Nav-bar';
import Search from './components/Search';
import Issues from './components/Issues';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Report from './components/Report';

let App = () => {
  let [status, setStatus] = useState(false);
  let [details, setDetails] = useState();
  let [items, setItems] = useState([]);
  let [data, setData] = useState();
  let [package_, setPackage] = useState();

  let handlesubmit = (e) => {
    // e.preventDefault();
    // console.log(package_);
    axios.get(`http://127.0.0.1:5000/scores?app=${package_}`).then((response) => {
      setDetails(response.data);
      axios.get(`http://127.0.0.1:5000/suggestions?app=${package_}`).then((response) => {
        setItems(response.data);
        axios.get(`http://127.0.0.1:5000/report?app=${package_}`).then((response) => {
          setData(response.data);
        })
        setStatus(true);
      })
    })
  }
  return (
    <div >
      <Nav_bar />
      <Container className="m-4">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setPackage(e.target.value)}
          />
          <Button variant="outline-success" onClick={(e) => handlesubmit(e)}>Search</Button>
        </Form>
      </Container>

      {status && <Entity details={details} />}
      {status && <Issues items={items} />}
      {status && <Report data={data} />}
    </div>
  );
}

export default App;
