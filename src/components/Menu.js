import React, {useState} from 'react';
import {Container, Row, Col,
    Button,
    Card,
    CardGroup,
    CardBody,
    CardImg,
    CardTitle,
    CardText,} from 'reactstrap';



let specialImages = {"Sunday-Special":"pizza1", "Monday-Special":"bread", "Tuesday-Special":"quiche", "Wednesday-Special":"sandwich", "Thursday-Special":"sausage", "Friday-Special":"tuna", "Saturday-Special":"chicken"};

function RenderMenu (){

    let outputMenu = [];
    for (let property in specialImages){
        outputMenu.push(

            
                <Card id={specialImages[property]}>
                    <CardImg alt={specialImages[property]} src={`assets/img/${specialImages[property]}.jpg`}></CardImg>
                    <CardTitle>{property}</CardTitle>
                    <CardText>
                        {specialImages[property]}
                    </CardText>
                    <Button
                        color="success"
                        href=""


                    >Add to Cart</Button>
                </Card>
            
        )
    }
    return (
        <CardGroup>
            {outputMenu}
        </CardGroup>
    )
}

function Menu(){

    
return (

    
        <RenderMenu />
    

)

}

export default Menu;