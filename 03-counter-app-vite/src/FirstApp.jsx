import React from 'react'
import PropTypes from 'prop-types'
import checkPropTypes from 'prop-types/checkPropTypes';

export const FirstApp = ({ title='No hay título', subtitle='No hay subtítulo', name='Francisco Muñoz-Reja Arias' }) => {
    checkPropTypes(FirstApp.propTypes, { title, subtitle, name }, 'prop', 'FirstApp');
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

// FirstApp.defaultProps = {
//     name: 'Francisco Muñoz-Reja Arias',
//     subtitle: 'No hay subtítulo',
//     title: 'No hay título',
// }
