import React from 'react'
import PropTypes from 'prop-types'
import classes from '*.module.css'



const buildControl = (props) => {
    return (
        <div  className={classes.BuildControl}>
            <div className={classes.label}>
                {props.label}
            </div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    )
}



export default buildControl
