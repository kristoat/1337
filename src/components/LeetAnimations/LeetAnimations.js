import React from "react"
import {GridContainer, LogoWrapper, Spin, getColor} from "./LeetAnimationStyles"
import BassLogo from "../../assets/BassLogo";
import EvolveTron from "../EvolveTron/EvolveTron";

const LeetAnimations = ({seconds}) => {
    if (seconds < 16) {
        return <EvolveTron/>
    }

    return seconds % 10 < 7 ? <LeetArray seconds={seconds}/> : <BlinkingSpinningBassLogo seconds={seconds}/>
};


const BlinkingSpinningBassLogo = ({seconds}) =>
    <Spin>
        <LogoWrapper seconds={seconds % 10}>
            <BassLogo
                primary={getColor(seconds)}
                secondary={getColor(seconds - 1)}
                thirdary={getColor(seconds - 2)}
                forthary={getColor(seconds - 3)}
                fifthary={getColor(seconds - 4)}
            />
        </LogoWrapper>
    </Spin>
;

const LeetText = () => <Spin><h1>1337</h1></Spin>;

const LeetArray = ({seconds}) => (
    <GridContainer seconds={seconds}>
        {[...Array(3)].map((e, i) => <LeetText key={i}/>)}
        <LeetText/>
        <BlinkingSpinningBassLogo seconds={seconds}/>
        <LeetText/>
        {[...Array(3)].map((e, i) => <LeetText key={i}/>)}
    </GridContainer>
);


export default LeetAnimations