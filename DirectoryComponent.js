import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLuxCar: null
        };
    }

    onLuxCarSelect(luxCar) {
        this.setState({ selectedLuxCar: luxCar });
    }

    renderSelectedLuxCar(luxCar) {
        if (luxCar) {
            return (
                <Card>
                    <CardImg top src={luxCar.image} alt={luxCar.name} />
                    <CardBody>
                        <CardTitle>{luxCar.name}</CardTitle>
                        <CardText>{luxCar.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.luxCars.map(luxCar => {
            return (
                <div key={luxCar.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onLuxCarSelect(luxCar)}>
                        <CardImg width="100%" src={luxCar.image} alt={luxCar.name} />
                        <CardImgOverlay>
                            <CardTitle>{luxCar.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedLuxCar(this.state.selectedLuxCar)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;