import React from 'react';

import { Link } from "react-router-dom"; 
import Pagination from '../Pagination'
function ShowResults( {dataState }){

    console.log(dataState.response)
    const LOADING_DATA = "LOADING_DATA"
    const LOADED_DATA = "LOADED_DATA"
    const ERROR_LOADING_DATA = "ERROR_LOADING_DATA"
    const [currentPage, setCurrentPage]= React.useState(1);
    const [postsPerPage] = React.useState(2);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts;
    if(dataState.response.docs){
        currentPosts = dataState.response.docs.slice(indexOfFirstPost, indexOfLastPost);}
    console.log(currentPosts);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    console.log(dataState.status)

    let el
    
    switch(dataState.status){
        case LOADING_DATA:
            if(dataState.response === "False"){
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
                    <div className="alert alert-primary mx-5" role="alert">
                        <strong>Please Select Filter</strong> 
                    </div>
                )
            }
            break;
        case LOADED_DATA:
            el =  (<React.Fragment> 
{     
                currentPosts.map((each, idx) => (
               <div className="card my-4 mx-5 " key={idx}>
                        <div className="card-body">
                            <h4 className="card-title"> {each.headline.main}</h4>
                           
                             <i className='float-right'>{each.byline.original}</i> 
                             <i className='float-left'>Published on {each.pub_date.slice(0, 10)}</i>
                             <br></br>
                             < p>{each.lead_paragraph}</p>
                            <Link to={"/" + each._id} className="btn btn-primary">Go to Article</Link>  
                        </div>
                    </div> 
             )) } 
             
             <Pagination
                postsPerPage={postsPerPage}
                totalPosts={dataState.response.docs.length}
                paginate={paginate}
              /></React.Fragment> 
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