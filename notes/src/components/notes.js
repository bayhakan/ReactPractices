import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Note from './note'

const Notes = ({data}) => {
    
  return (
    <Container>
        <Row className="g-5">
            {
                data.map(item=> 
                <Col md={4} key={item.id}>
                    <Note note={item}/>
                </Col>)
            }
            
        </Row>
    </Container>
  )
}

export default Notes