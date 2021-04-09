import React from 'react'
import { useHistory } from "react-router";
export default function viewDetails(props) {
    const history = new useHistory();
    return (
        <div>
            <button className=" m-3 font-weight-bolder" onClick={()=>history.push("/studentDetail")}>View Details</button>
        </div>
    )
}
