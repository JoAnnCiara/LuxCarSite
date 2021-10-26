import React, { Component } from 'react';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            luxCars: [
                {
                    id: 0,
                    name: 'Aston Martin',
                    image: 'assets/images/redaston.jpg',
                    elevation: 1233,
                    description: "Lorem Ipsum."
                },
                {
                    id: 1,
                    name: 'Mclaren ',
                    image: 'assets/images/mclaren.jpg',
                    elevation: 877,
                    description: "Lorem Ipsum."
                },
                {
                    id: 2,
                    name: 'Ferrari',
                    image: 'assets/images/ferrari.jpg',
                    elevation: 2901,
                    description: "Lorem Ipsum."
                },
                {
                    id: 3,
                    name: 'Lamborghini',
                    image: 'assets/images/lambo.jpg',
                    elevation: 42,
                    description: "Lorem Ipsum."
                }
            ],
        };
    }

    render() {
        const directory = this.state.luxCars.map(luxCar => {
            return (
                <div className="col">
                    <img src={luxCar.image} alt={luxCar.name} />
                    <h2>{luxCar.name}</h2>
                    <p>{luxCar.description}</p>
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
}

export default Directory;