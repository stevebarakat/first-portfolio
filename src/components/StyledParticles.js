import Particles from 'react-particles-js';
import styled from 'styled-components';

export const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  z-index: -1;
`
export const paramConfig={
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
};