import { getDefaultNormalizer } from '@testing-library/react';
import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';

function Header () {

    return(
        <>
        <Container fluid="sm">
            <Row xs="4">
                <Col xs="2">
                    <a href="#">Home</a>
                </Col>
                <Col xs="2">
                    <a href="/menu">Menu</a>
                </Col>
            </Row>
        </Container>
        </>

    )

}

export default Header;