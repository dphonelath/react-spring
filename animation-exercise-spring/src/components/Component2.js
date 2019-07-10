import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component1() {
    const props = useSpring({opacity: 1,
                            config: { delay: 9000, duration: 1000 },
                            from: {opacity: 0}
                                })
    return (
        <animated.div style={props}>
            <div style={c2Style}>
                <h1>Component 2</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially 
                    unchanged.
                </p>
                <button style={btn}>Toggle Component 3</button>
            </div>
        </animated.div>
    )
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center',
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin:'15px 0'

}