// rsf
import React from "react"; 
import SearchFilter from '../SearchFilter/SearchFilter';
  
import WorkshopsList from "../workshops-list/WorkshopsList"; 

function App(props) {
  return (
    <div> 
       <h1 className='mx-auto'>New York Times Articles</h1>
       <WorkshopsList/> 
    </div>
  );
}

export default App;
