import React from 'react'
import classes from './BoxWrapper.module.css'

const BoxWrapper = (props) => {
  return (
    <div className={classes.boxWrapper}>
        {props.children}
    </div>
  )
}

export default BoxWrapper