import React, { Component} from "react";

import { getDataById } from "../../services/getData";



class Details extends Component {
  static LOADING = "LOADING";
  static LOADED = "LOADED";
  static ERROR_LOADING = "ERROR_LOADING";

  state = {
    status: Details.LOADING,
  };

  render() {
    const { status, dataState, error } = this.state;
    let el = null;
    console.log(dataState);
    switch (status) {
      case Details.LOADING:
        el = (
          <div className="alert alert-primary mx-4">
            We are fetching details. Please wait
          </div>
        );
        break;
      case Details.LOADED:
        el = (
         
          dataState.response.docs.map((each,idx)=>(
            <div className="my-4" key={idx} > 
            <h1 className='text-center font-italic font-weight-normal'>{each.headline.main} </h1>
             <br></br>
             <i className='float-right'>{each.byline.original}</i>  
             <i className='float-left'>Published on {each.pub_date.slice(0, 10)}</i>
            <hr className='my-5'/>
            <p>{each.abstract}</p>
            <p>{each.lead_paragraph}</p>
            </div>
           ))
                
        );
        break;
      case Details.ERROR_LOADING:
        el = <div className="alert alert-danger">{error.message}</div>;
        break;
      default:
        el = null;
    }

    return <div className="container">{el}</div>;
  }

  componentDidMount() {

    getDataById( (this.props.location.pathname.slice(1,)) )
      .then((dataState) => {
        this.setState({
          status: Details.LOADED,
          dataState,
        });
      })
      .catch((error) => {
        this.setState({
          status: Details.ERROR_LOADING,
          error,
        });
      });

  
  }
}

export default Details;