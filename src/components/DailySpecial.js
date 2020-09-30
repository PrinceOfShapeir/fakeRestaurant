import { render } from '@testing-library/react';
import React, {useState} from 'react';
import {Container, Row, Col,
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,} from 'reactstrap';

function DailySpecial(){

    const [daily] = useState(getSpecial());

    function getSpecial (){
        let date = new Date();
        let day = date.getDay();
        let specials = ["Sunday-Special", "Monday-Special", "Tuesday-Special", "Wednesday-Special", "Thursday-Special", "Friday-Special", "Saturday-Special"];
        let special = specials[day];
        return special;
    }

    return(

        <>

        <Container id='special'>
            {/*
            <Row>
                
                <Col>
                    <h1>{daily}</h1>
                </Col>
            </Row>*/}
            <Row>
                <Col xs="12" s="8">
                    <Card>
                        <CardImg alt={daily} src={`assets/img/${specialImages[daily]}.jpg`}></CardImg>
                        <CardTitle>{daily}</CardTitle>
                        <CardText>
                            {specialDesc[daily]}
                        </CardText>
                        <Button
                            color="success"
                            href=""


                        >Add to Cart</Button>
                    </Card>
                    {/*
                    <img src={`assets/img/${specialImages[daily]}.jpg`}></img>
                    <div>{specialDesc[daily]}</div>*/}
                </Col>
            </Row>
        </Container>
    </>


    )
}

let specialImages = {"Sunday-Special":"pizza1", "Monday-Special":"bread", "Tuesday-Special":"quiche", "Wednesday-Special":"sandwich", "Thursday-Special":"sausage", "Friday-Special":"tuna", "Saturday-Special":"chicken"};
let specialDesc = {"Sunday-Special":"Enjoy your Sunday with a homemade Mediterranean style pizza with real tomatoes, spinach, and cottage cheese. Get your order in early.", 
"Monday-Special":"You go to work on Mondays to make bread. So do we.", 
"Tuesday-Special":"Our chef says this is a quiche, but our customers say it's delicious!", 
"Wednesday-Special":"Nothing like a sandwich to get over the hump.", 
"Thursday-Special":"Thursday is a sausage day, stringing you on until Friday.", 
"Friday-Special":"Enjoy our homemade Tuna Stroganoff!", 
"Saturday-Special":"Raise your cholesterol guilt free with a fresh fried chicken salad."};

export default DailySpecial;

