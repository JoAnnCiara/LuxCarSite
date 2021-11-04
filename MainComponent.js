import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Directory from './DirectoryComponent';
import LuxCarInfo from './LuxCarInfoComponent';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Routes, Route } from 'react-router-dom';
import { LUXCARS } from '../shared/luxCars';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            luxCars: LUXCARS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
            
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    luxCar={this.state.luxCars.filter(luxCar => luxCar.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    
                />
            );
        };

        const LuxCarWithId = ({ match }) => {
            return (
                <LuxCarInfo luxCar={this.state.luxCars.filter(luxCar => luxCar.id === +match.params.luxCarId)[0]}
                    comments={this.state.comments.filter(comment => comment.luxCarId === +match.params.luxCarId)}
                    
                />
            );
        };

        return (
            <div>
                <Header />
                <Routes>
                    <Route path='/home' component={HomePage} />
                    <Route path='/directory/:luxCarId' component={LuxCarWithId} />
                    <Route path='/directory' render={() => <Directory luxCars={this.state.luxCars} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={About} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;