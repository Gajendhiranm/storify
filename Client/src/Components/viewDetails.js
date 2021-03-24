import React from 'react'
import { Redirect, useHistory } from "react-router";
export default function viewDetails(props) {
    const history = new useHistory();
    console.log("hii",props);
    return (
        <>
        { localStorage.getItem('currentUser')==null ? <Redirect to="/login" /> : 
        <div>
        <h1>hii</h1>
    </div>
        }
        </>
        
    )
}
