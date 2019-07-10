import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component1() {
    const props1 = useSpring({opacity: 1, marginTop: 0,
                                from: {opacity: 0, marginTop: -500}
                            })
    
    const props2 = useSpring({ number: 10, 
                                from: { number: 0 },
                                config: { duration: 10000 }
                            })

    return (
        <animated.div style={props1}>
            <div style={c1Style}>
                <h1>Component 1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially 
                    unchanged.
                </p>
                <animated.span style={counter}>
                    {props2.number.interpolate(val => Math.floor(val))}
                </animated.span>
            </div>
        </animated.div>
    )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center',
}

const counter = {
    background: '#333',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}
