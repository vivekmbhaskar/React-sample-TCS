import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Context from '../Context'
import BoxWrapper from '../CSS-Files/BoxWrapper'
import classes from '../CSS-Files/DetailPage.module.css'
import { UserSliceActions } from '../Redux.js/UserSlice'


const DetailPage = () => {

    const params = useParams()
    const ctx = useContext(Context)
    const dispatch = useDispatch()

    // console.log(ctx.usersData);

    const ThisUserData = ctx.usersData && ctx.usersData.filter(item => item.id == params.userId)[0];

    const isSaved = useSelector(state => state.UserSlice.savedItems).includes(String(params.userId))
    console.log(isSaved, params.userId, useSelector(state => state.UserSlice.savedItems));
    let returning = <p>No details found</p>

    const saveButtonHandler = () => {
        dispatch(UserSliceActions.addToSaved(params.userId))
    }

    if (ThisUserData) {
        returning =
            <BoxWrapper>
                <div className={classes.detailDiv}>
                    <h3>{ThisUserData.name}</h3>
                    <p><span>Username : </span>{ThisUserData.username}</p>
                    <p><span>Email : </span>{ThisUserData.email}</p>
                    <p><span>Phone : </span>{ThisUserData.phone}</p>
                    <p><span>Company : </span>{ThisUserData.company.name}</p>
                    <p><span>Address : </span></p>
                    <li>{ThisUserData.address.street}</li>
                    <li>{ThisUserData.address.suite}</li>
                    <li>{ThisUserData.address.city}</li>
                    <li>{ThisUserData.address.zipcode}</li>
                    <button onClick={saveButtonHandler} disabled={isSaved}>Save</button>
                </div>
            </BoxWrapper>
    }
    return (
        returning
    )
}


export default DetailPage