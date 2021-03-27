import React, { Component } from "react";
import { getWorkshops } from "../../services/workshops";
 

class WorkshopsList extends Component {
  static LOADING = "LOADING";
  static LOADED = "LOADED";
  static ERROR_LOADING = "ERROR_LOADING";

  state = {
    status: WorkshopsList.LOADING 
  };

  render() { 
    const { status, workshops, error } = this.state;
    let el = null;

    switch (status) {
      case WorkshopsList.LOADING:
        el = (
          <div className="alert alert-primary">
            We are fetching workshops. Please wait
          </div>
        );
        break;
      case WorkshopsList.LOADED:
        el = (
          <ul className="my-4">  
            {
              workshops.response.docs.map((article,idx)=>(
                <li key={idx}>{article.abstract}</li>
              ))
            }
          </ul>
        ); 
        break;
      case WorkshopsList.ERROR_LOADING:
        el = <div className="alert alert-danger">{error.message}</div>;
        break;
      default:
        el = null;
    }

    return <div className="container">{el}</div>;
  }

  componentDidMount() {
    getWorkshops()
      .then((workshops) => {
        this.setState({
          status: WorkshopsList.LOADED,
          workshops
        });
      })
      .catch((error) => {
        this.setState({
          status: WorkshopsList.ERROR_LOADING,
          error
        });
      });
  }
}

export default WorkshopsList;
