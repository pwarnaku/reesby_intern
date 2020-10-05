import React from 'react';
import Button from '@material-ui/core/Button';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <div>
    <div className="top">
    <h2 >Clients</h2>
    <div>
    <Button variant="outlined">+ NEW CLIENT</Button>
 
    </div>
     </div>
    
    
     <div className="head">
     <div > <Search/></div>
    
     <div className="btns"><Button variant="outlined">Search</Button></div>
     <div className="btns"><Button variant="outlined">Clear</Button></div>
  
      
     </div>
   
    
  
  </div>
 
    
  );
}

export default App;
