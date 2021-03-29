// require for JSX -> React.createElement() to work
import React from "react";
import {getData} from '../../services/getData';
import Search from './Search';
import ShowResults from './ShowResults';


function Home( props ) {
  const LOADING_DATA = "LOADING_DATA"
  const LOADED_DATA = "LOADED_DATA"
  const ERROR_LOADING_DATA = "ERROR_LOADING_DATA"
  const [dataState , setData ] = React.useState({
    status: LOADING_DATA,
    error: null,
    response: {}
});
  function getDataBySearch(event,search,news_desk,section,type,fromDate,toDate ){
    event.preventDefault();
      getData(search,news_desk,section,type,fromDate,toDate)
      .then((data) => {
        setData( {
          ...dataState,
          status: LOADED_DATA,
          response: data.response
         } );
      })
      .catch((error) => {
        setData( {
          ...dataState,
          status: ERROR_LOADING_DATA,
          error
      } );
      });
  }
  return (
    <React.Fragment>
    <Search getDataBySearch = {getDataBySearch} />
    <ShowResults dataState = {dataState} />
    </React.Fragment>
  );
}

export default Home;
