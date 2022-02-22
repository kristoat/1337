import React, {Component} from 'react';
import moment from 'moment';
import LeetAnimations from "../LeetAnimations/LeetAnimations"
import BassLogo from "./../../assets/BassLogo"
import {LeetContainer, LeetContent, LeetHeader, LogoWrapper} from "./LeetPageStyles";
import ReactAudioPlayer from 'react-audio-player';
import bass from "./../../assets/bochkabass.mp3"

let state='scrub'

document.addEventListener('keyup', event => {
    let key = event.key.toLowerCase();
    if (key === '1') {
        state = 'oof'
    } else if (key === '3' && state === 'oof') {
        state = 'dayum'
    } else if (key === '3' && state === 'dayum') {
        state = 'hot dayum'
    } else if (key === '7' && state === 'hot dayum') {
        state = '1337'
    } else if (key === 'l') {
        state = 'hot'
    } else if (key === '3' && state === 'hot') {
        state = 'tub'
    } else if (key === '3' && state === 'tub') {
        state = 'time machine'
    } else if (key === 't' && state === 'time machine') {
        state = 'l33t t1m3'
    } else {
        state = 'scrub'
    }
});

class LeetPage extends Component {
    state = {
        currentTime: '',
        leet: false,
    };

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 200);
    }

    componentWillUnmount() {
        clearInterval(this.timer());
    }

    checkLeetNess = currentTime => {
        const time = currentTime.split(':');
        const hh = 0;
        const mm = 1;
        return (time[hh] === '13' && time[mm] === '37');
    };

    tick = () => {
        const currentTime = moment().format('HH:mm:ss');
        const leet = this.checkLeetNess(currentTime);
        this.setState({currentTime, leet})
    };

    render() {
        const seconds = parseInt(this.state.currentTime.split(":")[2], 10);
        return (
            <LeetContainer>
                <LeetHeader seconds={seconds} leet={this.state.leet}>
                    <h1>{this.state.currentTime}</h1>
                </LeetHeader>
                <LeetContent seconds={seconds} leet={this.state.leet}>
                    <ReactAudioPlayer
                        src={bass}
                        autoPlay
                        loop
                        controls
                    />
                    {state === "1337" && (<iframe title="1337" width="560" height="315"
                            src="https://www.youtube.com/embed/GIhcL8K4shg?autoplay=1"
                            frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                    )}
                    {(state === 'l33t t1m3' || this.state.leet) ? (
                        <LeetAnimations seconds={seconds} />
                    ) : (
                        <LogoWrapper>
                            <BassLogo />
                        </LogoWrapper>
                    )}
                </LeetContent>
            </LeetContainer>
        );
    }
}

export default LeetPage;
