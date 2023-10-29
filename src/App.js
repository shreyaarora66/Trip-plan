import React from "react";
import Tours from './components/Tours'
import data from './data'
import {useState} from 'react'
const App = () => {
  const [tours,setTours]=useState(data);

  function removeTour(id){
    const newTours=tours.filter((tour)=>tour.id!==id)
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>no tours left</h2>
        <button className="btn-white" onClick={()=>{setTours(data)}}> refresh content</button>
    </div>
    );


  }
  return(
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
