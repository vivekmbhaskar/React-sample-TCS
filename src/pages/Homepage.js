import React, { useContext, useEffect } from 'react'
import classes from '../CSS-Files/Homepage.module.css'
import { Link } from 'react-router-dom'
import Context from '../Context'


const EachUser = (props) => {
  return (
    <div className={classes.eachUserDiv} >
      <Link to={`/user/${props.id}`}><h4>{props.name}</h4></Link>
    </div>
  )
}


const Homepage = () => {
  const ctx = useContext(Context)

  return (
    <div className={classes.mainDiv}>
      {ctx.usersData && ctx.usersData.map(item => <EachUser key={item.id} id={item.id} name={item.name} />)}
    </div>
  )
}

export default Homepage