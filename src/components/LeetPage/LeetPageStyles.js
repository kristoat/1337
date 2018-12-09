import styled from "styled-components";
import { getColor } from "../LeetAnimations/LeetAnimationStyles"

export const LeetContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LeetContent = styled.div`
    position: absolute;
    height: calc(100% - 200px);
    width: 100%;
    bottom: 0;
    background-color: ${p => p.leet ? getColor(p.seconds - 1) : 'white'};
`;

export const LeetHeader = styled.header`
    background-color: #222;
    color: white;
    position: absolute;
    height: 200px;
    width: 100%;
    
    h1 {
      font-size: 5em;
      color: ${p => p.leet ? getColor(p.seconds) : 'white'};
    }
`;

export const LogoWrapper = styled.div`
  position: relative;
  margin-top: 100px;
`;