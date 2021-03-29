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
          <div className="alert alert-primary">
            We are fetching workshops. Please wait
          </div>
        );
        break;
      case Details.LOADED:
        el = (
            dataState.response.docs.map((each,idx)=>(
                <ul className="my-4" key={idx}>  
                    <li>{each.abstract}</li>
                    <li>{each.snippet}</li>
                    <li>{each.lead_paragraph}</li>
                    <li>{each.source}</li>
                </ul>
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