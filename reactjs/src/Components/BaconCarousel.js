import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Crispy from '../Images/Crispy-Bacon-2.jpg';
import Weave from '../Images/baconWeave.jpg';
import Better from '../Images/Bacon-is-better-bacon.gif';

export class BaconCarousel extends Component {
    handleClick = (event) => {
        switch(event)
        {
            case 0:
                window.open("https://www.google.com");
                break;
            case 1:
                window.open("https://www.bing.com");
                break;
            default:
                window.open("https://www.github.com");
                break;
        }
    }

    render() {
        return (
        <div>
            <Carousel className = "carousel"
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        onClickItem={this.handleClick}>
                <div>
                    <img src={Crispy} alt="Crispy Bacon"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Weave} alt="Bacon Weave" />
                    <p className="legend">Legend 2</p>
                </div>
                <div> 
                    <img src={Better} alt="track" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> 
            <p> why isn't this working??</p>
        </div>
    )};
}