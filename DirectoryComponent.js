import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({luxCar}) {
    return (
        <Card >
            <Link to={`/directory/${luxCar.id}`}>
                <CardImg width="100%" src={luxCar.image} alt={luxCar.name} />
                <CardImgOverlay>
                    <CardTitle>{luxCar.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.luxCars.map(luxCar => {
        return (
            <div key={luxCar.id} className="col-md-5 m-1">
                <RenderDirectoryItem luxCar={luxCar} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;