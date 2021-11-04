import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// home page

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderCard item={props.luxCar} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderCard item={props.promotion} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderCard item={props.partner} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;