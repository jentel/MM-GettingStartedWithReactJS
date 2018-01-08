import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

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
        <Carousel className = "carousel"
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    onClickItem={this.handleClick}>
            <div>
                <img src="http://www.mylilikoikitchen.com/wp-content/uploads/2014/04/Crispy-Bacon-2.jpg" alt="lake"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="http://2.bp.blogspot.com/_vOHPw22N2SI/TOaD1B95VLI/AAAAAAAADOM/keA_zFu30VI/s1600/pasta%2Bwith%2Bsausage%2Bwagon%2Bwheels%2Bwith%2Bartichoke%2Bbacon%2Bjam%2B110.JPG" alt="road" />
                <p className="legend">Legend 2</p>
            </div>
            <div> 
                <img src="https://i.ytimg.com/vi/KBf5oe1VyFk/sddefault.jpg#404_is_fine" alt="track" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel> 
    )};
}