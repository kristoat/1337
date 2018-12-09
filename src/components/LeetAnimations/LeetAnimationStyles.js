import styled, {css} from "styled-components";

const moves = [
    "center",
    "normal",
    "start",
    "end",
    "center",
    "stretch",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
];

export const colors = [
    "hotpink",
    "blue",
    "cyan",
    "red",
    "green",
    "neon",
    "yellow",
    "purple",
    "teal",
    "saddlebrown",
    "plum",
];

const SpinAnimation = css`
    @keyframes leet-logo-spin {
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(360deg);
        }
    }
    animation: leet-logo-spin alternate infinite 0.5s ease-in-out;
`;

export const GridContainer = styled.div`
  display: grid;  
  grid-template-columns: auto auto auto;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: ${p => moves[p.seconds % 10]};
  color: ${p => getColor(p.seconds)};
`;


export const Spin = styled.div`
    ${SpinAnimation};
    
    h1 {
      font-size: 5em;
      color: ${p => getColor(p.seconds)};
    }
`;

export const LogoWrapper = styled.div`
  position: relative;
  
  svg {
    width: ${p => (p.seconds + 1) * 75}px;
    height: ${p => (p.seconds + 1) * 75}px;
  }
`;

export const getColor = (seconds) => colors[seconds % 10];
