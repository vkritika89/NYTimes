import React from 'react'
import {news_desk,sections,type} from '../actions/constants';
function Search({getDataBySearch}){

    const searchRef = React.createRef();
    const newsRef = React.createRef();
    const sectionRef = React.createRef();
    const typeRef = React.createRef();
    const fromRef = React.createRef();
    const toRef = React.createRef(); 
    return (
      <div className='my-2 py-2'> 
      <h1 className='text-center font-italic font-weight-normal'> New York Times Articles </h1>
      <hr/> 
     <form className='mx-5  '>
       <div className="form-row">
         <div className="col-5 mx-1">
           <label for="searchKey"><b>Search</b></label>
           <input type="text" ref={searchRef} className="form-control" id="searchKey" aria-describedby="searchKey" placeholder="Search Terms" />
           <div className="form-group">
             <label for="from-date-input" className="col-form-label">From</label>
             <div >
               <input type="date" className="form-control  w-50" ref={fromRef}  id="from-date-input"/>
             </div> 
           </div>
           <div className="form-group">
             <label for="to-date-input" className="col-form-label">To</label>
             <div >
               <input type="date"  className="form-control  w-50" ref={toRef} id="to-date-input"/>
             </div> 
           </div>
        
         </div>
         <div className="col-5 mx-1">
           <label><b>Filter</b></label> 
           <div className="form-group">
           <label for="sel1">News Desk</label>
            <select className="form-control w-50" id="sel1"  ref={newsRef}>
              <option value="">Choose Any</option>
              {news_desk.map(desk => {
                return <option value={desk}>{desk}</option>;
              })}
            </select>
          </div>
          <div className="form-group "> 
          <label for="sel2">Section</label> 
            <select className="form-control w-50" id="sel2"  ref={sectionRef} >
              <option value="">Choose Any</option>
              {sections.map(section => {
                return <option value={section}>{section}</option>;
              })}
            </select>
          </div> 
          <div className="form-group "> 
          <label for="sel3">Type</label>
            <select className="form-control w-50"id="sel3" ref={typeRef}>
              <option value="">Choose Any</option>
              {type.map(material => {
                return <option value={material}>{material}</option>;
              })}
            </select>
          </div> 
         </div>
       </div>
       <button className="btn  btn-secondary col-12" onClick={(event) =>getDataBySearch(event,searchRef.current.value,newsRef.current.value,sectionRef.current.value,typeRef.current.value,fromRef.current.value,toRef.current.value)} > Search </button>
         
     </form>  
   </div>
          
    );
}

export default Search