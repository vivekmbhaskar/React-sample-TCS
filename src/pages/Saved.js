import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import classes from '../CSS-Files/Saved.module.css'
import { UserSliceActions } from '../Redux/UserSlice'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const EachUser = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className={classes.eachUserDiv}>
            <h4 onClick={() => navigate(`/user/${props.id}`)}>{props.name}</h4>
            <FontAwesomeIcon title='remove from saved' className={classes.deleteButton} icon={faTrash} onClick={() => dispatch(UserSliceActions.removeFromSaved(props.id))} />
        </div>
    )
}

const Saved = () => {
    const ctx = useContext(Context)
    const savedItemsId = useSelector(state => state.UserSlice.savedItems)
    const savedItems = ctx.usersData && ctx.usersData.filter(item => savedItemsId.includes(String(item.id)));

    return (
        <div className={classes.mainDiv}>
            {savedItems && savedItems.length > 0 ? savedItems.map(item => <EachUser key={item.id} id={item.id} name={item.name} />) :
                <p className={classes.fallbackText}>No items found</p>}
        </div>
    )
}

export default Saved
