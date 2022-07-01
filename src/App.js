import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
