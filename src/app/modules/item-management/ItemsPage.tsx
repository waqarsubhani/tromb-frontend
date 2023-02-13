import { Col, Container, Row } from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom'
import ItemsListWrapper from './items-list/ItemsList'

const ItemsPage = () => {
  return (
    <Routes>
      <Route index element={
        <>
          <Container>
            <Row>
              <Col className='my-3'><h2>Items list</h2></Col>
            </Row>
            <Row>
              <ItemsListWrapper />
            </Row>
          </Container>
        </>
      } 
      />
    </Routes>
  )
}

export default ItemsPage;
