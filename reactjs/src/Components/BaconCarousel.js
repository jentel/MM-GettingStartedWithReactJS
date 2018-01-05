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
                <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/bacon_sizzling_facts_rmq/650x350_bacon_sizzling_facts_rmq.jpg" alt="lake"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://i.amz.mshcdn.com/fgl4j1041-6dOSjJ8N4Rx4hgMc4=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F651734%2F66c8c540-8930-4174-9680-177b27639f4c.jpg" alt="road" />
                <p className="legend">Legend 2</p>
            </div>
            <div> 
                <img src="https://365daysofbacon.files.wordpress.com/2013/02/bacon_heart.jpg" alt="track" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel> 
    )};
}