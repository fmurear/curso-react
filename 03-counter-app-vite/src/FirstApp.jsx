import React from 'react'

const newMessage = {
    message: 'Hola mundo',
    tittle: 'Francisco'
}

const getResult = (a, b) => {
    return a+b;
}

export const FirstApp = () => {
    return (
        <>
            <h1>{ getResult(1,10) }</h1>
            <p>Soy un subtitulo</p>
        </>
    )
}
