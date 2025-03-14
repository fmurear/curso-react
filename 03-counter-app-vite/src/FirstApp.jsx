import React from 'react'
import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle, name }) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    name: 'Francisco Muñoz-Reja Arias',
    subtitle: 'No hay subtítulo',
    title: 'No hay título',
}
