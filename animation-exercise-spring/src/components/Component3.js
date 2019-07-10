import React from 'react'

export default function Component3() {
    return (
        <div style={c3Style}>
            <h1>Component3</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially 
                unchanged.
            </p>
        </div>
    )
}

const c3Style = {
    background: 'skyblue',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center',
}