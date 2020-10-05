import React, { useState, useEffect } from "react";
import Datatable from "./datatable/index";
import Button from '@material-ui/core/Button';
import Search from './components/Search';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
 
    fetch("http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby?api_key=b7c58b")
    .then ((response )=> response.json())
   .then((json) => setData(json));

  
  }, 
  
  []);

  return (

    <div>
      <div className="top">
      <h2 >Clients</h2>
      <div>
      <Button variant="outlined">+ NEW CLIENT</Button>
   
      </div>
       </div>
      
      
       <div className="search-btns">
       <div > <Search/></div>
      
       <div className="btns"><Button variant="outlined">Search</Button></div>
       <div className="btns"><Button variant="outlined">Clear</Button></div>
    
        
       </div>
     
       <Datatable data ={data}/>
    
    </div>
   
    
  );
}

export default App;
