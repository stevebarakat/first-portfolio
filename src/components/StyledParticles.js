import Particles from 'react-particles-js';
import styled from 'styled-components';

export const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  z-index: -1;
  background: white;
`
export const paramConfig = {
    "background": {},
    "backgroundMask": {
        "cover": {
            "color": {
                "value": "#fff"
            },
            "opacity": 1
        },
        "enable": false
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "infection": {
        "cure": false,
        "delay": 0,
        "enable": false,
        "infections": 0,
        "stages": []
    },
    "interactivity": {
        "detectsOn": "canvas",
        "events": {
            "onClick": {
                "enable": false,
                "mode": "push"
            },
            "onDiv": {
                "ids": "repulse-div",
                "enable": false,
                "mode": "repulse",
                "type": "circle"
            },
            "onHover": {
                "enable": false,
                "mode": "connect",
                "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                }
            },
            "resize": false
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
            },
            "connect": {
                "distance": 80,
                "links": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 400,
                "links": {
                    "opacity": 1
                }
            },
            "push": {
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4,
                "speed": 1
            },
            "slow": {
                "factor": 3,
                "radius": 200
            }
        }
    },
    "particles": {
        "collisions": {
            "enable": false,
            "mode": "bounce"
        },
        "color": {
            "value": ["#DE1234", "#BADA55", "#993EEF"],
            "animation": {
                "enable": true,
                "speed": 11,
                "sync": false
            }
        },
        "links": {
            "blink": false,
            "color": {
                "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": false,
            "opacity": 0.4,
            "shadow": {
                "blur": 5,
                "color": {
                    "value": "lime"
                },
                "enable": false
            },
            "triangles": {
                "enable": true
            },
            "width": 1,
            "warp": false
        },
        "move": {
            "angle": 90,
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "direction": "none",
            "enable": true,
            "noise": {
                "delay": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0
                },
                "enable": false
            },
            "outMode": "out",
            "random": false,
            "speed": 2,
            "straight": false,
            "trail": {
                "enable": false,
                "length": 100,
                "fillColor": {
                    "value": "#FFF"
                }
            },
            "vibrate": false,
            "warp": true
        },
        "number": {
            "density": {
                "enable": true,
                "area": 800,
                "factor": 1000
            },
            "limit": 500,
            "value": 300
        },
        "opacity": {
            "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 1,
                "sync": false
            },
            "random": {
                "enable": false,
                "minimumValue": 1
            },
            "value": 1
        },
        "rotate": {
            "animation": {
                "enable": true,
                "speed": 0,
                "sync": false
            },
            "direction": "clockwise",
            "random": false,
            "value": 0
        },
        "shadow": {
            "blur": 0,
            "color": {
                "value": "#000000"
            },
            "enable": false,
            "offset": {
                "x": 0,
                "y": 0
            }
        },
        "shape": {
            "options": {
                "character": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "M",
                    "weight": "400"
                },
                "char": {
                    "fill": true,
                    "font": "Verdana",
                    "style": "",
                    "value": "M",
                    "weight": "400"
                },
                "polygon": {
                    "sides": 5
                },
                "star": {
                    "sides": 5
                },
                "image": {
                    "height": 100,
                    "replaceColor": true,
                    "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                    "width": 100
                },
                "images": {
                    "height": 100,
                    "replaceColor": true,
                    "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                    "width": 100
                }
            },
            "type": "circle"
        },
        "size": {
            "animation": {
                "destroy": "none",
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "startValue": "max",
                "sync": false
            },
            "random": {
                "enable": true,
                "minimumValue": 10
            },
            "value": 3
        },
        "stroke": {
            "color": {
                "value": "none"
            },
            "width": 0,
            "opacity": 0
        },
        "twinkle": {
            "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
            },
            "particles": {
                "enable": true,
                "frequency": 0.05,
                "opacity": 1
            }
        }
    },
    "pauseOnBlur": true
};