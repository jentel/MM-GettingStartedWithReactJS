import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Crispy from '../Images/Crispy-Bacon-2.jpg';
import Weave from '../Images/baconWeave.jpg';
import Better from '../Images/Bacon-is-better-bacon.gif';

export class BaconCarousel extends Component {
    handleClick = (event) => {

        const cripsyBacon = 0;
        const baconWeave = 1;

        switch(event)
        {
            case cripsyBacon:
                window.open("http://baconmethod.com/");
                break;
            case baconWeave:
                window.open("https://www.buzzfeed.com/mikespohr/19-bacon-hacks-that-are-guaranteed-to-change-your-life-for");
                break;
            default:
                window.open("https://www.buzzfeed.com/spoonuniversity/bacon-is-bae?utm_term=.qp8QBWR6m#.gvMG0Z71B");
                break;
        }
    }

    render() {
        return (
        <Carousel   className="carousel"
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    onClickItem={this.handleClick}>
            <div>
                <img src={Crispy} alt="Crispy Bacon"/>
                <p className="legend">Love crispy bacon but don't know how to make it?<br/>Click here to find out how!</p>
            </div>
            <div>
                <img src={Weave} alt="Bacon Weave" />
                <p className="legend">Easiest way to keep bacon together!<br/>Find out how to do this, and more by clicking on the link!</p>
            </div>
            <div> 
                <img src={Better} alt="Bacon is makes everything better!" />
                <p className="legend">Click here to learn more bacon recipes!</p>
            </div>
        </Carousel> 
    )};
}