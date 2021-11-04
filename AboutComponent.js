import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg, CardLink  } from 'reactstrap';


function About (luxCar) {
    return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={luxCar.image} alt={luxCar.name} />
                    <CardBody>
                        <CardTitle>{luxCar.name}</CardTitle>
                        <CardText>{luxCar.description}</CardText>
                    </CardBody>
                </Card>
                <img
                    alt="Card image cap"
                    src="/assets/images/bug.jpg"
                    width="100%"
                />
                   
                <Card>
                    <CardBody>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </CardText>
                        <CardLink href="#">
                            Card Link
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
               
        );
}


export default About;