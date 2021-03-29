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
            We are fetching workshops. Please wait
          </div>
        );
        break;
      case Details.LOADED:
        el = (
                <div className="my-4" > 
                <h1 className='text-center font-italic font-weight-normal'>{dataState.response.docs[0].headline.main} </h1>
                 <br></br>
                 <i className='float-right'>{dataState.response.docs[0].byline.original}</i>  
                 <i className='float-left'>Published on {dataState.response.docs[0].pub_date.slice(0, 10)}</i>
                <hr className='my-5'/>
                <p>{dataState.response.docs[0].abstract}</p>
                <p>{dataState.response.docs[0].lead_paragraph}</p>
                </div>
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