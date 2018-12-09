import React, {Component} from 'react';
import moment from 'moment';
import LeetAnimations from "../LeetAnimations/LeetAnimations"
import BassLogo from "./../../assets/BassLogo"
import { LeetContainer, LeetHeader, LogoWrapper, LeetContent } from "./LeetPageStyles";

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
                    {this.state.leet ? (
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
