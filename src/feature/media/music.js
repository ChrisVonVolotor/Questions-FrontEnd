import React, {Component} from 'react';
const FontAwesome = require('react-fontawesome');


class Music extends React.Component {


    constructor(props) {
        super(props);
        this.state = { play: false };
        this.url = "http://localhost:3000/Grieg_Peace_of_the_woods.mp3";
        this.audio = new Audio(this.url);

        this.togglePlay = this.togglePlay.bind(this);

        this.audio.play();
    }


    togglePlay() {
        this.setState({ play: !this.state.play });
        console.log(this.audio);
        this.state.play ? this.audio.play() : this.audio.pause();
    }

    render() {
        return (
            <div className="musicZone">
                <label  onClick={this.togglePlay}>{this.state.play ? <FontAwesome className="fa-play"/> : <FontAwesome className="fa-pause"/> }</label>
                <label>  Greig - Peace of the Wood</label>
            </div>
        );
    }
}

export default Music;