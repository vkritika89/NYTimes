import React from 'react';

import { Link } from "react-router-dom";
function ShowResults( {dataState }){

    const LOADING_DATA = "LOADING_DATA"
    const LOADED_DATA = "LOADED_DATA"
    const ERROR_LOADING_DATA = "ERROR_LOADING_DATA"
    console.log(dataState.status)

    let el
    console.log(dataState.response)

    switch(dataState.status){
        case LOADING_DATA:
            if(dataState.response === "False"){
                console.log('hello')
                el = (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <strong>{dataState.error}</strong> 
                     </div>
                )
                
            }
            else{
                el = (
                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <strong>Please Enter Your Details</strong> 
                    </div>
                )
            }
            break;
        case LOADED_DATA:
            el =  (
                    dataState.response.docs.map((each,idx)=>(
                        <ul className="my-4" key={idx}>  
                            <li>{each.abstract}</li> 
                            <li> publish date-{each.pub_date.slice(0,10)}</li>
                            <li>{each.web_url}</li>
                            <Link to={"/" + each._id}>{each.source}</Link>
                        </ul>
                       ))
                     
                )
            break;
        case ERROR_LOADING_DATA:
            el = (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <strong>{dataState.error}</strong> 
                </div>
            )
            break;
        default:
            el = null
            break;
    }
    return (
        el
    )
}

export default ShowResults